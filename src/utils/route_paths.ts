export class Path {
  name: string;
  path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

export const NAV_BAR_PATHS = {
  home: new Path("Home", "/"),
  deleted: new Path("Deleted", "/deleted"),
  completed: new Path("Completed", "/completed"),
  about: new Path("About app", "/about"),
};

export const ALL_PATHS = {
  ...NAV_BAR_PATHS,
  notFound: new Path("not-found", "/not-found"),
};
