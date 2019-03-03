const mockResults = {
  _embedded: {
    events: [
      {
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
        ]
      },
      {
        name: "Robot Dance Party II",
        id: "etetrefaf",
        images: ["http://testingihi.jpg"]
      }
    ]
  }
};

export default mockResults;
