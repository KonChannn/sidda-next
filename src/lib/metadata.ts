import type { Metadata } from "next";

const SITE_NAME = "SIDDA";
const BASE_DESCRIPTION =
  "High-performance, eco-friendly dishwashing solution for professionals and households. Tough on grease, gentle on skin, kind to the planet.";
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sidda.com";

export interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMetaInput): Metadata {
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path === "/" ? "" : path}`;

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Professional Dishwashing Liquid`,
    template: `%s | ${SITE_NAME}`,
  },
  description: BASE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Professional Dishwashing Liquid`,
    description: BASE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};
