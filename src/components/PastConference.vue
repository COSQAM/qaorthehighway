<template>
  <div class="background">
    <v-container>
      <v-row align="center" justify="center" class="my-5 py-5">
        <h3 class="text-h5 font-weight-black white--text">PAST CONFERENCES</h3>
      </v-row>
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div
            class="carousel"
            :style="{
              transform: `translateX(-${currentSlide * slideWidth}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
            }"
            @transitionend="handleTransitionEnd"
          >
            <div
              class="carousel-item"
              v-for="(image, index) in infiniteImages"
              :key="index"
            >
              <v-img
                contain
                max-height="600"
                max-width="600"
                :src="findImage(image)"
              />
            </div>
          </div>
        </div>
        <div class="carousel-control prev" @click="prevSlide">
          <ChevronLeft />
        </div>
        <div class="carousel-control next" @click="nextSlide">
          <ChevronLeft class="flipped" />
        </div>
      </div>
    </v-container>
    <Break color="white" />
  </div>
</template>

<script>
import Break from "@/components/icons/Break";
import ChevronLeft from "@/components/icons/ChevronLeft";

export default {
  components: {
    Break,
    ChevronLeft,
  },
  data() {
    return {
      images: [
        "2018_1",
        "2018_2",
        "2018_3",
        "2019_1",
        "2019_2",
        "2019_3",
        "2020_1",
        "2020_2",
      ],
      currentSlide: 0,
      isTransitioning: false,
      slideWidth: 100, // Each slide takes up 100% of the carousel width
    };
  },
  computed: {
    infiniteImages() {
      // Add clones of the first and last images for infinite scrolling
      if (this.images.length > 0) {
        const cloneStart = this.images.slice(0, 1); // First image
        const cloneEnd = this.images.slice(-1); // Last image
        return [...cloneEnd, ...this.images, ...cloneStart];
      }
      return [];
    },
  },
  methods: {
    findImage(image) {
      try {
        return require(`@/assets/images/past/${image}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
    nextSlide() {
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (!this.isTransitioning) {
        this.isTransitioning = true;
        this.currentSlide--;
      }
    },
    handleTransitionEnd() {
      this.isTransitioning = false;

      // Handle infinite loop logic
      if (this.currentSlide === 0) {
        // Jump to the last "real" slide
        this.currentSlide = this.images.length;
      } else if (this.currentSlide === this.images.length + 1) {
        // Jump back to the first "real" slide
        this.currentSlide = 1;
      }
    },
  },
  mounted() {
    // Automatically move the carousel every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
};
</script>

<style scoped>
.background {
  background-color: var(--v-secondary-base) !important;
}
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}
.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  flex: 0 0 100%; /* Each item takes up 100% of the carousel width */
  display: flex;
  justify-content: center;
}
.carousel-control {
  position: absolute;
  top: 50%;
  color: #d6d5d5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}
.carousel-control:hover {
  color: var(--v-primary-base);
  cursor: pointer;
}
.carousel-control.prev {
  left: 10px;
}
.carousel-control.next {
  right: 10px;
}
.flipped {
  transform: scaleX(-1); /* Flip the icon horizontally */
}
</style>