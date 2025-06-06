import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/projects',
        destination: '/work',
      },
      {
        source: '/projects/:path*',
        destination: '/work/:path*',
      },
      {
        source: '/clubs',
        destination: '/blog',
      },
      {
        source: '/clubs/:path*',
        destination: '/blog/:path*',
      },
    ];
  },
};

export default withMDX(nextConfig);
