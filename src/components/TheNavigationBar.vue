<template>
  <nav class="labs-navigation">
    <ProductSearch />
  </nav>
</template>

<script>
import ProductSearch from "./ProductSearch.vue";
export default {
  name: "TheNavigationBar",
  components: {
    ProductSearch
  }
};
</script>
<style scoped>
.labs-navigation {
  background-color: white;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #696969;
}
</style>
