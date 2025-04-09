/src/components/KeynoteCard.vue
<template>
  <v-col sm="12" md="6" class="text-center text-h5">
    <a :href="path">
      <v-avatar size="250">
        <v-img aspect-ratio="1:1" :src="findImage(speaker)" />
      </v-avatar>
      <div class="speaker headline font-weight-bold pt-3">
        {{ speaker }}
      </div>
      <div class="bio text-subtitle-1">
        {{ shortbio }}
      </div>
    </a>
  </v-col>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    shortbio: {
      type: String,
      required: true,
    },
  },
  methods: {
    findImage(speaker) {
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