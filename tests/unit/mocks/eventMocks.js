const mockEvent = {
  name: "Robot Dance Party 1",
  id: "wrj233j42o4j2",
  images: ["http://testing.jpg"],
  dates: {
    start: {
      localDate: "2016-03-06"
    }
  },
  pleaseNote: "I like pugs",
  classifications: [
    {
      segment: {
        name: "Sports"
      },
      genre: {
        name: "Robos"
      },
      subGenre: {
        name: "Top Dancing Robots"
      }
    }
  ],
  _embedded: {
    attractions: [
      {
        name: "Massive Robot Dance Party",
        images: ["http://tesjijingihi.jpg"]
      }
    ]
  }
};

export default mockEvent;
