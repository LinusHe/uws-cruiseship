<template>
  <v-container id="notificationBar">
    <h3 align="center">Today's Schedule</h3>
    <p align="center">Timetable and booked Events</p>

    <v-window class="event-container" v-model="currentPage" vertical>
      <v-window-item v-for="page in pages()" :key="page">
        <div class="event" v-for="event in pageEvents()" :key="event.name" :class="'type-' + event.type">
          <v-row class="event-content">
            <v-col class="flex-grow-0">
              <img class="icon" :src="require(`@/assets/img/icon/notifications/${event.icon}`)" alt="" />
            </v-col>
            <v-col>
              <v-row>
                <p class="time">{{ event.time }}</p>
              </v-row>
              <v-row>
                <p class="name">{{ event.name }}</p>
              </v-row>
              <v-row>
                <p class="location">
                  <img class="pin" src="../../assets/img/icon/dashboard/pin.svg" alt="" />
                  {{ event.location }}
                </p>
              </v-row>
            </v-col>
          </v-row>
          <div class="badge" v-if="event.type == 'arrival' || event.type == 'boarding'"></div>
        </div>
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
import { eventData } from "../../schedule/events";

export default {
  name: "NotificationBar",

  components: {
    //
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
