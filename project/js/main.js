const products = [
    { id: 1, title: 'Notebook', price: 2000, src: 'img/notebook.jpg' },
    { id: 2, title: 'Mouse', price: 20, src: 'img/mouse.jpg' },
    { id: 3, title: 'Keyboard', price: 200, src: 'img/keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 50, src: 'img/gamepad.jpg' },
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="products__item">
                <img height="300" width="300" src=${item.src} alt="photo">
                <a href="#" class="products__item__heading"><h3>${item.title}</h3></a>
                <p class="products__item__price">${item.price}$</p>
                <div class="products__item__button"><button class="products__item__btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);