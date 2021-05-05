<template>
  <v-container class="dashboard-box" id="cabincontrol">
    <v-row align="center" justify="center">
      <p align="center" class="heading">Cabin Control</p>
    </v-row>

    <v-row align="center" justify="center">
      <div class="divider"></div>
    </v-row>

    <!-- Dashboard Cabin Control -->
   
      <v-row align="center" justify="center" class="control-light-card">
        <v-btn @click="lighControl()" depressed class="control-box bg-orange" id="controllight">
          <v-row>
            <p class="number">85<span>%</span></p>
          </v-row>
          <v-row>
            <p class="number-description">Global Brightness</p>
          </v-row>
          <img src="../../assets/img/icon/dashboard/sun.svg" />
        </v-btn>
        <p align="center" class="label">Light Control</p>
      </v-row>
    

    <!-- Dashboard Light Control -->
    <v-row align="center" justify="center">
      <v-btn @click="climaControl()" class="control-box bg-aqua" id="controltemp">
        <v-row>
          <p class="number">22<span>°C</span></p>
        </v-row>
        <v-row>
          <p class="number-description">Room Temperature</p>
        </v-row>
        <img src="../../assets/img/icon/dashboard/temperature.svg" />
      </v-btn>
      <p align="center" class="label">Temperature Control</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CabinControl",

  components: {
    //
  },

  data: () => ({
    lightExpand: false,
  }),

  methods: {
    lighControl() {
      this.$emit('expand');
    },
    climaControl() {
      this.$emit('expand');
    }
  }
};
</script>
