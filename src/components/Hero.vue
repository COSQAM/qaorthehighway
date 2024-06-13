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
      :class="$vuetify.breakpoint.smAndDown ? 'ma-2' : ''"
    >
      <v-spacer></v-spacer>
      <v-col
        class="white--text"
        cols="auto"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'small-style'"
      >
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h3 font-weight-bold'
              : 'large-text font-weight-bold'
          "
        >
          The Midwest's Largest Software Quality Conference
        </div>
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h6 font-weight-bold secondary--text py-5'
              : 'text-h5 font-weight-bold secondary--text py-5'
          "
        >
          <span class="accent--text">06-21-2024</span>
          <span class="pl-4 pr-1">COLUMBUS, OH</span>
          <span class="px-2">/</span>
          <span>THE OHIO UNION</span>
        </div>
        <h4 class="text-body-1 mb-5">
          QA or the Highway is an affordable one day conference featuring real
          world experience and thought leadership in quality assurance for the
          software industry
        </h4>
        <!-- leave feedback
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h6 font-weight-bold py-5'
              : 'text-h5 font-weight-bold py-5'
          "
        >
        We want you to have a great conference expereience. Your feedback is important to us.
        </div>
        <v-btn block color="accent" class="black--text" href="https://forms.gle/9ADa33TAGtd8T96A9" target="_blank" x-large>Leave Feedback</v-btn>
        -->
        <!-- call for speakers -->
        <!--
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h4 font-weight-bold py-5'
              : 'text-h3 font-weight-bold py-5'
          "
        >
         Call for Speakers now open!
        </div>
        <v-btn block color="accent" class="black--text" href="https://forms.gle/RPKw3NkBNv4N7PGK9" target="_blank" x-large
          >Submit your talk here</v-btn
        >
        -->
        <!-- call for speakers -->
        <div
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'text-h4 font-weight-bold py-5'
              : 'text-h3 font-weight-bold py-5'
          "
        >
        We want to hear from you
        </div>
        <v-btn block color="accent" class="black--text" href="https://docs.google.com/forms/d/e/1FAIpQLSdnQr50JlBFIJt5QM2nVAm7BYU-lADGdw3Fp4-HMYcLuzRRAA/viewform?usp=sf_link" target="_blank" x-large
          >Leave Feedback</v-btn
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
.large-text {
  font-size: 4.5rem;
  line-height: 5rem;

}
</style>
