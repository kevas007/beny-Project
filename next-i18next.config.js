const path = require('path');
/** @type {import('next').NextConfig} */
module.exports = {
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
      localePath: path.resolve('./public/locales')
    }
  };