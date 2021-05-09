<template>
  <v-container class="dashboard-box" id="events">
    <v-row align="center" justify="center">
      <p align="center" class="heading">Events & Reservations</p>
    </v-row>

    <v-row align="center" justify="center">
      <div class="divider"></div>
    </v-row>

    <div class="dashboard-buttons" v-if="!booked && !bookable">
      <v-row align="center" justify="center">
        <v-btn
          @click="bookableEvents()"
          class="control-box bg-green"
          id="controllight"
        >
          <v-row>
            <v-col class="flex-grow-0">
              <p class="number">47</p>
            </v-col>
            <v-col>
              <p class="number-description" align="left">
                Events<br />bookable
              </p>
            </v-col>
          </v-row>
          <img src="../../assets/img/icon/dashboard/check-in.svg" />
        </v-btn>
        <p align="center" class="label">Available Events</p>
      </v-row>

      <v-row align="center" justify="center">
        <v-btn
          @click="bookedEvents()"
          class="control-box bg-yellow"
          id="controltemp"
        >
          <v-row>
            <v-col class="flex-grow-0">
              <p class="number">12</p>
            </v-col>
            <v-col>
              <p class="number-description" align="left">Events<br />booked</p>
            </v-col>
          </v-row>
          <img src="../../assets/img/icon/dashboard/opening-times.svg" />
        </v-btn>
        <p align="center" class="label">Booked Events</p>
      </v-row>
    </div>

    <BookableEvents v-if="bookable" @close="close(0)"></BookableEvents>
    <BookedEvents v-if="booked" @close="close(1)"></BookedEvents>
  </v-container>
</template>

<script>
import BookableEvents from "./BookableEvents";
import BookedEvents from "./BookedEvents";

export default {
  name: "Events",

  components: {
    BookableEvents,
    BookedEvents,
  },

  data: () => ({
    bookable: false,
    booked: false,
  }),

  methods: {
    bookableEvents() {
      this.bookable = true;
      this.booked = false;
      this.$emit("expand");
      this.$emit("expandSize", "xl");
    },
    bookedEvents() {
      this.bookable = false;
      this.booked = true;
      this.$emit("expand");
      this.$emit("expandSize", "xl");
    },
    close() {
      this.bookable = false;
      this.booked = false;
      this.$nextTick(function () {
        this.$emit("shrink");
      });
    },
  },
};
</script>
