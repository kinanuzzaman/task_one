<template>
  <div>
    <section class="gallery">
      <ProductGallery />
    </section>
    <section class="cart">
      <CartProduct />
    </section>

  </div>
</template>

<script lang="ts">
import ProductGallery from "@/components/ProductGallery.vue";
import CartProduct from "@/components/CartProduct.vue";

export default {
  name: "AppProduct",
  components: {
    ProductGallery,
    CartProduct,
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.cart {
  width: 30%;
  float: left;
  background-color: gainsboro;
}

.gallery {
  width: 70%;
  float: left;
  background-color: gainsboro;
}

.main {
  display: flex;
}
</style>