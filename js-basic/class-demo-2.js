// 父类
class People {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name} 学号${this.number}`)
  }
}

// 子类
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 教 ${this.major}`)
  }
}

// 实例 
const mrwang = new Teacher('mrwang', '语文')
mrwang.teach()

const xiaoming = new Student('小明', 100)
xiaoming.sayHi()
xiaoming.eat()

console.log(typeof Student)