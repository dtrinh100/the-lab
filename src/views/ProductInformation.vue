<template>
  <div>Testing</div>
</template>

<script>
import eventsAPI from "@/utils/api/EventsAPI";
import BaseEvents from "@/models/BaseEvents";

export default {
  name: "ProductInformation",
  data() {
    return {
      loading: false,
      error: false,
      eventRequest: null,
      result: null
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
        // If we are missing an id for some reason, this is an error and should be shown as such
        this.error = true;
        return;
      }
      this.loading = true;

      const params = {
        apikey: process.env.VUE_APP_KEY
      };

      this.eventRequest = eventsAPI.getEvent(id, params);

      const data = await this.eventRequest.catch(err => {
        this.loading = false;
        this.error = true;
        console.log(err);
      });

      this.loading = false;

      this.parseData(data);
    },
    parseData: function(data) {
      const event = Object.create(BaseEvents);
      event.populate(data);

      this.result = event;
      console.log(this.result);
    }
  }
};
</script>
