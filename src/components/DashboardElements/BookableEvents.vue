<template>
  <v-container id="bookableEvents" class="event-section">
    <v-btn @click="close()" fab x-small elevation="0" class="myfab btn-close" color="#162346"><v-icon color="white">mdi-close</v-icon> </v-btn>

    <v-row justify="center">
      <p class="section-name">Bookable Events</p>
    </v-row>

    <v-row align-content="center" class="mt-0">
      <v-container class="booking-container">
        <v-tabs @change="resetTab" fixed-tabs v-model="tab" align-with-title>
          <v-tab v-for="item in weekdays" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in weekdays" :key="item">
            <v-window v-model="currentPage">
              <v-window-item v-for="page in pages()" :key="page">
                <v-row class="event-container">
                  <EventElement v-for="event in pageEvents()" :key="event.name" :currentEvent="event" @eventDetails="openBooking(event)" type="bookable"></EventElement>
                </v-row>
              </v-window-item>
            </v-window>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-row>

    <!-- Page Selector -->
    <div class="page-selector">
      <v-row justify="center">
        <v-item-group v-model="currentPage" class="text-center page-dots" mandatory>
          <v-item v-for="n in pages()" :key="`btn-${n}`" v-slot="{ active }">
            <v-icon :class="active ? 'selected' : ''">mdi-record</v-icon>
          </v-item>
        </v-item-group>
      </v-row>
      <v-row class="button-group" justify="space-between">
        <v-btn fab x-small class="myfab" elevation="0" color="#162346" @click="prev" :disabled="currentPage == 0">
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
        <p>Page {{ currentPage + 1 }} of {{ pages().length }}</p>
        <v-btn fab x-small class="myfab" elevation="0" color="#162346" @click="next" :disabled="currentPage == pages().length - 1">
          <v-icon color="white">mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </div>

    <!-- Booking Screen -->
    <!-- <BookingScreen :booking="booking"></BookingScreen> -->
  </v-container>
</template>

<script>
import $ from "jquery";
import Velocity from "velocity-animate";
import { available } from "../../schedule/availableEvents";

import EventElement from "./EventElement";
// import BookingScreen from "./BookingScreen";

export default {
  name: "BookableEvents",

  components: {
    EventElement,
    // BookingScreen,
  },

  created: function() {
    this.getWeekdays();
  },

  mounted() {
    Velocity($("#bookableEvents"), { opacity: "0" }, 0);
    Velocity($("#bookableEvents"), { opacity: "1" }, { delay: 400 }, 300);
  },

  data: () => ({
    tab: null,
    today: "",
    weekdays: ["Today", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    events: available,
    currentPage: 0,
    currentElement: 0,
    perPage: 2,
    booking: { event: {}, dialog: false },
  }),

  methods: {
    close() {
      this.$emit("close");
    },
    getWeekdays() {
      let today = new Date();
      for (let i = 0; i < 7; i++) {
        let dateX = new Date(today);
        dateX.setDate(dateX.getDate() + i);
        this.weekdays[i] = dateX.toLocaleString("en", { weekday: "long" });
      }
      this.today = this.weekdays[0];
      this.weekdays[0] = "Today";
    },
    getAvailableEvents() {
      return available.filter((el) => el.booked == false && el.slotsFree > 0);
    },
    getDayEvents() {
      if (this.tab == 0) return this.getAvailableEvents().filter((el) => el.date == this.today);
      return this.getAvailableEvents().filter((el) => el.date == this.weekdays[this.tab]);
    },
    pageEvents() {
      return this.getDayEvents().slice(this.currentElement, this.currentElement + this.perPage);
    },
    pages() {
      let a = [];
      for (let i = 0; i < this.getDayEvents().length / this.perPage; i++) {
        a.push(i);
      }
      return a;
    },
    next() {
      if (this.currentPage + 1 > this.getDayEvents().length / this.perPage) {
        console.log("Already Last Page");
      } else {
        this.currentElement = this.currentElement + this.perPage;
        this.currentPage = this.currentPage + 1;
      }
    },
    prev() {
      this.currentElement = this.currentElement - this.perPage;
      this.currentPage = this.currentPage - 1;
    },
    resetTab() {
      this.currentPage = 0;
      this.currentElement = 0;
    },
    openBooking(event) {
      this.booking.event = event;
      this.booking.dialog = true;
      this.$emit("book", this.booking);
    },
  },
};
</script>
