import axios from "axios";

const API = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
  process.env.VUE_APP_KEY
}`;
export default {
  getSearch(params) {
    return new Promise((resolve, reject) => {
      axios
        .get(API, {
          params
        })
        .then(response => resolve(response.data))
        .catch(e => reject(e));
    });
  }
};
