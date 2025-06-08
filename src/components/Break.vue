<template>
  <div class="title font-weight-bold py-3 background pl-2 white--text text-truncate header">
    <span>{{ time }}</span>
    <span class="pl-5">{{ activity }}</span>
    <span class="pl-5 font-weight-light text-subtitle-1">{{ loc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    time: { type: String, required: true },
    activity: { type: String, required: true },
    loc: { type: String, default: "" },
  },
};
</script>

<style scoped>
.background {
  background-color: var(--v-primary-base);
}
.header {
  background: var(--v-primary-base);
  /* Adjust color as needed */
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: left;
}
</style>