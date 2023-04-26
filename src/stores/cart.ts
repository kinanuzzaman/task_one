import { defineStore } from "pinia";
import { useLocalStorage, StorageSerializers } from "@vueuse/core";

export const useCartStore = defineStore("cart", {
  state: () => ({
    inCart: useLocalStorage("inCart", [], {
      serializer: StorageSerializers.object,
    }),
    cartPrice: useLocalStorage("cartPrice", 0.0, {
      serializer: StorageSerializers.number,
    }),
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
      //   if (alreadyInCart && alreadyInCart.addedQty == product.stock) {
      //     return;
      //   }
      if (alreadyInCart) {
        alreadyInCart.addedQty++;
      } else {
        product.addedQty = 1;
        this.inCart.push(product);
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
      } else {
        this.inCart.splice(alreadyInCart, 1);
      }

      this.cartPrice -= product.price;
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
      this.cartPrice -= product.price * product.addedQty;
      this.inCart.splice(alreadyInCart, 1);
    },
  },
});
