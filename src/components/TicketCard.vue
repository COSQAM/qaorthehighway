<template>
  <v-card
    class="text-left padding-y px-5"
    :color="highlighted ? 'primary' : undefined"
    :dark="highlighted"
  >
    <v-card-title class="text-h3 font-weight-black">${{ price }}</v-card-title>
    <v-card-subtitle class="text-h5 font-weight-bold">
      <div>{{ title }}</div>
      <div class="text-subtitle-1">{{ subtitle || "‏‏‎ ‎" }}</div>
    </v-card-subtitle>
    <div class="spacer" />
    <v-card-text class="text-subtitle-1">
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </v-card-text>
    <v-btn
      block
      :disabled="!available"
      color="accent"
      class="black--text mt-3"
      :href="buttonLink"
      x-large
      >{{ available ? buttonText : "Unavailable" }}</v-btn
    >
  </v-card>
</template>

<script>
export default {
  name: "TicketCard",
  props: {
    price: {
      type: [Number, String],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    },
    features: {
      type: Array,
      default: () => []
    },
    available: {
      type: Boolean,
      default: true
    },
    highlighted: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: "Buy Now"
    },
    buttonLink: {
      type: String,
      default: "/tickets"
    }
  }
};
</script>

<style scoped>
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