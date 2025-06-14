const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve static files
app.use(express.static(__dirname));

// contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body;
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const entry = {
    name,
    phone,
    email,
    message,
    date: new Date().toISOString()
  };

  const file = path.join(__dirname, 'data', 'messages.json');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  let data = [];
  if (fs.existsSync(file)) {
    try {
      data = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      console.error('Failed to parse existing messages:', e);
    }
  }
  data.push(entry);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log('Received contact form:', entry);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
