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
      this.segment = data.classifications[0].segment.name;
      this.genre = data.classifications[0].genre.name;
      this.subGenre = data.classifications[0].genre.name;
    }
  }
};

export default BaseEvents;
