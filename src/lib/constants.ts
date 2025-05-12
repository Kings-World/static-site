export const siteConfig = {
    name: "Kings World",
    url: "https://kings-world.net",
    title: "Kings World | Discord Bots & Developer Tools for Server Management",
    description:
        "Kings World offers Discord bots and developer tools to enhance your server experience. We have utilities for moderation, engagement, and server management.",
} as const;

export const links = {
    discord: "https://discord.gg/DDangtgdJM",
    github: "https://github.com/Kings-World",
    sponsor: "https://seren.link/sponsor",
} as const;

export const mainNav: NavLink[] = [
    {
        name: "Dashboard",
        href: "/dashboard/",
    },
];

interface NavLink {
    name: string;
    href: string;
    disabled?: boolean;
}
