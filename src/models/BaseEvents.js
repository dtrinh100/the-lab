const BaseEvents = {
  populate(data) {
    this.name = data.name || "";
    this.id = data.id || "";
    this.images = data.images || [];
    this.date = "";
    if (data.dates) {
      this.date = data.dates.start.localDate;
    }
    this.segment = "";
    this.genre = "";
    this.subGenre = "";
    if (data.classifications) {
      if (data.classifications[0].segment) {
        this.segment = data.classifications[0].segment.name;
      }
      if (data.classifications[0].genre) {
        this.genre = data.classifications[0].genre.name;
      }
      if (data.classifications[0].subGenre.name) {
        this.subGenre = data.classifications[0].subGenre.name;
      }
    }
  }
};

export default BaseEvents;
