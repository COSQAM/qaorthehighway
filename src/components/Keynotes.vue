<template>
  <v-container class="my-5">
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black">KEYNOTE SPEAKERS</h3></v-row
    >
    <div class="max-center">
      <v-row align="center" justify="center" class="my-3">
        <v-col sm="12" md="6" class="text-center text-h5">
          <a :href="$page.keynote1.edges[0].node.path">
            <v-avatar size="250">
              <v-img aspect-ratio="1:1" :src="findImage($page.keynote1.edges[0].node.speaker)" />
            </v-avatar>
            <div class="speaker headline font-weight-bold pt-3">
              {{ $page.keynote1.edges[0].node.speaker }}
            </div>
            <div class="bio text-subtitle-1">
              {{ $page.keynote1.edges[0].node.shortbio }}
            </div>
          </a>
        </v-col>
        <v-col sm="12" md="6" class="text-center text-h5">
          <a :href="$page.keynote2.edges[0].node.path">
            <v-avatar size="250">
              <v-img aspect-ratio="1:1" :src="findImage($page.keynote2.edges[0].node.speaker)" />
            </v-avatar>
            <div class="speaker headline font-weight-bold pt-3">
              {{ $page.keynote2.edges[0].node.speaker }}
            </div>
            <div class="bio text-subtitle-1">
              {{ $page.keynote2.edges[0].node.shortbio }}
            </div>
          </a>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>


export default {
  methods: {
    findImage: (speaker) => {
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
};
</script>

<style scoped>
.max-center {
  max-width: 1000px;
  margin: 0px auto;
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
  color: var(--v-primary-base)
}
.speaker {
  color: black
}

a:hover .bio {
  color: var(--v-primary-base)
}
.bio {
  color: #9e9e9e
}
</style>