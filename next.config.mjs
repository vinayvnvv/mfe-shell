import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // specify remotes
    userdetails: `userdetails@http://localhost:4002/_next/static/${location}/remoteEntry.js`,
    users: `users@http://localhost:4001/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        },
      })
    );

    return config;
  },
};

export default nextConfig;
