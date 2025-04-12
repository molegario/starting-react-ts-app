export default class Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(title: string, id?: string, completed?: boolean) {
    this.title = title;
    this.id = id ?? Math.random().toString(36).substring(2, 9);
    this.completed = completed ?? false;
  }
}