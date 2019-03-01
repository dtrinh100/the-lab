<template>
  <div class="search-bar">
    <input
      ref="input"
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
  mounted: function() {
    if (this.reset) {
      this.$refs.input.setAttribute("value", "");
    }
  },
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
  methods: {
    ...mapActions("search", ["getKeyword"]),
    handleSubmit: function() {
      this.$router.push({ path: "about", query: { keyword: this.keyword } });
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
  height: 3.2rem;
  width: 20rem;
  padding-left: 0.5rem;
  font-size: 1.2rem;
}
.search-bar__button {
  height: 3.3rem;
  width: 3.3rem;
  cursor: pointer;
  background-color: var(--secondary-color);
  border: none;
}
.search-bar__button svg {
  color: white;
}
</style>
