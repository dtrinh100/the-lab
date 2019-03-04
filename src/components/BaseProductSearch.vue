<template>
  <div class="search-bar">
    <input
      :value="value"
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
export default {
  name: "BaseProductSearch",
  props: {
    value: {
      type: String
    }
  },
  methods: {
    handleSubmit: function() {
      this.$emit("handle-submit");
    },
    updateParams: function(ev) {
      this.$emit("update-params", ev.target.value);
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
  -webkit-appearance: none; /* Forces Chrome and Safari to honor the height style */
  height: 2.5rem;
  width: 12rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  border-radius: 25px 0 0 25px;
  border: 1px solid white;
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
