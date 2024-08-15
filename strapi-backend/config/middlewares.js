module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://harman-website-strapi.onrender.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://harman-website-strapi.onrender.com'],
          'connect-src': ["'self'", 'https:', 'https://harman-website-strapi.onrender.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:5173', 'https://harman-website.onrender.com'], // your frontend domain
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
