/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            },
            {
                protocol: "https",
                hostname: "niji.fr",
            },
            {
                protocol: "https",
                hostname: "www.frenchtechbordeaux.com"
            },
            {
                protocol: "https",
                hostname: "www.magellandigitalgroup.com"
            },
            {
                protocol: "https",
                hostname: "media.licdn.com"
            }
        ]
    }
}

module.exports = nextConfig
