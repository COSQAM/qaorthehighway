<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 16px;
}

.layout {
  width: 100%;
  margin: 0px auto;
}
</style>
