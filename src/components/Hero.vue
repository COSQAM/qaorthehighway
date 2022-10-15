<template>
  <v-img
    :src="require('@/assets/web/hero-image.png')"
    min-height="750px"
    max-height="800px"
  >
    <v-row
      align="center"
      justify="center"
      style="min-height: 700px"
      :class="$vuetify.breakpoint.xsOnly ? 'ma-2' : ''"
    >
      <v-spacer></v-spacer>
      <v-col
        class="white--text"
        cols="auto"
        :class="$vuetify.breakpoint.xsOnly ? '' : 'small-style'"
      >
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h3 font-weight-bold'
              : 'text-h2 font-weight-bold'
          "
        >
          The Midwests Largest Software Quality Conference
        </div>
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h6 font-weight-bold secondary--text py-5'
              : 'text-h5 font-weight-bold secondary--text py-5'
          "
        >
          <span class="accent--text">03-30-2022</span>
          <span class="pl-4 pr-1">COLUMBUS, OH</span>
          <span class="px-2">/</span>
          <span>THE OHIO UNION</span>
        </div>
        <h4 class="subheading mb-5">
          QA or the Highway is an affordable one day conference featuring real
          world experience and thought leadership in quality assurance for the
          software industry
        </h4>
        <v-btn block color="accent" class="black--text" href="./tickets" x-large
          >Get Your Tickets Now</v-btn
        >
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4"></v-col>
    </v-row>
    <Break style="color: white; bottom: -1px" />
  </v-img>
</template>

<script>
import Break from "@/components/icons/Break";

export default {
  components: {
    Break,
  },
};
</script>

<style scoped>
.small-style {
  max-width: 700px;
}
</style>
