<template>
  <div class="background">
    <v-container>
      <v-row align="center" justify="center" class="my-5 py-5"
        ><h3 class="text-h5 font-weight-black white--text">
          PAST CONFERENCES
        </h3></v-row
      >
      <v-row align="center" justify="space-around" class="mb-5 pb-5">
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12"
          md="6"
          class="d-flex justify-center"
        >
          <v-dialog v-model="dialog" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
              <div v-on="on">
                <v-img
                  contain
                  max-height="400"
                  max-width="400"
                  :src="findImage(image)"
                />
              </div>
            </template>
            <template v-slot:default="dialog">
              <v-card @click="dialog.value = false" class="text-center">
                <img
                  contain
                  :src="findImage(image)"
                  alt=""
                  class="resize"
                />
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    <Break color="white" />
  </div>
</template>

<script>
import Break from "@/components/icons/Break";

export default {
  components: {
    Break,
  },
  data() {
    return {
      images: [
        "2018_1",
        "2018_2",
        "2018_3",
        "2019_1",
        "2019_2",
        "2019_3",
        "2020_1",
        "2020_2",
      ],
    };
  },
  methods: {
    findImage: (image) => {
      try {
        return require(`@/assets/images/past/${image}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-color: var(--v-secondary-base) !important;
}
.resize {
  max-width: 100%;
  max-height: 100%;
}
</style>