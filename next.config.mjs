/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ["pages", "app", "components", "lib", "src", "tests"],
  },
}

export default nextConfig
