module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69d0cbd80fb1f7ea3863c405c35d7fef'),
  },
});
