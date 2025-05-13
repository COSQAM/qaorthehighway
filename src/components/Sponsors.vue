<template>
  <v-container class="my-5">
    <v-row align="center" justify="center">
      <h3 class="text-h5 font-weight-black pb-5">SPONSORS</h3>
    </v-row>
    <SponsorSection
      v-for="(section, index) in sponsorSections"
      :key="index"
      :title="section.title"
      :sponsors="section.sponsors"
      :maxHeight="section.maxHeight"
      :maxWidth="section.maxWidth"
    />
    <Break class="color" />
  </v-container>
</template>

<script>
import Break from "@/components/icons/Break";
import SponsorSection from "@/components/SponsorSection";

export default {
  components: {
    Break,
    SponsorSection,
  },
  data() {
    return {
      sponsorSections: [
        {
          title: "Platinum Sponsors",
          sponsors: [{ image: "ttc", url: "https://ttcglobal.com/" }],
          maxHeight: 350,
          maxWidth: 350,
        },
        {
          title: "Gold Sponsors",
          sponsors: [
            { image: "lighthouse", url: "https://lighthousetechnologies.com/" },
            { image: "tricentis", url: "https://www.tricentis.com/" },
            { image: "narwal", url: "https://narwal.ai/" },
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Silver Sponsors",
          sponsors: [
            { image: "mabl", url: "https://www.mabl.com/" },
            { image: "digy4", url: "https://www.digy4.com/" }, 
            { image: "brooksource", url: "https://www.brooksource.com/" }
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Snack Sponsors",
          sponsors: [{ image: "mabl", url: "https://www.mabl.com/" }],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "T-Shirt Sponsors",
          sponsors: [
            {
              image: "heritagedental",
              url: "https://www.heritagedentalohio.com/",
            },
            { image: "narwal", url: "https://narwal.ai/" },
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
      ],
      moreSponsors: [
        {
          title: "Silver Sponsors",
          sponsors: [
            { image: "yourlogo", url: "/contact" },
            { image: "yourlogo", url: "/contact" },
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Lunch Sponsors",
          sponsors: [{ image: "yourlogo", url: "/contact" }],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Snack Sponsors",
          sponsors: [{ image: "yourlogo", url: "/contact" }],
          maxHeight: 250,
          maxWidth: 250,
        },
      ],
    };
  },
};
</script>

<style scoped>
.color {
  color: var(--v-secondary-base);
  bottom: none;
}
</style>
