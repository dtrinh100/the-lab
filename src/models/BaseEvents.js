const BaseEvents = {
  populate(data) {
    this.name = data.name || "";
    this.id = data.id || "";
    this.images = data.images || [];
    this.date = "TBD";
    if (data.dates && data.dates.start && data.dates.start.localDate) {
      this.date = data.dates.start.localDate;
    }
    this._segment = "";
    this._genre = "";
    this._subGenre = "";
    if (data.classifications) {
      if (data.classifications[0].segment) {
        this._segment = data.classifications[0].segment.name;
      }
      if (data.classifications[0].genre) {
        this._genre = data.classifications[0].genre.name;
      }
      if (data.classifications[0].subGenre.name) {
        this._subGenre = data.classifications[0].subGenre.name;
      }
    }
  },
  get segment() {
    return this._segment.toUpperCase();
  },
  get genre() {
    return this._genre.toUpperCase();
  },
  get subGenre() {
    return this._subGenre.toUpperCase();
  }
};

export default BaseEvents;
