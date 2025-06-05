<template>
  <div class="background">
    <v-container class="max-center">
      <v-row align="center" justify="center" class="mb-5 pb-5">
        <v-col
          v-for="(ticket, index) in tickets"
          :key="index"
          cols="12"
          md="6"
          class="text-center"
        >
          <TicketCard
            :price="ticket.price"
            :title="ticket.title"
            :subtitle="ticket.subtitle"
            :features="ticketFeatures"
            :available="ticket.available"
            :highlighted="!ticket.available"
            :button-text="ticket.buttonText"
          />
        </v-col>
      </v-row>
    </v-container>
    <Break color="white" />
  </div>
</template>

<script>
import Break from "@/components/icons/Break";
import TicketCard from "@/components/TicketCard";

export default {
  components: {
    Break,
    TicketCard
  },
  data() {
    return {
      tickets: [
        {
          price: 99,
          title: "Early Bird Pricing",
          subtitle: "(Ends May 16, 2025)",
          available: false,
          buttonText: "Buy Now"
        },
        {
          price: 129,
          title: "Full Price Ticket",
          subtitle: "",
          available: true,
          buttonText: "Buy Now"
        }
      ],
      ticketFeatures: [
        "Access to 32 different talks given by world renowned speakers",
        "Breakfast and Lunch provided",
        "Conference t-shirt",
        "Coffee, Water, Soda, and Tea provided between sessions",
        "Afternoon snacks provided",
        "Conference and Sponsor Raffles",
        "Parking covered with ticket", 
        "Conference t-shirt"
      ]
    };
  }
};
</script>

<style scoped>
.background {
  background-color: var(--v-secondary-base) !important;
}
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
  padding-top: 3.7rem;
}
</style>