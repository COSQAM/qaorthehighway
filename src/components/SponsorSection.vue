<template>
  <div>
    <v-row align="center" justify="center">
      <h3 class="text-h5 font-weight-black primary--text py-5">{{ title }}</h3>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" justify="space-around" class="my-3">
      <v-col
        v-for="(sponsor, index) in sponsors"
        :key="index"
        sm="12"
        md="6"
        align-self="center"
        class="d-flex justify-center"
      >
        <v-card :width="maxWidth+50" :min-height="maxHeight-100" class="mx-2" :href="sponsor.url" target="_blank" hover outlined>
          <div class="d-flex justify-center align-center" style="height: 100%;">
            <v-img
              contain
              :max-height="maxHeight"
              :max-width="maxWidth"
              :src="findImage(sponsor.image)"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
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
/* Add any specific styles for SponsorSection here */
</style>
