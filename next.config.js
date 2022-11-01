const { i18n } = require('./next-i18next.config');


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com", "store.storeimages.cdn-apple.com", "img.icons8.com"],
  },
  i18n,

  // pageExtensions:['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};
