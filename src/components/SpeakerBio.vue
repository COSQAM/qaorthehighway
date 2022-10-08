<template>
  <v-layout ma-0 pa-0 row wrap>
    <v-flex xs12 md4 pa-3 justify-center align-center layout>
      <v-avatar size="300">
        <img :src="findImage()" :alt="speaker" />
      </v-avatar>
    </v-flex>
    <v-flex xs12 md8 pa-3>
      <v-layout align-center>
        <div class="headline font-weight-bold">{{ speaker }}</div>
        <v-spacer />
        <v-btn
          v-if="linkUrl"
          text
          icon
          class="mx-1"
          color="#0077B5"
          target="_blank"
          :href="linkUrl"
          :title="`${speaker} LinkedIn`"
        >
          <v-icon>$vuetify.icons.linkedin</v-icon>
        </v-btn>
        <v-btn
          v-if="twitUrl"
          text
          icon
          class="mx-1"
          color="#38A1F3"
          target="_blank"
          :href="twitUrl"
          :title="`${speaker} Twitter`"
        >
          <v-icon>$vuetify.icons.twitter</v-icon>
        </v-btn>
        <v-btn
          v-if="youtubeUrl"
          text
          icon
          class="mx-1"
          color="#FF0000"
          target="_blank"
          :href="youtubeUrl"
          :title="`${speaker} Youtube`"
        >
          <v-icon>$vuetify.icons.youtube</v-icon>
        </v-btn>
        <v-btn
          v-if="webUrl"
          text
          icon
          class="mx-1"
          color="#1b51aa"
          target="_blank"
          :href="webUrl"
          :title="`${speaker} Website`"
        >
          <v-icon>$vuetify.icons.website</v-icon>
        </v-btn>
      </v-layout>
      <v-divider class="my-2" />
      <div class="subheading text-color">{{ bio }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
//import { WebpMachine } from "webp-hero";

export default {
  props: ["speaker", "bio", "linkUrl", "twitUrl", "webUrl", "youtubeUrl"],
  methods: {
    findImage: function () {
      try {
        return require(`@/assets/images/${this.speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
  /*
  mounted() {
    const webpMachine = new WebpMachine()
    webpMachine.polyfillDocument()
  }
  */
};
</script>

<style scoped>
.text-color {
  color: rgba(0, 0, 0, 0.6);
}
</style>