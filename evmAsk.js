// ...existing code...
try {
  Object.defineProperty(window, 'ethereum', {
    // ...existing code...
  });
} catch (e) {
  console.error('Failed to define ethereum property:', e);
}
// ...existing code...