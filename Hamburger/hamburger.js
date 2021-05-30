class Param { //Класс для каждой из добавок и начинок гамбургера
  constructor(element) {
    this.name = element.value; //Забираем заначение value из отмеченного инпута размера
    this.price = +element.dataset['price']; //забираем значение атрибута data- из инпута
    this.kkal = +element.dataset['kkal']; //забираем значение атрибута data- из инпута
  }
}
class Hamburger {
  constructor(size, staffing, topping) {
    this.size = new Param(this._select(size)); //Присваиваем полю размера объект Param (имя, цена, калорийность) из отмеченного инпута
    this.staffing = new Param(this._select(staffing)); //Присваиваем полю начинки объект Param (имя, цена, калорийность) из отмеченного инпута
    this.topping = this._addTopping(topping); //Присваиваем полю добавок массив объектов Param (имя, цена, калорийность) из отмеченных чекбоксов
  }
  _select(name) { //Возвращаем отмеченные инпуты для размера и начинки
    return document.querySelector(`input[name=${name}]:checked`);
  }

  _addTopping(name) {  // Получаем массив с объектами отмеченных добавок
    let resultTopping = [];
    this._selectTopping(name).forEach(element => resultTopping.push(new Param(element)))
    return resultTopping;
  };

  _selectTopping(name) {  // Получаем распакованный массив добавок, которые отмечены
    return [...document.querySelectorAll(`input[name=${name}]:checked`)];
  };

  _calculatePrice() {   // Получаем цену бургера
    let burgerPrice = this.size.price + this.staffing.price;
    this.topping.forEach(element => burgerPrice += element.price);
    return burgerPrice;
  };
  _calculateCalories() { // Получаем калорийность бургера
    let burgerKkal = this.size.kkal + this.staffing.kkal;
    this.topping.forEach(element => burgerKkal += element.kkal);
    return burgerKkal;
  };
  showResults(price, kkal) { // Находим теги для записи результатов и записываем результаты
    document.querySelector(price).textContent = this._calculatePrice();
    document.querySelector(kkal).textContent = this._calculateCalories();
  }
}
