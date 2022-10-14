<template>
  <v-img :src="require('@/assets/web/hero-image.png')" min-height="750px" max-height="800px">
    <v-row align="center" justify="center" style="height: 700px" :class="$vuetify.breakpoint.xsOnly ? 'ma-2' : ''">>
      <v-spacer></v-spacer>
      <v-col class="white--text" cols="auto" :class="$vuetify.breakpoint.xsOnly ? '' : 'small-style'">
        <h1 class="text-h2 font-weight-bold mb-5">
          The Midwests Largest Software Quality Conference
        </h1>
        <h1 class="text-h5 font-weight-bold mb-5 secondary--text">
          <span class="accent--text">03-30-2022</span>
          <span class="pl-4 pr-1">COLUMBUS, OH</span>
          <span class="px-2">/</span>
          <span>THE OHIO UNION</span>
        </h1>
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
