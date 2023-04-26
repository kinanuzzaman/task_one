import { defineStore } from "pinia";
import { useLocalStorage, StorageSerializers } from "@vueuse/core";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  addedQty: number;
}
interface State {
  inCart: Product[];
  cartPrice: number;
}
export const useCartStore = defineStore("cart", {
  state: (): State => ({
    inCart: [],
    cartPrice: 0,
  }),
  getters: {
    getCartItems: (state) => {
      return state.inCart;
    },
    totalQuantity: (state) => {
      let totalCount = 0;
      state.inCart.forEach((e: any) => (totalCount += e.addedQty));
      return totalCount;
    },
  },
  actions: {
    increment(product: any) {
      // product.addedQty++;
      const alreadyInCart = this.inCart.find(
        (cartItem: any) => cartItem.id === product.id
      );

      if (alreadyInCart) {
        if (alreadyInCart.stock == 0) {
          return;
        }
        alreadyInCart.addedQty++;
        product.stock--;
      } else {
        product.addedQty = 1;
        this.inCart.push(product);
        product.stock--;
      }
      this.cartPrice += product.price;
      console.log(
        "🚀 ~ file: cart.store.js:232 ~ increment ~ this.inCart",
        this.inCart
      );
    },
    decrement(product: any) {
      // product.addedQty--;
      const alreadyInCart = this.inCart.findIndex(
        (cartItem: any) => cartItem.id === product.id
      );
      // if (this.inCart[ alreadyInCart ].addedQty == 1) this.inCart.splice(alreadyInCart, 1);

      if (this.inCart[alreadyInCart].addedQty > 1) {
        this.inCart[alreadyInCart].addedQty--;
        this.inCart[alreadyInCart].stock++;
      } else {
        this.inCart[alreadyInCart].stock++;
        this.inCart.splice(alreadyInCart, 1);
      }

      this.cartPrice -= product.price;
      if (this.cartPrice < 0) {
        this.cartPrice = 0;
      }
      // console.log("🚀 ~ file: cart.store.js:232 ~ increment ~ this.inCart", this.inCart)
    },
    clearCart() {
      this.inCart = [];
      this.cartPrice = 0;
    },
    removeFromCart(product: any) {
      const alreadyInCart = this.inCart.findIndex(
        (cartItem: any) => cartItem.id === product.id
      );
      const sum: number = parseInt(product.price) * parseInt(product.addedQty);
      this.cartPrice -= sum;
      if (this.cartPrice < 0) {
        this.cartPrice = 0;
      }
      this.inCart.splice(alreadyInCart, 1);
    },
  },
});
