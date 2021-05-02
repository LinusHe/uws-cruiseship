<template>
  <v-container id="dashboard">
    <div id="dashboard-content">
      <v-row id="content">
        <v-col sm="9">
          <v-row>
            <Header></Header>
          </v-row>
          <v-row>
            <Entertainment></Entertainment>
            <CabinControl></CabinControl>
            <Events></Events>
          </v-row>
          <v-row>
            <Footer></Footer>
          </v-row>
        </v-col>
        <v-col sm="3">
          <NotificationBar></NotificationBar>
        </v-col>
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

export default {
  name: "Dashboard",

  components: {
    Header,
    Entertainment,
    CabinControl,
    Events,
    NotificationBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
