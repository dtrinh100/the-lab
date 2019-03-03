<template>
  <main class="labs-product-results">
    <TheNavigationBar />
    <div class="results-header">
      <h1 class="results-header__text">Results for “{{ searchText }}”</h1>
      <hr class="results-header__divider" />
    </div>
    <div class="message-container" v-show="message">
      <div class="message-container__message">{{ message }}</div>
    </div>
    <div class="results-container" v-show="!loading && !noResults && !error">
      <BaseCard v-for="result in results" :result="result" :key="result.id" />
    </div>
  </main>
</template>

<script>
import TheNavigationBar from "./TheNavigationBar";
import BaseCard from "./BaseCard";

export default {
  name: "BaseProductResults",
  components: {
    TheNavigationBar,
    BaseCard
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
  margin: 0;
}

.results-header {
  margin-top: 5rem;
}

.results-header__text {
  text-align: center;
  margin-bottom: 1rem;
}

.results-header__divider {
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
  font-size: 1.2rem;
}

.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

@media only screen and (min-width: 1000px) {
  .message-container__message {
    font-size: 3rem;
  }
}
</style>
