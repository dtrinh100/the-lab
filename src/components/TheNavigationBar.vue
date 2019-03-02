<template>
  <nav class="labs-navigation">
    <div class="navigation-header">
      <router-link class="navigation-header__link" to="/">
        <img
          class="navigation-header__logo"
          :src="require('../assets/logo.svg')"
        />
        <span class="navigation-header__text">The Labs</span>
      </router-link>
      <ProductSearch />
    </div>
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
  position: fixed;
  top: 0;
  left: 0;
}
.navigation-header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: "BogleWeb Bold", Arial, sans-serif;
  font-weight: bold;
}
.navigation-header__logo {
  margin-right: 0.7rem;
}
.navigation-header__link {
  text-decoration: none;
  display: flex;
  justify-content: center;
}
.navigation-header__text {
  color: white;
  cursor: pointer;
  display: none;
  margin: 0 2rem 0 0.5rem;
}

@media only screen and (min-width: 660px) {
  .navigation-header__logo {
    margin-right: 0;
  }
  .navigation-header__text {
    font-size: 2rem;
    display: inline-block;
  }
}
</style>
