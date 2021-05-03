<template>
  <v-container align="center" class="dashboard-box" id="entertainment">
    <v-row align="center" justify="center">
      <p align="center" class="heading">Entertainment</p>
    </v-row>

    <v-row align="center" justify="center">
      <div class="divider"></div>
    </v-row>

    <v-row class="btn-row">
      <div>
        <v-btn depressed>
          <img src="../../assets/img/icon/entertainment/icons8_feedly_1.svg" />
        </v-btn>
        <p>News</p>
      </div>

      <div>
        <v-btn depressed class="bg-green">
          <img src="../../assets/img/icon/entertainment/tv.svg" />
        </v-btn>
        <p>TV</p>
      </div>

      <div>
        <v-btn depressed>
          <img src="../../assets/img/icon/entertainment/icons8_origin.svg" />
        </v-btn>
        <p>Gaming</p>
      </div>
    </v-row>

    <v-row class="btn-row">
      <div>
        <v-btn depressed class="bg-blue">
          <img
            src="../../assets/img/icon/entertainment/icons8_amazon_prime_video.svg"
          />
        </v-btn>
        <p>Prime Video</p>
      </div>

      <div>
        <v-btn depressed>
          <img src="../../assets/img/icon/entertainment/icons8_netflix_1.svg" />
        </v-btn>
        <p>Netflix</p>
      </div>

      <div>
        <v-btn depressed class="bg-yellow">
          <img src="../../assets/img/icon/entertainment/globe.svg" />
        </v-btn>
        <p>Web</p>
      </div>
    </v-row>

    <v-row class="btn-row">
      <div>
        <v-btn depressed>
          <img
            src="../../assets/img/icon/entertainment/icons8_google_play_music.svg"
          />
        </v-btn>
        <p>Music</p>
      </div>

      <div>
        <v-btn depressed class="bg-red">
          <img
            src="../../assets/img/icon/entertainment/icons8_play_button.svg"
          />
        </v-btn>
        <p>YouTube</p>
      </div>

      <div>
        <v-btn depressed>
          <img
            src="../../assets/img/icon/entertainment/icons8_disney_plus_1.svg"
          />
        </v-btn>
        <p>Disney+</p>
      </div>
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
