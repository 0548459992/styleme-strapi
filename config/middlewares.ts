module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://styleme-blog-pichuovy7-chaim-yabrovs-projects.vercel.app',
        'https://blog.styleme.fashion',
        'http://localhost:3000'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      credentials: true,
      keepHeaderOnError: true
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
