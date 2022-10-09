<template>
  <v-img :src="require('@/assets/web/hero-image.png')" max-height="700px">
    <v-row align="center" justify="center" style="height: 700px">
      <v-spacer></v-spacer>
      <v-col class="white--text" cols="auto" style="max-width: 700px">
        <h1 class="text-h2 font-weight-bold mb-5">
          The Midwests Largest Software Quality Conference
        </h1>
        <h1 class="text-h5 font-weight-bold mb-5 secondary--text">
          COLUMBUS, OH / 03-30-2022 / THE OHIO UNION
        </h1>
        <h4 class="subheading mb-5">
          QA or the Highway is an affordable one day conference featuring real
          world experience and thought leadership in quality assurance for the
          software industry
        </h4>
        <v-btn block color="accent" class="black--text" x-large
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
