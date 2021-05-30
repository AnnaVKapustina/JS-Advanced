class ProductsList {        //Объект - список товаров
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [      //Массив с товарами
            { id: 1, title: 'Notebook', price: 2000, src: 'img/notebook.jpg' },
            { id: 2, title: 'Mouse', price: 20, src: 'img/mouse.jpg' },
            { id: 3, title: 'Keyboard', price: 200, src: 'img/keyboard.jpg' },
            { id: 4, title: 'Gamepad', price: 50, src: 'img/gamepad.jpg' },
        ];
    }
    render() {      //Выводим товары на страничку
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    sumAllProducts() {      //Метод для нахождения суммы всех товаров на странице
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        console.log(`Сумма всех товаров на странице равна: ${sum}`);
    }
}

class ProductItem {     //ОбЪект - товар
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.src = product.src;
    }
    render() {      // Получаем верстку для карточки товара с уникальным содержимым
        return `<div class="products__item">
                <img height="300" width="300" src=${this.src} alt="photo">
                <a href="#" class="products__item__heading"><h3>${this.title}</h3></a>
                <p class="products__item__price">${this.price}$</p>
                <div class="products__item__button"><button class="products__item__btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {        // Класс для корзины
    addItemToCart() { } //Добавить товар в корзину
    deleteItem() { } // Удалить товар из корзины
    getItems() { } // Получить список товаров в корзине
    render() { }      //Вывод карточек на страницу корзины
    sumCart() { } // Расчет общей суммы товаров в корзине
}

class CartItem {        //Класс для товара в корзине
    render() { }      // Вывод верстки карточек товара на страницу корзины
}

let list = new ProductsList();
list.render();
list.sumAllProducts();