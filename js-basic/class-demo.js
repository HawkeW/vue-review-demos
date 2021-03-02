// class 类

class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }
}

// 通过类 new 对象 / 实例
const lihuanying = new Student('李焕英', 1)
lihuanying.sayHi()