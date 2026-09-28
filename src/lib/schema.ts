import type {
    Article,
    FAQPage,
    Graph,
    Organization,
    Person,
    SoftwareApplication,
    WebPage,
    WebSite,
} from "schema-dts";
import { links, siteConfig } from "./constants";

interface SchemaGraphData {
    title: string;
    description: string;
    url: URL;
    schemas?: Graph["@graph"];
}

function getPageAnchorId(url: URL, fragment: string) {
    const base = url.href.endsWith("/") ? url.href : `${url.href}/`;
    return `${base}${fragment}`;
}

const globalIds = {
    organization: `${siteConfig.url}/#organization`,
    website: `${siteConfig.url}/#website`,
};

const pageIds = {
    webpage: (url: URL) => getPageAnchorId(url, "#webpage"),
    software: (url: URL) => getPageAnchorId(url, "#software"),
    faq: (url: URL) => getPageAnchorId(url, "#faq"),
    article: (url: URL) => getPageAnchorId(url, "#article"),
};

export function createSchemaGraph({
    title,
    description,
    url,
    schemas = [],
}: SchemaGraphData) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            createSerenPersonSchema(),
            createOrganizationSchema(),
            createWebPageSchema(title, description, url),
            createWebSiteSchema(),
            ...schemas,
        ],
    } satisfies Graph;
}

function createSerenPersonSchema() {
    return {
        "@type": "Person",
        "@id": "https://seren.dev",
        name: "Seren_Modz 21",
        url: "https://seren.dev",
        sameAs: ["https://github.com/SerenModz21", links.sponsor],
        jobTitle: [
            "Lead Developer",
            "Software Engineer",
            "Software Developer",
            "DevOps Engineer",
        ],
        knowsAbout: [
            "Programming",
            "TypeScript",
            "Software Development",
            "DevOps",
        ],
        knowsLanguage: {
            "@type": "Language",
            name: "English",
            alternateName: "en",
        },
        worksFor: {
            "@type": "Organization",
            "@id": globalIds.organization,
        },
    } satisfies Person;
}

function createOrganizationSchema() {
    return {
        "@type": "Organization",
        "@id": globalIds.organization,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
        },
        description: siteConfig.description,
        sameAs: [links.github, links.discord],
        founder: {
            "@type": "Person",
            "@id": "https://seren.dev",
        },
        member: [
            {
                "@type": "Person",
                "@id": "https://seren.dev",
            },
        ],
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
    } satisfies Organization;
}

function createWebPageSchema(title: string, description: string, url: URL) {
    return {
        "@type": "WebPage",
        "@id": pageIds.webpage(url),
        name: title,
        description: description,
        url: url.toString(),
        isPartOf: {
            "@type": "WebSite",
            "@id": globalIds.website,
        },
    } satisfies WebPage;
}

function createWebSiteSchema() {
    return {
        "@type": "WebSite",
        "@id": globalIds.website,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        publisher: {
            "@type": "Organization",
            "@id": globalIds.organization,
        },
    } satisfies WebSite;
}

export function createFAQSchema(url: URL) {
    return {
        "@type": "FAQPage",
        "@id": pageIds.faq(url),
        isPartOf: {
            "@type": "WebPage",
            "@id": pageIds.webpage(url),
        },
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
    } satisfies FAQPage;
}

export function createSoftwareSchema(url: URL) {
    return {
        "@type": "SoftwareApplication",
        "@id": pageIds.software(url),
        name: "Kings Beta",
        applicationCategory: "UtilityApplication",
        description:
            "Kings Beta is a feature-rich Discord bot offering moderation tools, server automation, starboard functionality, leveling systems, and Twitch notifications.",
        softwareVersion: "Beta",
        featureList:
            "Moderation, Automation, Starboard, Leveling, Twitch notifications, Utilities",
        author: {
            "@type": "Organization",
            "@id": globalIds.website,
        },
    } satisfies SoftwareApplication;
}

export function createLegalPageSchema(
    title: string,
    description: string,
    url: URL,
    datePublished: string,
    dateModified: string,
) {
    return {
        "@type": "Article",
        "@id": pageIds.article(url),
        name: title,
        description: description,
        url: url.toString(),
        datePublished: datePublished,
        dateModified: dateModified,
        isPartOf: {
            "@type": "WebSite",
            "@id": globalIds.website,
        },
        about: {
            "@type": "WebSite",
            "@id": globalIds.website,
        },
    } satisfies Article;
}
