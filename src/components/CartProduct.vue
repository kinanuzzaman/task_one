<template>
  <div class="bg-white rounded-lg m-5">
    <section class="grid grid-cols-12 px-3">
      <div class="relative py-3 col-span-11">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
            </path>
          </svg>
        </div>
        <input type="search" id="search"
          class="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Customer" required>
      </div>
      <div class=" pt-5">
        <svg class="w-5 h-5 bg-slate-300 p-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z">
          </path>
        </svg>
      </div>
    </section>
    <div class="flex justify-between p-2" v-for="item in  cartStore.inCart " :key="item.id">
      <div class="mt-5 sm:mt-0">
        <h2 class=" text-gray-900">{{ item.name }}</h2>
      </div>
      <div class="flex items-center border-gray-100">
        <button class="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
          @click="cartStore.decrement(item)">-</button>

        <p class="h-8 w-8 border bg-white text-center outline-none">{{ item.addedQty }}</p>

        <button class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
          @click="cartStore.increment(item);">+</button>
      </div>
      <div class="flex items-center gap-3">
        <p class="text-sm">${{ item.price }}</p>
        <button class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
          @click=" cartStore.removeFromCart(item) ">X</button>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg> -->
      </div>
    </div>
    <section class="">
      <div class="flex justify-between p-2">
        <h2 class=" text-gray-900">Sub Total</h2>
        <p class="text-sm">${{ cartStore.cartPrice }}</p>
      </div>
      <div class="flex justify-between p-2">
        <h2 class=" text-gray-900">Tax</h2>
        <p class="text-sm">$0.00</p>
      </div>
      <div class="flex justify-between p-2">
        <h2 class=" text-gray-900">Discount on all items</h2>
        <p class="text-sm">$0.00</p>
      </div>
      <div class="flex justify-between p-2">
        <h2 class=" text-gray-900">Discount on subtotal</h2>
        <p class="text-sm">$0.00</p>
      </div>
      <div class="flex justify-between p-2">
        <h2 class=" text-gray-900">Total (Tax Excluded) </h2>
        <p class="text-sm">${{ cartStore.cartPrice }}</p>
      </div>
      <div class="p-3">
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Pay</button>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  name: "CartProduct",
  setup() {
    const cartStore = useCartStore();
    const count = ref(0);

    return {
      cartStore,
      count,
    }
  }

});
</script>
<style scoped></style>
  