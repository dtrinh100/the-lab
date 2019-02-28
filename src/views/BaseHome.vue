<template>
  <main class="labs-homepage" role="img" aria-label="Picture of a toy">
    <div class="search-container">
      <h1 class="search-container__header">Search The Labs</h1>
      <ProductSearch :reset="true" />
    </div>
  </main>
</template>

<script>
import ProductSearch from "@/components/ProductSearch";
export default {
  name: "BaseHome",
  components: {
    ProductSearch
  }
};
</script>
<style scoped>
.labs-homepage {
  background: url(../assets/img/home-bg.png) no-repeat center center fixed;
  background-size: cover;
  display: grid;
  height: 100%;
  justify-content: center;
  align-content: center;
}
.search-container {
  background-color: rgba(255, 194, 32, 0.9);
  height: 15rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
.search-container__header {
  margin-top: 0;
}
</style>
