// Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!

const inputNumber = function () {
  while (true) {
    const val = prompt("enter number");
    if (isNaN(Number(val)) || val === "" || val === " " || val === null) {
      continue;
    }
    if (val >= 0 && val <= 100) {
      return Number(val);
      break;
    }
  }
};
console.log(inputNumber());

// Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
// (* - це повинна бути функція)

const start = 0;
const end = 100;

for (let i = end; i >= start; i--) {
  if (i % 2 === 0 && i % 9 === 0) {
    console.log(i);
  }
}

// Створити функцію конструктор, яка описує користувача:
// -ім'я
// -прізвище
// -вік
// - метод, який логує ім'я та прізвище разом


function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.getNameSurname = function () {
    console.log(this.name,this.surname);
  };
}

const personMe = new Person('Yurii','Pavlyk',28)
personMe.getNameSurname()