const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {        //Объект - список товаров
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; //массив объектов из JSON файла
        this._getProducts()
            .then(data => { //На вход передаем объект JS
                this.goods = [...data]; // Распаковываем массив объектов
                this.render()
            });
    }
    _getProducts() { //Подключаемся к внешнему JSON файлу и получаем из него массив с объектами товаров
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {      //Выводим товары на страничку
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        this.sumAllProducts();
    }
    sumAllProducts() {      //Метод для нахождения суммы всех товаров на странице
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        console.log(`Сумма всех товаров на странице равна: ${sum}$`);
    }
}

class ProductItem {     //ОбЪект - товар на странице
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id;
    }
    render() {      // Получаем верстку для карточки товара с уникальным содержимым
        return `<div class="products__item">
                <img height="300" width="300" src=img/${this.title}.jpg alt="photo">
                <a href="#" class="products__item__heading"><h3>${this.title}</h3></a>
                <p class="products__item__price">${this.price}$</p>
                <div class="products__item__button"><button class="products__item__btn">Купить</button>
                </div>
            </div>`
    }
}
class CartItem {     //ОбЪект - товар в корзине
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id;
        this.quantity = product.quantity;
    }
    render() {      // Получаем верстку для корзины
        return `<div class="cart__item">
                <img height="100" width="100" src=img/${this.title}.jpg alt="photo">
                <h3 class="cart__item__heading">${this.title}</h3>
                <p class="cart__item__price">${this.price}$</p>
                <p class="cart__item__quantity">Количество: <span>${this.quantity}</span></p>
            </div>`
    }
}

class Cart {        // Класс для корзины
    constructor(container = '.cart_items') {
        this.container = container;
        this.cartGoods = [];
        this.amount = 0;
        this.countGoods = 0;
        this._getItems()
            .then(data => { //На вход передаем объект JS полученный из JSON
                this.cartGoods = [...data.contents]; // Распаковываем массив объектов
                this.amount = data.amount;
                this.countGoods = data.countGoods;
                this.render()
            });
    }
    addItemToCart() { } //Добавить товар в корзину
    deleteItem() { } // Удалить товар из корзины
    _getItems() { // Получить список товаров в корзине
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {   //Выводим информацию о корзине из JSON на страничку корзины    
        const block = document.querySelector(this.container);
        for (let product of this.cartGoods) {   //карточки товара
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        const count = document.querySelector('.cart_total_count'); 
        count.textContent = this.countGoods; //количество товаров
        const sumCart = document.querySelector('.cart_total_price');
        sumCart.textContent = this.amount; //Сумма товаров
    }
    sumCart() { // Вывод общей суммы товаров в корзине
    }
    countCart() { //Вывод количества товаров
    }
}
let list = new ProductsList();
let cartList = new Cart();