<template>
  <v-container class="dashboard-box" id="events">
    <v-row align="center" justify="center">
      <p align="center" class="heading">Events & Reservations</p>
    </v-row>

    <v-row align="center" justify="center">
      <div class="divider"></div>
    </v-row>

    <div class="dashboard-buttons">
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
  </v-container>
</template>

<script>
export default {
  name: "Events",

  components: {
    //
  },

  data: () => ({
    //
  }),

  methods: {
    bookableEvents() {
      this.$emit("expand");
    },
    bookedEvents() {
      this.$emit("expand");
    },
  },
};
</script>
