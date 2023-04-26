<template>
    <div>
        <section>
            <SearchAndSelect @search="productSearch" />
        </section>
        <section>
            <div class="grid grid-cols-4 gap-5 m-5">
                <div v-for="product in productLists" :key="product.id" class="bg-white rounded-lg relative p-5"
                    @click="addToCart(product)">
                    <img :src="product.image" alt="" class="w-[200px] h-[150px] m-auto">
                    <p class="absolute left-0 top-1/2 text-white font-bold  bg-slate-600 px-2">Price: {{ product.price }}
                    </p>
                    <!-- <button @click="addToCart(product)">Add to Cart</button> -->
                    <p v-if="product.stock === 0" class="absolute top-5 left-24 bg-yellow-400 px-2 rounded-lg">Out of Stock
                    </p>
                    <h3 class="text-center bg-slate-300 m-3">{{ product.name }}</h3>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchAndSelect from "./SearchAndSelect.vue";
import { useCartStore } from "../stores/cart"
//import { stringifyQuery } from "vue-router";
// import { Item } from '@/types';
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
};
interface Data {
    productLists: Product[];
    products: Product[];
}

export default defineComponent({
    components: { SearchAndSelect },
    data(): Data {
        return {
            productLists: [],
            products: ([
                {
                    id: 1,
                    name: "Nike Air Max 2019",
                    price: 10.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    stock: 1,
                },
                {
                    id: 2,
                    name: "Item 2",
                    price: 10.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    stock: 2,
                },
                {
                    id: 3,
                    name: "Item 3",
                    price: 10.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    stock: 3,
                },
                {
                    id: 4,
                    name: "Item 4",
                    price: 10.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    stock: 0,
                },
            ])
        }
    },
    methods: {
        productSearch(query: string) {
            this.productLists = this.products.filter(e => e.name.toLowerCase().includes(query))
        }
    },
    mounted() {
        this.productLists.push(...this.products)
    },
    setup() {
        const cartStore = useCartStore();
        const addToCart = (product: any) => {
            if (product.stock > 0) {
                if (product.addedQty == product.stock) {
                    alert('Out of Stock')
                    return;
                }
                cartStore.increment(product);
            }
        }
        return {
            addToCart,
        }
    }


});
</script>

<style scoped></style>