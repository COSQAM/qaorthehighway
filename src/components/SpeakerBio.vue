<template>
  <v-row class="ma-2">
    <v-col cols="12" md="4" class="text-center">
      <v-avatar size="250">
        <v-img aspect-ratio="1:1" :src="findImage()" :alt="speaker" />
      </v-avatar>
    </v-col>
    <v-col cols="12" md="8">
      <v-row align="center">
        <v-col cols="auto">
          <div class="headline font-weight-bold">{{ speaker }}</div>
        </v-col>
        <v-spacer />
        <v-col cols="auto">
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
            color="#000000"
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
        </v-col>
      </v-row>

      <v-divider class="my-2" />
      <div class="subheading text-color pre-format">{{ bio }}</div>
    </v-col>
  </v-row>
</template>

<script>
//import { WebpMachine } from "webp-hero";

export default {
  props: ["speaker", "bio", "linkUrl", "twitUrl", "webUrl", "youtubeUrl"],
  methods: {
    findImage: function () {
      try {
        return require(`@/assets/images/speakers/${this.speaker.toLowerCase()}.webp`);
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
.pre-format {
  white-space: pre-wrap;
}
.text-color {
  color: rgba(0, 0, 0, 0.5);
}
</style>