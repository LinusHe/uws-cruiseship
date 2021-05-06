let changes =
  [
    {
      msg: "Starting Time Changed",
      type: "change",
      eventID: 1,
      newEvent: {
        name: "Beach Volleyball Training",
        time: "10.45 - 11:45",
        location: "Deck A4",
        type: "event",
        icon: "volleyball.svg",
        id: 1
      },
      id: 0
    },
    {
      msg: "Arrival Time Changed",
      type: "change",
      eventID: 3,
      newEvent: {
        name: "Arrival in Barcelona",
        time: "11.50",
        location: "Entire Ship",
        type: "arrival",
        icon: "ship.svg",
        id: 3
      },
      id: 1
    },
    {
      msg: "Event Canceled",
      type: "cancel",
      eventID: 0,
      newEvent: {
        name: "Yoga & Meditation Course",
        time: "10:30 - 11:45",
        location: "Deck A2",
        type: "event",
        icon: "yoga.svg",
        id: 0
      },
      id: 2
    },
    {
      msg: "Event Canceled",
      type: "cancel",
      eventID: 4,
      newEvent: {
        name: "Barcelona City Tour",
        time: "13:30 - 17:00",
        location: "Gate B2",
        type: "event",
        icon: "bus.svg",
        id: 4
      },
      id: 3
    },
    {
      msg: "Boarding Time Changed",
      type: "change",
      eventID: 6,
      newEvent: {
        name: "Boarding & Departure",
        time: "02:30",
        location: "Entire Ship",
        type: "boarding",
        icon: "ship.svg",
        id: 6
      },
      id: 4
    },
    {
      msg: "Event Location Changed",
      type: "change",
      eventID: 1,
      newEvent: {
        name: "Beach Volleyball Training",
        time: "10:30 - 11:45",
        location: "Deck A2",
        type: "event",
        icon: "volleyball.svg",
        id: 1
      },
      id: 5
    },
    {
      msg: "New Event",
      type: "add",
      eventID: 7,
      newEvent: {
        name: "VIP Ship Party",
        time: "02:30 - 07:00",
        location: "Room 654",
        type: "event",
        icon: "ship.svg",
        id: 7
      },
      id: 6
    },
    {
      msg: "Ship Schedule Updated",
      type: "add",
      eventID: 8,
      newEvent: {
        name: "Arrival in Valencia",
        time: "09.40",
        location: "Entire Ship",
        type: "arrival",
        icon: "ship.svg",
        id: 8
      },
      id: 7
    },
    {
      msg: "Ship Schedule Updated",
      type: "add",
      eventID: 9,
      newEvent: {
        name: "Breakfast Buffet",
        time: "06.30 - 10:30",
        location: "Dining Hall",
        type: "meal",
        icon: "meal.svg",
        id: 9
      },
      id: 8
    },
  ];

export default changes;