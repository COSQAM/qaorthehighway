<template>
  <div class="sponsor-section mb-8">
    <div class="sponsor-header text-center">
      {{ title.toUpperCase() }}
    </div>
    <v-sheet class="sponsor-card" outlined>
      <v-row align="center" justify="center" class="flex-wrap">
        <v-col
          v-for="(sponsor, index) in sponsors"
          :key="index"
          sm="12"
          md="6"
          class="d-flex justify-center align-center"
        >
          <a :href="sponsor.url" target="_blank" rel="noopener">
            <v-img
              contain
              :max-height="maxHeight"
              :max-width="maxWidth"
              :src="findImage(sponsor.image)"
              class="sponsor-logo"
            />
          </a>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    sponsors: {
      type: Array,
      required: true,
    },
    maxHeight: {
      type: Number,
      required: true,
    },
    maxWidth: {
      type: Number,
      required: true,
    },
  },
  methods: {
    findImage(sponsor) {
      try {
        return require(`@/assets/images/sponsors/${sponsor}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
};
</script>

<style scoped>
.sponsor-section {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
.sponsor-header {
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
.sponsor-card {
  background: #fff;
  padding: 2rem 1rem 1.5rem 1rem;
  border-radius: 0 0 6px 6px;
}
.sponsor-logo {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.2s;
}
.sponsor-logo:hover {
  transform: scale(1.05);
}
</style>
