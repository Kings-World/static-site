import type {
    Article,
    FAQPage,
    Organization,
    Person,
    SoftwareApplication,
    Thing,
    WebPage,
    WebSite,
    WithContext,
} from "schema-dts";
import { links, siteConfig } from "./constants";

const urlWithTrailingSlash = `${siteConfig.url}/`;

export type Schema<T extends Thing = Thing> = WithContext<T>;

const serenSchema: Person = {
    "@type": "Person",
    name: "Seren_Modz 21",
    url: "https://seren.dev",
    sameAs: ["https://github.com/SerenModz21", links.sponsor],
    jobTitle:
        "Lead Developer, Software Engineer, Software Developer, DevOps Engineer",
    knowsAbout: ["Programming", "TypeScript", "Software Development", "DevOps"],
    knowsLanguage: {
        "@type": "Language",
        name: "English",
        alternateName: "en",
    },
};

export function createOrganizationSchema(): WithContext<Organization> {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: urlWithTrailingSlash,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        sameAs: [links.github, links.discord],
        founder: serenSchema,
        member: [serenSchema],
        knowsAbout: [
            "Discord Bots",
            "Server Management",
            "Twitch Integrations",
            "Discord API",
        ],
        keywords:
            "Discord Bots, Server Management, Moderation Tools, Leveling System, Twitch Notifications",
        knowsLanguage: {
            "@type": "Language",
            name: "English",
            alternateName: "en",
        },
    };
}

export function createWebPageSchema(
    title: string,
    description: string,
    url: URL,
): WithContext<WebPage> {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: url.toString(),
        isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: urlWithTrailingSlash,
        },
    };
}

export function createWebSiteSchema(): WithContext<WebSite> {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: urlWithTrailingSlash,
    };
}

export function createFAQSchema(): WithContext<FAQPage> {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do I join the server?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: 'To join the server, click the "Join Server" button above. You will be redirected to the Kings World server where you can accept the invite.',
                },
            },
            {
                "@type": "Question",
                name: "How can I become a staff member?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unfortunately, we are not currently accepting applications for staff members. However, we may open applications in the future.",
                },
            },
        ],
    };
}

export function createSoftwareSchema(): WithContext<SoftwareApplication> {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Kings Beta",
        applicationCategory: "UtilityApplication, ChatBot, DiscordBot",
        description:
            "Kings Beta is a feature-rich Discord bot offering moderation tools, server automation, starboard functionality, leveling systems, and Twitch notifications.",
        softwareVersion: "Beta",
        featureList:
            "Moderation, Automation, Starboard, Leveling, Twitch notifications, Utilities",
        author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: urlWithTrailingSlash,
        },
    };
}

export function createLegalPageSchema(
    title: string,
    description: string,
    url: URL,
    datePublished: string,
    dateModified: string,
): Schema<Article> {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        name: title,
        description: description,
        url: url.toString(),
        datePublished: datePublished,
        dateModified: dateModified,
        isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: urlWithTrailingSlash,
        },
    };
}
