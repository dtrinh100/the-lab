import axios from "axios";

const API = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
  process.env.VUE_APP_KEY
}`;
export default {
  async getSearch(params) {
    const response = await axios.get(API, {
      params
    });
    return response.data;
  }
};
