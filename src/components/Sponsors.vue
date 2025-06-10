<template>
  <v-container class="my-5">
    <SponsorSection v-for="(section, index) in sponsorSections" :key="index" :title="section.title"
      :sponsors="section.sponsors" :maxHeight="section.maxHeight" :maxWidth="section.maxWidth" />
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
          sponsors: [
            { image: "ttc", url: "https://ttcglobal.com/" },
            { image: "checkpoint", url: "https://checkpointech.com/" }
          ],
          maxHeight: 350,
          maxWidth: 350,
        },
        {
          title: "Gold Sponsors",
          sponsors: [
            { image: "lighthouse", url: "https://lighthousetechnologies.com/" },
            { image: "tricentis", url: "https://www.tricentis.com/" },
            { image: "narwal", url: "https://narwal.ai/" },
            { image: "lambdatest", url: "https://www.lambdatest.com/" },
            { image: "digy4", url: "https://www.digy4.com/" }
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Silver Sponsors",
          sponsors: [
            { image: "mabl", url: "https://www.mabl.com/" },
            { image: "brooksource", url: "https://www.brooksource.com/" },
            { image: "qt", url: "https://www.qt.io/" },
          ],
          maxHeight: 250,
          maxWidth: 250,
        },
        {
          title: "Lunch Sponsors",
          sponsors: [{ image: "checkpoint", url: "https://checkpointech.com/" }],
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
            { image: "heritagedental", url: "https://www.heritagedentalohio.com/" },
            { image: "narwal", url: "https://narwal.ai/" },
            { image: "checkpoint", url: "https://checkpointech.com/" },
            { image: "lambdatest", url: "https://www.lambdatest.com/" }
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
