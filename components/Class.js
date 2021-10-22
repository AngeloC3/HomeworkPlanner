export default class Class {
    constructor(name, homework = []) {
      this.name = name;
      this.homework = homework;
    }

    getName() {
      return this.name;
    }

    getHomework() {
      return this.homework.join(' ');
    }

    addHomework(string, dueDate = null) {
      if (dueDate === '') {
        dueDate = null;
      }
      this.homework.push([string,dueDate])
    }

    delHomework(index) {
      if (index >= 0 && index < this.homework.length) {
        this.homework.splice(index, 1);
      }
    }

    clearHomework() {
      this.homework = [];
    }

    defChangeDate(hwIndex, dueDate) {
      if (hwIndex >= 0 && hwIndex < this.homework.length) {
        this.homework[hwIndex][1] = dueDate;
      }
    }

}

export function prettyHW(homework) {
  console.log(homework[1]);
  if (homework[1] == null) {
    return homework[0];
  } else {
    return homework[0] + ' due on ' + homework[1]
  }
}
