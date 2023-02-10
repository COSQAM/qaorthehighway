<template>
  <v-container class="my-5">
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black pb-5">SPONSORS</h3></v-row
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
        align-self="center"
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
        align-self="center"
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
        align-self="center"
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
        align-self="center"
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
    <v-row align="center" justify="center"
      ><h3 class="text-h5 font-weight-black primary--text py-5">
        T-Shirt Sponsors
      </h3>
    </v-row>
    <v-divider></v-divider>
    <v-row align="center" justify="space-around" class="my-3">
      <v-col
        v-for="(tshirt, index) in tshirts"
        :key="index"
        sm="12"
        md="6"
        align-self="center"
        class="d-flex justify-center"
      >
        <a :href="`${tshirt.url}`" target="_blank">
          <v-img
            contain
            max-height="250"
            max-width="250"
            :src="findImage(tshirt.image)"
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
        { image: "practitest", url: "https://www.practitest.com/" },
        { image: "mabl", url: "https://www.mabl.com/" },
      ],
      golds: [
        { image: "perfecto", url: "https://www.perfecto.io/" },
        { image: "impower", url: "https://www.impower.ai/" },
        { image: "lighthouse", url: "https://lighthousetechnologies.com/" },
        { image: "valuemomentum", url: "https://valuemomentum.com/" }
      ],
      silvers: [
        { image: "boundless", url: "https://www.boundless.com/" },
        { image: "applitools", url: "https://applitools.com/" },
        { image: "revel", url: "https://www.revelit.com/" }
      ],
      snacks: [
        { image: "yourlogo", url: "/contact" }
      ],
      tshirts: [{ image: "practitest", url: "https://www.practitest.com/" }],
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