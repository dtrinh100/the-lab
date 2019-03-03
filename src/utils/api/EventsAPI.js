import axios from "axios";

const API = `https://app.ticketmaster.com/discovery/v2/events`;
export default {
  getEvent(id, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API}/${id}`, {
          params
        })
        .then(response => resolve(response.data))
        .catch(e => reject(Error(e)));
    });
  }
};
