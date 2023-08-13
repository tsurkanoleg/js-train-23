// Шаблонний метод (Template Method) — це патерн програмування, який визначає загальну структуру алгоритму, залишаючи певні кроки реалізації підкласам.
// Клас-шаблон визначає основну логіку алгоритму, а підкласи можуть змінювати або розширювати окремі кроки.

// Клас TeaMaker відповідає за загальні дії, необхідні для приготування чаю.
class TeaMaker {
	makeTea() {
        this.boilWater();
        this.addTeaLeaves();
        this.steepTea();
        this.pourIntoCup();
        this.addCondiments();
        this.serveTea();
    }
	boilWater() {
		console.log("Кип'ятимо воду....")
	}
  // Робимо метод makeTea, який викликає всі кроки приготування чаю по черзі boilWater, addTeaLeaves, #steepTea,
  // pourIntoCup, addCondiments, serveTea.
  // Робимо метод boilWater, який відповідає за кип'ятіння води та виводить в консоль Кип'ятимо воду....
  addTeaLeaves() {
	console.log("Додаємо чайні листки....")
  }
  // Робимо метод addTeaLeaves, який відповідає за додавання чайних листків та виводить в консоль Додаємо чайні листки....
  steepTea() {
	console.log("Заварюємо чай....")
  }
  // Робимо метод steepTea, що відповідає за заварювання чаю та виводить в консоль Заварюємо чай....
  pourIntoCup() {
	console.log("Переливаємо чай в чашку....")
  }
  // Робимо метод pourIntoCup, що відповідає за переливання чаю в чашку та виводить в консоль Переливаємо чай в чашку....
  addCondiments(){ }
  // Робимо метод addCondiments, що залишається пустим і може бути перевизначений у підкласах.
  serveTea(){
	console.log("Чай подається!.")
  }
  // Робимо метод serveTea, що відповідає за подачу чаю та виводить в консоль Чай подається!.
}

// Клас GreenTeaMaker є підкласом класу TeaMaker та додає інгредієнти для зеленого чаю.
class GreenTeaMaker extends TeaMaker {
	addCondiments() {
		console.log("Додаємо мед, щоб приготувати зелений чай...")
	}
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати зелений чай...
}

// Клас BlackTeaMaker є підкласом класу TeaMaker та додає інгредієнти для чорного чаю.
class BlackTeaMaker extends TeaMaker {
	addCondiments() {
		console.log("Додаємо мед, щоб приготувати чорний чай...")
	}
  // Робимо метод addCondiments, який виводить в консоль Додаємо мед, щоб приготувати чорний чай...
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

console.log(`====================`)

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
