import type { Experience } from "../types/portfolio-ui";

export const ROUTE_PATHS = {
  home: "/",
  business: "/business",
  technical: "/technical",
} as const;

export function getRouteForExperience(experience: Experience): string {
  switch (experience) {
    case "business":
      return ROUTE_PATHS.business;
    case "technical":
      return ROUTE_PATHS.technical;
    default:
      return ROUTE_PATHS.home;
  }
}
