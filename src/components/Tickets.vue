<template>
  <div class="background">
    <v-container>
      <v-row align="center" justify="center" class="my-5 py-5"
        ><h3 class="text-h5 font-weight-black white--text">TICKETS</h3></v-row
      >
      <v-row align="center" justify="center" class="mb-5 pb-5">
        <v-col cols="12" md="6" class="text-center">
          <v-card class="text-left padding-y px-5">
            <v-card-title class="text-h3 font-weight-black">$99</v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              <div>Early Bird Pricing</div>
              <div class="text-subtitle-1">(Ends May 16, 2025)</div>
            </v-card-subtitle>
            <div class="spacer" />
            <v-card-text class="text-subtitle-1">
              <ul v-for="(item, index) in list" :key="index">
                <li>{{ item }}</li>
              </ul>
            </v-card-text>
            <v-btn
              block
              color="accent"
              class="black--text mt-3"
              href="/tickets"
              x-large
              >Buy Now</v-btn
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-card class="text-left padding-y px-5" color="primary" dark>
            <v-card-title class="text-h3 font-weight-black">$129</v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              <div>Full Price Ticket</div>
              <div class="text-subtitle-1">‏‏‎ ‎</div>
            </v-card-subtitle>
            <div class="spacer" />
            <v-card-text class="text-subtitle-1">
              <ul v-for="(item, index) in list" :key="index">
                <li>{{ item }}</li>
              </ul>
            </v-card-text>
            <v-btn
              block
              disabled
              color="accent"
              class="black--text mt-3"
              href="/tickets"
              x-large
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
        "Breakfast and Lunch provided (vegetarian and vegan available by request)",
        "Conference t-shirt",
        "Coffee, Water, Soda, and Tea provided between sessions",
        "Conference and Sponsor Raffles",
        "Parking covered with ticket",
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