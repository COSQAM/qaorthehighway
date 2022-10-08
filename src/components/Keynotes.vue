<template>
  <v-container class="my-5">
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black">KEYNOTE SPEAKERS</h3></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">
        <v-avatar size="300">
          <img :src="findImage($page.keynote1.edges[0].node.speaker)" />
        </v-avatar>
        <h3>
          {{ $page.keynote1.edges[0].node.speaker }}
        </h3>
      </v-col>
      <v-col cols="12" sm="6" class="text-center">
        <v-avatar size="300">
          <img :src="findImage($page.keynote2.edges[0].node.speaker)" />
        </v-avatar>
        <h3>
          {{ $page.keynote2.edges[0].node.speaker }}
        </h3>
      </v-col>
    </v-row>
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
        return require(`@/assets/images/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
};
</script>

<style scoped>
.color {
  color: var(--v-secondary-base);
  bottom: none;
}
</style>