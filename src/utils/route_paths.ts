export class Path {
  name: string;
  path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

export const navBarPaths = {
  home: new Path("Home", "/"),
  deleted: new Path("Deleted", "/deleted"),
  completed: new Path("Completed", "/completed"),
  about: new Path("About app", "/about"),
};

export const allPaths = {
  ...navBarPaths,
  profile: new Path("not-found", "/not-found"),
};
