// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
  output:
    process.env.VAYUCRED_NEXT_OUTPUT === "standalone"
      ? "standalone"
      : "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
