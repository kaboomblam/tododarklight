type TodoElement = {
  id: number;
  title: string;
  priority: PriorityTag;
  ownerList?: string;
  due?: Date;
  note?: string;
  completed: boolean;
  deleted: boolean;
  created: Date;
  pinned: boolean;
};

type TodoListParams = {
  id: number;
  name: string;
  comprisedOf: Todo[];
};

type FilterOptionParams = {
  name: string;
  icon: JSX.Element;
  values: string[];
  currentValue: number;
};
