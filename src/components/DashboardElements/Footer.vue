<template>
  <v-row justify="space-between" id="footer">
    <v-col id="stats">
      <v-row>
        <v-col class="flex-grow-0">
          <img src="../../assets/img/icon/weather/sun-cloud.svg" />
        </v-col>
        <v-col class="flex-grow-0 align-self-center">
          <v-row
            ><p class="number">+27<span>°C</span></p></v-row
          >
          <v-row><p class="number-description">Outside Temperature</p></v-row>
        </v-col>
        <v-col class="flex-grow-0">
          <img src="../../assets/img/icon/weather/metrics.svg" />
        </v-col>
        <v-col class="flex-grow-1 align-self-center">
          <v-row
            ><p class="number">22<span>Kn</span></p></v-row
          >
          <v-row><p class="number-description">Cruise Ship Speed</p></v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="flex-grow-1" id="buttonlist">
      <v-row justify="end">
        <v-col align="center" class="flex-grow-0">
          <v-btn align="center" fab>
            <img src="../../assets/img/icon/dashboard/support.svg" alt="" />
          </v-btn>
          <p align="center">Support</p>
        </v-col>
        <v-col align="center" class="flex-grow-0">
          <v-btn align="center" fab>
            <img src="../../assets/img/icon/dashboard/compass-04.svg" alt="" />
          </v-btn>
          <p align="center">Route</p>
        </v-col>
        <v-col align="center" class="flex-grow-0">
          <v-btn align="center" fab>
            <img src="../../assets/img/icon/dashboard/gear.svg" alt="" />
          </v-btn>
          <p align="center">Settings</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Footer",

  components: {
    //
  },

  data: () => ({
    //
  }),
};
</script>
