Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products container">
                 <product v-for="item of products" 
                 :img="img"
                 :product="item"></product>
                </div>`
 });
 Vue.component('product', {
     props: ['product', 'img'],
     template: `<div class="products__item">
                 <img height="300" width="300" :src="img" alt="photo">
                    <a href="#" class="products__item__heading"><h3>{{product.product_name}}</h3></a>
                    <p class="products__item__price">{{product.price}} $</p>
                    <div class="products__item__button"><button class="products__item__btn"  @click="$root.addProduct(product)">Купить</button>
                </div>
             </div>`
 })