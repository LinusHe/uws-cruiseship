<template>
  <v-container id="dashboard" class="pa-0">
    <Notifications ref="notifications"></Notifications>

    <div id="waves">
      <vue-wavify fill="#67B1EA" :speed="0.1" :amplitude="50" :points="7"></vue-wavify>
      <vue-wavify fill="#43A9EC" :speed="0.2" :amplitude="30" :points="3"></vue-wavify>
      <vue-wavify fill="#94CFE9" :speed="0.15" :amplitude="40" :points="5"></vue-wavify>
    </div>

    <div id="dashboard-content">
      <v-row id="content">
        <v-col class="wrapper" sm="9" :class="'expand-' + expandSize">
          <v-row>
            <Header></Header>
          </v-row>
          <v-row id="main-content" :class="'expand-' + expanded">
            <Entertainment :class="{ expand: expanded == 0 }"></Entertainment>
            <CabinControl :class="{ expand: expanded == 1 }" @expand="expand(1)" @shrink="shrink()" @expandSize="setExpandSize"></CabinControl>
            <Events :class="{ expand: expanded == 2 }" @book="getBookingData" @expand="expand(2)" @shrink="shrink()" @expandSize="setExpandSize"></Events>
          </v-row>
          <Footer></Footer>
        </v-col>
        <v-col sm="3" class="sidebar">
          <NotificationBar ref="notificationBar"></NotificationBar>
        </v-col>
        <v-overlay dark="false" absolute :value="booking.dialog">
          <BookingScreen @close="booking.dialog = false" :booking="booking"></BookingScreen>
        </v-overlay>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Header from "./DashboardElements/Header";
import Entertainment from "./DashboardElements/Entertainment";
import CabinControl from "./DashboardElements/CabinControl";
import Events from "./DashboardElements/Events";
import NotificationBar from "./DashboardElements/NotificationBar";
import Footer from "./DashboardElements/Footer";
import Notifications from "./Notifications.vue";
import BookingScreen from "./DashboardElements/BookingScreen";

import $ from "jquery";
import Velocity from "velocity-animate";

export default {
  name: "Dashboard",

  props: {},

  components: {
    Header,
    Entertainment,
    CabinControl,
    Events,
    NotificationBar,
    Footer,
    Notifications,
    BookingScreen,
  },

  data: () => ({
    expanded: -1,
    expandSize: "xl",
    booking: {
      dialog: false,
    },
  }),

  mounted() {
    Velocity($("#dashboard"), { opacity: "0" }, 0);
    Velocity($("#dashboard"), { opacity: "1" }, { delay: 0 }, 300);
  },

  methods: {
    expand(value) {
      this.expanded = value;
    },
    shrink() {
      this.expanded = -1;
    },
    setExpandSize(value) {
      this.expandSize = value;
    },
    getBookingData(data) {
      this.booking = data;
    },
  },
};
</script>
