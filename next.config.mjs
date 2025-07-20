// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async redirects() {
//         return [
//           {
//             source: '/:path*',
//             has: [{ type: 'host', value: 'www.18squares.com' }],
//             destination: 'https://18squares.com/:path*',
//             permanent: true,
//           },
//         ];
//       },

// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              key: 'host',
              value: 'www.18squares.com',
            },
          ],
          destination: 'https://18squares.com/:path*',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  