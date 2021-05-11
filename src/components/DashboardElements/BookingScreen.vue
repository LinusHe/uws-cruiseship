<template>
  <div id="bookingScreen" class="theme--light" align="center">
    <v-btn @click="close()" fab x-small elevation="0" class="myfab btn-close" color="#162346"><v-icon color="white">mdi-close</v-icon> </v-btn>

    <v-row class="justify-center">
      <h3>Book the Event</h3>
    </v-row>
    <v-row class="justify-center">
      <EventElement :currentEvent="booking.event"></EventElement>
    </v-row>
    <v-row class="justify-center">
      <div class="slot-container">
        <v-row>
          <p>How many Slots do you need?</p>
        </v-row>
        <v-row sm="12" justify="center" class="control-row">
          <v-btn :disabled="slotNumber == 1" @click="changeSlot(-1)" fab elevation="0" class="myfab-xxs" color="#162346">
            <v-icon color="white">mdi-minus</v-icon>
          </v-btn>
          <p class="number">{{ slotNumber }}</p>
          <v-btn :disabled="slotNumber == 5" @click="changeSlot(1)" fab x-small elevation="0" class="myfab-xxs" color="#162346">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <em>You can book a maximum of 5 slots with your account.</em>
        </v-row>
      </div>
    </v-row>
    <v-row class="justify-center">
      <v-btn :disabled="slotNumber > booking.event.slotsFree" class="book-button" depressed light large color="#A2E19D"> <v-icon>mdi-star-plus</v-icon>Book Event </v-btn>
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

  mounted() {},

  data: () => ({
    slotNumber: 1,
  }),

  methods: {
    close() {
      this.$emit("close");
    },
    changeSlot(value) {
      this.slotNumber += value;
    },
  },
};
</script>
