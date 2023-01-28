import { AppRoutePath as AppRoute } from "../utils/app_route_paths";

export const PRIORITY_FILTERS = ["All", "P0", "P1", "P2", "P3", "P4", "P5"];

export const DUE_DATE_FILTERS = [
  "All",
  "Today",
  "1 week",
  "2 weeks",
  "1 month",
  "3 month",
  "6 month",
  "1 year",
  "Overdue",
];

export const SORT_FILTERS = [
  "A-Z",
  "Z-A",
  "Latest",
  "Oldest",
  "High Priority",
  "Low Priority",
];

export const NAV_BAR_PATHS = {
  home: new AppRoute("Home", "/"),
  deleted: new AppRoute("Deleted", "/deleted"),
  completed: new AppRoute("Completed", "/completed"),
  about: new AppRoute("About app", "/about"),
};

export const ALL_PATHS = {
  ...NAV_BAR_PATHS,
  notFound: new AppRoute("not-found", "/not-found"),
};
