<template>
  <div>Testing</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductResults",
  data() {
    return {
      loading: true,
      error: false,
      size: 10,
      noResults: false
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
      results: state => state.search.results
    })
  },
  methods: {
    ...mapActions("search", ["fetchResults", "getKeyword"]),
    fetchData: async function(keyword) {
      // store the keyword in Vuex
      this.getKeyword(keyword);

      const params = {
        keyword: this.keyword,
        size: this.size
      };

      await this.fetchResults(params).catch(e => {
        this.loading = false;
        this.error = true;
        console.log(e);
      });

      if (this.results.length < 1) {
        this.noResults = true;
      }

      this.loading = false;
    }
  }
};
</script>
