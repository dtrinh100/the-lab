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
  background-color: #f2bb28;
  width: 100%;
  height: 4rem;
}
</style>
