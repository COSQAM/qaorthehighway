<template>
  <v-container class="my-5">
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black">2023 KEYNOTE SPEAKERS</h3></v-row
    >
    <div class="max-center">
      <v-row align="center" justify="center" class="my-3">
        <v-col sm="12" md="6" class="text-center text-h5">
          <a :href="`/${removeSpaces($page.keynote1.edges[0].node.speaker)}`">
            <v-avatar size="300">
              <img :src="findImage($page.keynote1.edges[0].node.speaker)" />
            </v-avatar>
          </a>

          <div class="headline font-weight-bold pt-3">
            {{ $page.keynote1.edges[0].node.speaker }}
          </div>
          <div class="text-subtitle-1 grey--text">
            {{ $page.keynote1.edges[0].node.shortbio }}
          </div>
        </v-col>
        <v-col sm="12" md="6" class="text-center text-h5">
          <a :href="`/${removeSpaces($page.keynote2.edges[0].node.speaker)}`">
            <v-avatar size="300">
              <img :src="findImage($page.keynote2.edges[0].node.speaker)" />
            </v-avatar>
          </a>
          <div class="headline font-weight-bold pt-3">
            {{ $page.keynote2.edges[0].node.speaker }}
          </div>
          <div class="text-subtitle-1 grey--text">
            {{ $page.keynote2.edges[0].node.shortbio }}
          </div>
        </v-col>
      </v-row>
    </div>

    <Break class="color" />
  </v-container>
</template>

<script>
import Break from "@/components/icons/Break";

export default {
  components: {
    Break,
  },
  methods: {
    findImage: (speaker) => {
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
    removeSpaces: function (text) {
      return text.replace(/\s/g, "");
    },
  },
};
</script>

<style scoped>
.color {
  color: var(--v-secondary-base);
  bottom: none;
}
.max-center {
  max-width: 1000px;
  margin: 0px auto;
  float: none;
}
</style>