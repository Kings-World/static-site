export const siteConfig = {
    name: "Kings World",
    url: "https://kings-world.net",
    title: "Kings World | Discord Bots & Developer Tools for Server Management",
    description:
        "Kings World offers powerful Discord bots, developer tools, and community resources to enhance your server experience. Explore our suite of utilities for moderation, engagement, and server management.",
} as const;

export const links = {
    discord: "https://discord.gg/DDangtgdJM",
    github: "https://github.com/Kings-World",
    sponsor: "https://seren.link/sponsor",
} as const;

export const mainNav = [
    // {
    //     name: "Dashboard",
    //     href: "/dashboard",
    //     disabled: true,
    // },
] satisfies {
    name: string;
    href: string;
    disabled?: boolean;
}[];
