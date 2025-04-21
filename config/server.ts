export default ({ env }) => ({
  url: env('RENDER_EXTERNAL_URL'), // זה מה שחשוב
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
});
