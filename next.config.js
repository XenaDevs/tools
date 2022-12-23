module.exports = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "jsx", "js"],
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/fJpypWzSyH",
        permanent: false,
      },
    ];
  },
};
