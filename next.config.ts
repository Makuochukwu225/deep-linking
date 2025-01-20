import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // This ensures the .well-known directory is accessible
    async headers() {
        return [
            {
                source: '/.well-known/assetlinks.json',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
