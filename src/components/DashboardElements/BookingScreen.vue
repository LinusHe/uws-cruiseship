<template>
  <div id="bookingScreen" class="theme--light" align="center">
    <v-btn @click="cancel()" fab x-small elevation="0" class="myfab btn-close" color="#162346"><v-icon color="white">mdi-close</v-icon> </v-btn>

    <v-row class="justify-center">
      <h3>Book the Event</h3>
    </v-row>
    <v-row class="justify-center">
      <EventElement :currentEvent="booking.event" type="slotSelection"></EventElement>
    </v-row>
    <v-row class="justify-center">
      <div class="slot-container">
        <v-row>
          <p>How many Slots do you need?</p>
        </v-row>
        <v-row sm="12" justify="center" class="control-row">
          <v-btn :disabled="booking.event.slotsBooked == 1" @click="changeSlot(-1)" fab elevation="0" class="myfab-xxs" color="#162346">
            <v-icon color="white">mdi-minus</v-icon>
          </v-btn>
          <p class="number">{{ booking.event.slotsBooked }}</p>
          <v-btn :disabled="booking.event.slotsBooked == 5 || booking.event.slotsFree == 0" @click="changeSlot(1)" fab x-small elevation="0" class="myfab-xxs" color="#162346">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <em>You can book a maximum of 5 slots with your account.</em>
        </v-row>
      </div>
    </v-row>
    <v-row class="justify-center">
      <v-btn class="book-button" v-if="!booking.event.booked" @click="book()" depressed light large color="#A2E19D"> <v-icon>mdi-star-plus</v-icon>Book Event</v-btn>
      <v-btn class="book-button" v-if="booking.event.booked" @click="book()" depressed light large color="#A2E19D"> <v-icon>mdi-star-cog</v-icon>Confirm Booking</v-btn>
      <v-btn class="cancel-button" v-if="booking.event.booked" @click="unbook()" text light color="error">Delete Booking</v-btn>
    </v-row>
  </div>
</template>

<script>
// import $ from "jquery";
// import Velocity from "velocity-animate";
import EventElement from "./EventElement";

export default {
  name: "BookingScreen",

  components: {
    EventElement,
  },

  props: {
    booking: Object,
  },

  created: function() {},

  mounted() {
    this.preSlotsBooked = this.booking.event.slotsBooked;
    this.preSlotsFree = this.booking.event.slotsFree;
    this.preBooked = this.booking.event.booked;
    if (this.booking.event.booked == false) {
      this.booking.event.booked = true;
      this.booking.event.slotsBooked = 1;
    }
  },

  data: () => ({
    preSlotsBooked: 0,
    preSlotsFree: 0,
    preBooked: false,
  }),

  methods: {
    cancel() {
      this.booking.event.slotsFree = this.preSlotsFree;
      this.booking.event.slotsBooked = this.preSlotsBooked;
      this.booking.event.booked = this.preBooked;
      this.close();
    },
    close() {
      this.$emit("close");
    },
    changeSlot(value) {
      this.booking.event.slotsBooked += value;
      this.booking.event.slotsFree -= value;
    },
    book() {
      this.booking.event.booked = true;
      this.close();
    },
    unbook() {
      this.booking.event.booked = false;
      this.booking.event.slotsFree += this.booking.event.slotsBooked;
      this.booking.event.slotsBooked = 0;
      this.close();
    },
  },
};
</script>
