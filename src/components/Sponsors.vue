<template>
  <v-container class="my-5">
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black pb-5">2022 SPONSORS</h3></v-row
    >
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black primary--text py-5">
        Platinum Sponsors
      </h3></v-row
    >
    <v-divider></v-divider>
    <v-row align="center" justify="space-around" class="my-3">
      <v-col
        v-for="(platinum, index) in platinums"
        :key="index"
        sm="12"
        md="6"
        class="d-flex justify-center"
      >
        <a :href="`${platinum.url}`" target="_blank">
          <v-img
            contain
            max-height="350"
            max-width="350"
            :src="findImage(platinum.image)"
          />
        </a>
      </v-col>
    </v-row>
    <div></div>
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black primary--text py-5">
        Gold Sponsors
      </h3>
    </v-row>
    <v-divider></v-divider>
    <v-row align-content="center" justify="space-around" class="my-3">
      <v-col
        v-for="(gold, index) in golds"
        :key="index"
        sm="12"
        md="6"
        class="d-flex justify-center"
      >
        <a :href="`${gold.url}`" target="_blank">
          <v-img
            contain
            max-height="250"
            max-width="250"
            :src="findImage(gold.image)"
          />
        </a>
      </v-col>
    </v-row>
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black primary--text py-5">
        Silver Sponsors
      </h3>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" justify="space-around" class="my-3">
      <v-col
        v-for="(silver, index) in silvers"
        :key="index"
        sm="12"
        md="4"
        class="d-flex justify-center"
      >
        <a :href="`${silver.url}`" target="_blank">
          <v-img
            contain
            max-height="250"
            max-width="250"
            :src="findImage(silver.image)"
          />
        </a>
      </v-col>
    </v-row>
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black primary--text py-5">
        Snack Sponsors
      </h3>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" justify="space-around" class="my-3">
      <v-col
        v-for="(snack, index) in snacks"
        :key="index"
        sm="12"
        md="6"
        class="d-flex justify-center"
      >
        <a :href="`${snack.url}`" target="_blank">
          <v-img
            contain
            max-height="250"
            max-width="250"
            :src="findImage(snack.image)"
          />
        </a>
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
  data() {
    return {
      platinums: [
        { image: "everest", url: "https://everesttech.com/" },
        { image: "mabl", url: "https://www.mabl.com/" },
      ],
      golds: [
        { image: "sogeti", url: "https://www.sogeti.com/" },
        { image: "practitest", url: "https://www.practitest.com/" },
        { image: "impower", url: "https://www.impower.ai/" },
        { image: "nesco", url: "https://www.nescoresource.com/" },
      ],
      silvers: [
        { image: "revel", url: "https://www.revelit.com/" },
        { image: "perfecto", url: "https://www.perfecto.io/" },
        { image: "igs", url: "https://www.igs.com/" },
        { image: "unicon", url: "https://www.unicon.net/" },
        { image: "boundless", url: "https://www.boundless.com/" },
        { image: "echelle", url: "http://echelleresources.com/" },
        { image: "applitools", url: "https://applitools.com/" },
        { image: "cgi", url: "https://www.cgi.com/en" },
        { image: "provar", url: "https://www.provartesting.com/" },
        { image: "improving", url: "https://improving.com/" },
        { image: "functionize", url: "https://www.functionize.com/" },
      ],
      snacks: [
        { image: "practitest", url: "https://www.practitest.com/" },
        { image: "boundless", url: "https://www.boundless.com/" },
      ],
    };
  },
  methods: {
    findImage: (sponsor) => {
      try {
        return require(`@/assets/images/sponsors/${sponsor}.webp`);
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
</style>