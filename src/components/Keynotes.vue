<template>
  <v-container class="my-5">
    <v-row align="center" justify="center" class="my-5">
      <h3 class="text-h5 font-weight-black">KEYNOTE SPEAKERS</h3>
    </v-row>
    <div class="max-center">
      <v-row align="center" justify="center" class="my-3">
        <KeynoteCard
          v-for="(keynote, index) in keynotes"
          :key="index"
          :path="keynote.path"
          :speaker="keynote.speaker"
          :shortbio="keynote.shortbio"
        />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import KeynoteCard from "@/components/KeynoteCard";

export default {
  components: {
    KeynoteCard,
  },
  computed: {
    keynotes() {
      return [
        this.$page.keynote1.edges[0].node,
        this.$page.keynote2.edges[0].node,
      ];
    },
  },
};
</script>

<style scoped>
.max-center {
  max-width: 1000px;
  margin: 0 auto;
  float: none;
}
a {
  text-decoration: none;
}
a:hover .v-image {
  transform: scale(1.03);
  opacity: 0.8;
}
a:hover .speaker {
  color: var(--v-primary-base);
}
.speaker {
  color: black;
}
a:hover .bio {
  color: var(--v-primary-base);
}
.bio {
  color: #9e9e9e;
}
</style>