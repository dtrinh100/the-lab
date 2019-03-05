<template>
  <BaseProductResults
    :keyword="keyword"
    :results="results"
    :loading="loading"
    :error="error"
    :noResults="noResults"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseProductResults from "@/components/BaseProductResults.vue";

export default {
  name: "ProductResults",
  components: {
    BaseProductResults
  },
  data() {
    return {
      loading: false,
      error: false,
      size: 10
    };
  },
  created: function() {
    this.fetchData(this.$route.query.keyword);
  },
  watch: {
    "$route.query.keyword"(to) {
      this.fetchData(to);
    }
  },
  computed: {
    // Mapping our states based off of the Search store
    ...mapState({
      keyword: state => state.search.keyword,
      results: state => state.search.results,
      noResults: state => state.search.noResults
    })
  },
  methods: {
    ...mapActions("search", ["fetchResults", "getKeyword"]),
    fetchData: async function(keyword) {
      this.loading = true;

      // store the keyword in Vuex
      this.getKeyword(keyword);

      const params = {
        keyword: this.keyword,
        size: this.size
      };
      try {
        await this.fetchResults(params);
        this.error = false;
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.error = true;
        console.log(e);
      }
    }
  }
};
</script>
