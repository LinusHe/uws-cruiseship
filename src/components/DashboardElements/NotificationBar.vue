<template>
  <v-container id="notificationBar">
    <h3 align="center">Today's Schedule</h3>
    <p class="subHeadline" align="center">Timetable and booked Events</p>

    <v-window class="event-container" v-model="currentPage" vertical>
      <v-window-item v-for="page in pages()" :key="page">
        <EventElement v-for="event in pageEvents()" :key="event.name" :currentEvent="event" type="notification"></EventElement>
      </v-window-item>
    </v-window>

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
  </v-container>
</template>

<script>
import { eventData } from "../../schedule/schedule";
import EventElement from "./EventElement";

export default {
  name: "NotificationBar",

  components: {
    EventElement,
  },

  data: () => ({
    currentPage: 0,
    currentElement: 0,
    perPage: 5,
    events: eventData,
  }),

  methods: {
    pageEvents() {
      return this.events.slice(this.currentElement, this.currentElement + this.perPage);
    },
    pages() {
      let a = [];
      for (let i = 0; i < this.events.length / this.perPage; i++) {
        a.push(i);
      }
      return a;
    },
    next() {
      if (this.currentPage + 1 > this.events.length / this.perPage) {
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
  },
};
</script>
