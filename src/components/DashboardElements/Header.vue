<template>
  <v-row justify="space-between" id="header">
    <div id="welcome">
      <p>Good Morning</p>
      <h2>Fam. Johnson</h2>
    </div>
    <v-row id="timebox" justify="end">
      <v-col class="flex-grow-0">
        <p id="time">{{ timeStr }}</p>
      </v-col>
      <v-col class="flex-grow-0" id="date"
        ><p id="weekday">{{ weekdayStr }},</p>
        <p>{{ dayStr }}</p>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "Header",

  components: {
    //
  },

  created() {
    this.getNow();
    setInterval(this.getNow, 1000);
  },

  data: () => ({
    timeStr: "10:25",
    weekdayStr: "Monday",
    dayStr: "17. June",
  }),

  methods: {
    getNow: function() {
      const today = new Date();
      const weekday = today.toLocaleString("en", { weekday: "long" });
      const month = today.toLocaleString("en", { month: "long" });
      const day = today.toLocaleString("en", { day: "numeric" });
      const time = today.getHours() + ":" + today.getMinutes().toLocaleString("en", { minimumIntegerDigits: 2 });
      const dateTime = time;

      this.timeStr = dateTime;
      this.weekdayStr = weekday;
      this.dayStr = day + ". " + month;
    },
  },
};
</script>
