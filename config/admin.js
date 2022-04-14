module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2420a1dbce7eb456567e06dbfbaf4bc2'),
  },
});
