<template>
  <div class="search-bar">
    <input
      :value="keyword"
      @input="updateParams"
      @keyup.enter="handleSubmit"
      class="search-bar__input"
      type="search"
      placeholder="Search for an event"
      autofocus
    />
    <button @click="handleSubmit" class="search-bar__button" type="submit">
      <font-awesome-icon icon="search" size="2x" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductSearch",
  props: {
    // If reset is true, reset the input value
    reset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Mapping our states based off of the Search store
    ...mapState({
      keyword: state => state.search.keyword
    })
  },
  watch: {
    $route: {
      handler: function() {
        if (this.reset) {
          this.getKeyword("");
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions("search", ["getKeyword"]),
    handleSubmit: function() {
      this.$router.push({ path: "search", query: { keyword: this.keyword } });
    },
    updateParams: function(ev) {
      this.getKeyword(ev.target.value);
    }
  }
};
</script>
<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar__input {
  height: 2.5rem;
  width: 12rem;
  padding-left: 0.5rem;
  font-size: 1rem;
}
.search-bar__button {
  height: 2.5rem;
  width: 3.3rem;
  cursor: pointer;
  background-color: var(--secondary-color);
  border: none;
}
.search-bar__button svg {
  color: white;
}

@media only screen and (min-width: 660px) {
  .search-bar__input {
    width: 20rem;
    font-size: 1.2rem;
  }
}
</style>
