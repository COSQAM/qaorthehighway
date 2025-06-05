<template>
  <v-container class="my-5 max-center">
    <div class="header text-center">
      Keynote Speakers
    </div>
    <div>
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
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
a {
  text-decoration: none;
}
a:hover .v-image {
  transform: scale(1.05);
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
.header {
  background: var(--v-primary-base); /* Adjust color as needed */
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border-radius: 6px 6px 0 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: left;
}
</style>