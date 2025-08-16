export interface Task {
  _id?: string;        // MongoDB will give an _id
  title: string;
  description?: string;
  completed: boolean;
}
