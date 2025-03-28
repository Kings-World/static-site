export const siteConfig = {
    name: "Kings World",
    description: "Kings World is a suite of tools, Discord bots, and more",
} as const;

export const links = {
    discord: "https://discord.gg/DDangtgdJM",
    github: "https://github.com/Kings-World",
    sponsor: "https://seren.link/sponsor",
} as const;

export const mainNav = [
    {
        name: "Dashboard",
        href: "/dashboard",
        disabled: true,
    },
] satisfies {
    name: string;
    href: string;
    disabled?: boolean;
}[];
