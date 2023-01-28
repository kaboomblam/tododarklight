export class FilterOption {
  name: string;
  icon: JSX.Element;
  values: string[];
  currentValue: number;

  constructor({ name, icon, values, currentValue }: FilterOptionParams) {
    this.name = name;
    this.icon = icon;
    this.values = values;
    this.currentValue = currentValue;
  }
}
