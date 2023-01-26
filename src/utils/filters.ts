type FilterObjectParams = {
  name: string;
  icon: JSX.Element;
  values: string[];
  currentValue: number;
};

export class FilterOption {
  name: string;
  icon: JSX.Element;
  values: string[];
  currentValue: number;

  constructor({ name, icon, values, currentValue }: FilterObjectParams) {
    this.name = name;
    this.icon = icon;
    this.values = values;
    this.currentValue = currentValue;
  }
}

export const priorityFilters = ["All", "P0", "P1", "P2", "P3", "P4", "P5"];

export const dueDateFilters = [
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

export const sortFilters = [
  "A-Z",
  "Z-A",
  "Latest",
  "Oldest",
  "High Priority",
  "Low Priority",
];
