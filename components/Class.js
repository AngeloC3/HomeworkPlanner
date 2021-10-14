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
      if (dueDate = '') {
        dueDate = null;
      }
      this.homework.push([string,dueDate])
    }

    delHomework(index) {
      if (index >= 0 && index < this.homework.length) {
        let tempArr = [];
        for (let i = 0; i < this.homework.length; i++) {
          if (i != index) {
            tempArr.push(this.homework[i]);
          }
        }
        this.homework = tempArr;
      }
    }

    defChangeDate(hwIndex, dueDate) {
      if (hwIndex >= 0 && hwIndex < this.homework.length) {
        this.homework[hwIndex][1] = dueDate;
      }
    }

}
