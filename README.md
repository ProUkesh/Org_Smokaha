# Smokaha Website

This repository contains the source code for **Smokaha**, a static website for a smoke shop. The site is built with plain HTML, CSS, and JavaScript and provides pages for various product categories such as cigarettes, cigars, disposable vapes, nicotine pouches, herb concentrate, and more.

## Project Structure

```
- index.html               # Home page
- contact-us.html          # Contact form and store location map
- assets/
  - css/                   # Stylesheets (style.css)
  - js/                    # Client-side JavaScript
  - images/                # Icons, logos and product images
- [brand folders]          # Category pages for specific products
```

All pages include a shared `header.html` file for the navigation menu. JavaScript in `assets/js/script.js` handles mobile navigation, modals, and a simple age verification popup.

## Running Locally

Most pages are static and can be viewed by opening `index.html` in a browser. A minimal Node.js server is included to process contact form submissions and serve the site locally. Install dependencies and start the server with:

```bash
npm install
npm start
```

The site will be available at `http://localhost:3000`.

## Age Restriction Notice

The site contains references to tobacco and nicotine products. The built‑in age verification script requires visitors to confirm they are 21 or older. Ensure compliance with your local laws before deploying or modifying this code.

## Contributing

Pull requests are welcome. If you plan to contribute substantial changes, consider opening an issue first to discuss your ideas.

---
This project is released under the [MIT License](LICENSE).
