<template>
  <v-app-bar app dense dark flat color="primary">
    <v-btn outlined @click="goback()" class="text-capitalize">
      <v-icon left small>$chevronleft</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      outlined
      @click="favorites2022.sessions[indexOf(speaker)].saved = !favorites2022.sessions[indexOf(speaker)].saved"
    >
      <div v-if="favorites2022.sessions[indexOf(speaker)].saved" class="text-capitalize">
        <v-icon left small color="amber">$starsolid</v-icon>Saved
      </div>
      <div v-else class="text-capitalize">
        <v-icon left small>$staroutline</v-icon>Save
      </div>
    </v-btn>
  </v-app-bar>
</template>

<script>
import favorites2022 from "@/data/favorites.json";

export default {
  props: ["speaker"],
  data() {
    return {
      favorites2022
    };
  },
  methods: {
    indexOf: function(speakerName) {
      var indexPos = this.favorites2022.sessions
        .map(function(instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    },
    goback: function() {
      window.history.go(-1);
    }
  },
  //This is checking if there is any information in local storage and saving to favorites
  mounted() {
    if (localStorage.favorites2022) {
      console.log("mounted");
      this.favorites2022 = { ...this.favorites2022, ...JSON.parse(localStorage.favorites2022) };;
    }
  },
  //This is watching for changes in favorites and saving them to local storage
  watch: {
    favorites2022: {
      handler() {
        console.log("favorites changed");
        localStorage.setItem("favorites2022", JSON.stringify(this.favorites2022));
      },
      deep: true
    }
  }
};
</script>

