<template>
  <div>Testing</div>
</template>

<script>
export default {
  name: "ProductInformation",
  data() {
    return {
      loading: false,
      error: false
    };
  },
  created: function() {
    this.fetchData(this.$route.params.eventId);
  },
  watch: {
    "$route.params.eventId"(to) {
      this.fetchData(to);
    }
  },
  methods: {
    fetchData: async function(id) {
      if (!id) {
        return;
      }
      this.loading = true;
    }
  }
};
</script>
