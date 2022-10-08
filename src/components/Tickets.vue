<template>
  <div class="background">
    <v-container>
      <v-row align="center" justify="center" class="my-5 py-5"
        ><h3 class="text-h5 font-weight-black white--text">TICKETS</h3></v-row
      >
      <v-row align="center" justify="center" class="mb-5 pb-5">
        <v-col cols="12" md="6" class="text-center">
          <v-card class="text-left padding-y px-5">
            <v-card-title class="text-h3 font-weight-black">$85</v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold"
              >Early Bird Pricing</v-card-subtitle
            >
            <div class="spacer" />
            <v-card-text class="text-subtitle-1">
              <ul v-for="(item, index) in list" :key="index">
                <li>{{ item }}</li>
              </ul>
            </v-card-text>
            <v-btn block color="accent" class="black--text mt-3" x-large
              >Buy Now</v-btn
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="text-center">
          <v-card class="text-left padding-y px-5" color="primary" dark>
            <v-card-title class="text-h3 font-weight-black">$99</v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold"
              >Full Price Ticket</v-card-subtitle
            >
            <div class="spacer" />
            <v-card-text class="text-subtitle-1">
              <ul v-for="(item, index) in list" :key="index">
                <li>{{ item }}</li>
              </ul>
            </v-card-text>
            <v-btn block color="accent" class="black--text mt-3" x-large disabled
              >Unavailable</v-btn
            >
          </v-card>
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
      list: [
        "Access to 32 different talks given by world renowned speakers",
        "Breakfast and Lunch provided",
        "Conference t-shirt",
        "Coffee, Water,and Tea provided between sessions",
        "Conference and Sponsor Raffles",
        "Parking covered in ticket",
      ],
    };
  },
};
</script>

<style scoped>
.background {
  background-color: var(--v-secondary-base) !important;
}
.spacer {
  border-top: 3px solid var(--v-secondary-base);
  width: 90%;
  margin: 20px auto;
}
.padding-y {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>