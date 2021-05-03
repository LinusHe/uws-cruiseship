<template>
  <v-container class="dashboard-box" id="entertainment">
    <h3>Entertainment</h3>
    <hr />

    <v-row>
      <v-btn depressed>
        <v-img
          src="../../assets/img/icon/entertainment/icons8_feedly_1.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed class="bg-green">
        <v-img
          src="../../assets/img/icon/entertainment/tv.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed>
        <v-img
          src="../../assets/img/icon/entertainment/icons8_origin.svg"
        ></v-img>
      </v-btn>
    </v-row>

    <v-row>
      <v-btn depressed class="bg-blue">
        <v-img
          src="../../assets/img/icon/entertainment/icons8_amazon_prime_video.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed>
        <v-img
          src="../../assets/img/icon/entertainment/icons8_netflix_1.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed class="bg-yellow">
        <v-img
          src="../../assets/img/icon/entertainment/globe.svg"
        ></v-img>
      </v-btn>
    </v-row>

    <v-row>
      <v-btn depressed>
        <v-img
          src="../../assets/img/icon/entertainment/icons8_google_play_music.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed class="bg-red">
        <v-img
          src="../../assets/img/icon/entertainment/icons8_play_button.svg"
        ></v-img>
      </v-btn>
      <v-btn depressed>
        <v-img
          src="../../assets/img/icon/entertainment/icons8_disney_plus_1.svg"
        ></v-img>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Entertainment",

  components: {
    //
  },

  data: () => ({
    //
  }),
};
</script>
