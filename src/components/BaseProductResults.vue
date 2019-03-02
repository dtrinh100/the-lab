<template>
  <main class="labs-product-results">
    <TheNavigationBar />
    <h1 class="labs-product-results__header">Results for “{{ searchText }}”</h1>
    <hr class="labs-product-results__divider" />
    <div class="message-container">
      <div class="message-container__message" v-show="message">
        {{ message }}
      </div>
    </div>
  </main>
</template>

<script>
import TheNavigationBar from "./TheNavigationBar";

export default {
  name: "BaseProductResults",
  components: {
    TheNavigationBar
  },
  props: {
    keyword: {
      type: String,
      required: true
    },
    results: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    error: {
      type: Boolean,
      required: true
    },
    noResults: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    message() {
      let message = null;
      if (this.loading) {
        message = "Gathering your data...";
      }
      if (this.noResults && !this.loading) {
        message = `No results found for ${this.searchText}.`;
      }
      if (this.error) {
        message = "An error has occured.";
      }
      return message;
    },
    searchText() {
      return this.$route.query.keyword;
    }
  }
};
</script>
<style scoped>
.labs-product-results {
  background-color: var(--background-color);
  height: 100%;
  margin: 0;
}
.labs-product-results__header {
  color: var(--secondary-color);
  text-align: center;
}

.labs-product-results__divider {
  border: none;
  height: 1px;
  background-color: #696969;
}
.message-container {
  display: flex;
  justify-content: center;
  height: 30rem;
  align-items: center;
}

.message-container__message {
  font-weight: 600;
  font-family: "BogleWeb Bold", Arial, sans-serif;
  font-size: 3rem;
}
</style>
