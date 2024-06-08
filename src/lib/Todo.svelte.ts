export class Todo {
  name: string;
  checked: boolean;

  constructor(name: string, checked: boolean) {
    this.name = name;
    this.checked = checked;
  }

  getName() {
    return this.name;
  }

  isChecked() {
    return this.checked;
  }
}
