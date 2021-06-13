Vue.component ('filter-comp', {
    template: `<div>
                <form action="#" class="search-form" @submit.prevent="$root.filter(userSearch)">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
                </form>
                </div>` 
})