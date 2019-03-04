<template>
  <BaseProductSearch
    :value="keyword"
    @update-params="updateParams"
    @handle-submit="handleSubmit"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseProductSearch from "@/components/BaseProductSearch";

export default {
  name: "ProductSearch",
  props: {
    // If reset is true, reset the input value
    reset: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseProductSearch
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
    updateParams: function(value) {
      this.getKeyword(value);
    }
  }
};
</script>
