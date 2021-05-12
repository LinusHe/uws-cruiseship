export let eventData =
  [
    {
      name: "Yoga & Meditation Course",
      date: "Tuesday",
      slotsAvailable: 30,
      slotsBooked: 2,
      time: "10:30 - 11:45",
      location: "Deck A2",
      type: "event",
      icon: "yoga.svg",
      id: 0
    },
    {
      name: "Beach Volleyball Training",
      date: "Tuesday",
      slotsAvailable: 16,
      slotsBooked: 1,
      time: "10:30 - 11:45",
      location: "Deck A4",
      type: "event",
      icon: "volleyball.svg",
      id: 1
    },
    {
      name: "Lunch Buffet",
      date: "Tuesday",
      slotsAvailable: -1,
      slotsBooked: -1,
      time: "11.00 - 14:00",
      location: "Dining Hall",
      type: "meal",
      icon: "meal.svg",
      id: 2
    },
    {
      name: "Arrival in Barcelona",
      date: "Tuesday",
      slotsAvailable: -1,
      slotsBooked: -1,
      time: "11.30",
      location: "Entire Ship",
      type: "arrival",
      icon: "ship.svg",
      id: 3
    },
    {
      name: "Barcelona City Tour",
      date: "Tuesday",
      slotsAvailable: 60,
      slotsBooked: 4,
      time: "13:30 - 17:00",
      location: "Gate B2",
      type: "event",
      icon: "tour.svg",
      id: 4
    },
    {
      name: "Dinner Buffet",
      date: "Tuesday",
      slotsAvailable: -1,
      slotsBooked: -1,
      time: "17:00 - 20:00",
      location: "Dining Hall",
      type: "meal",
      icon: "meal.svg",
      id: 5
    },
    {
      name: "Boarding & Departure",
      date: "Wednesday",
      slotsAvailable: -1,
      slotsBooked: -1,
      time: "02:00",
      location: "Entire Ship",
      type: "boarding",
      icon: "ship.svg",
      id: 6
    }
  ];

export function updateEvent(id, data) {
  let position = eventData.map(function (item) {
    return item.id;
  }).indexOf(id);

  eventData[position] = data;
}

export function removeEvent(id) {
  let position = eventData.map(function (item) {
    return item.id;
  }).indexOf(id);

  eventData.splice(position, 1);
}

export function addEvent(data) {
  let position = eventData.map(function (item) {
    return item.id;
  }).indexOf(data.id);

  if (position == -1) {
    eventData.push(data);
  }
  
}


