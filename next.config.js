/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/_variables.scss";
                  @import "~@styles/_mixins.scss";`,
  },
  images: {
      domains: ['m.media-amazon.com'],
  },
}

module.exports = nextConfig
