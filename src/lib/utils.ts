import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROUTES = {
  Home: "/",
  Products: "/products",
  About: "/about",
  Contact: "/contact",
} as const;

export type PageName = keyof typeof ROUTES;

export function createPageUrl(page: PageName): string {
  return ROUTES[page];
}

const PATH_TO_PAGE: Record<string, PageName> = {
  "/": "Home",
  "/products": "Products",
  "/about": "About",
  "/contact": "Contact",
};

export function getPageNameFromPath(pathname: string): PageName | null {
  return PATH_TO_PAGE[pathname] ?? null;
}
