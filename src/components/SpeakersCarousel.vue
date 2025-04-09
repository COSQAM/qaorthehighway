<template>
  <v-container class="my-5">
    <v-row align="center" justify="center" class="my-5">
      <h3 class="text-h5 font-weight-black">SESSIONS</h3>
    </v-row>
    <div class="carousel-container mb-5">
      <div class="carousel-wrapper py-5">
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
            v-for="(speaker, index) in infiniteSpeakers"
            :key="index"
          >
            <v-card class="speaker-card" hover link :href="speaker.path">
              <v-row align="center" class="ml-5 my-5">
                <v-avatar size="80">
                  <img
                    :src="findImage(speaker.speaker)"
                    :alt="`${speaker.speaker} Photo`"
                  />
                </v-avatar>
                <div class="pl-3">
                  <div class="speaker-name headline font-weight-bold">{{ speaker.speaker }}</div>
                  <div class="speaker-bio text-subtitle-1">{{ speaker.shortbio }}</div>
                </div>
              </v-row>
              <v-row class="ma-0">
                <v-col cols="12" class="text-center px-5 pb-5">
                  <div class="speaker-title headline font-weight-bold">
                    {{ speaker.title }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>
      </div>
      <button class="carousel-control prev" @click="prevSlide">‹</button>
      <button class="carousel-control next" @click="nextSlide">›</button>
    </div>
    <Break class="color" />
  </v-container>
</template>

<script>
import Break from "@/components/icons/Break";

export default {
  components: {
    Break,
  },
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 3, // Start at the first "real" slide (after the clones)
      isTransitioning: false,
      slideWidth: 33.33, // Percentage width of each slide (100% / 3 speakers = 33.33%)
    };
  },
  computed: {
    infiniteSpeakers() {
      // Add clones of the first and last 3 items for infinite scrolling
      if (this.speakers.length > 0) {
        const cloneStart = this.speakers.slice(0, 3); // First 3 speakers
        const cloneEnd = this.speakers.slice(-3); // Last 3 speakers
        return [...cloneEnd, ...this.speakers, ...cloneStart];
      }
      return [];
    },
  },
  methods: {
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
        this.currentSlide = this.speakers.length;
      } else if (this.currentSlide === this.speakers.length + 3) {
        // Jump back to the first "real" slide
        this.currentSlide = 3;
      }
    },
    findImage: function(speaker) {
      try {
        return require(`@/assets/images/speakers/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
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
.color {
  color: var(--v-secondary-base);
  bottom: none;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
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
  flex: 0 0 33.33%; /* Each item takes up 33.33% of the carousel width */
  display: flex;
  justify-content: center;
}

.speaker-card {
  text-align: left;
  width: 350px;
}

.speaker-photo {
  width: 50%;
  height: auto;
  border-radius: 50%;
}

.speaker-name {
  margin: 0;
  width: 200px;
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Break long words if necessary */
  hyphens: auto; /* Hyphenate long words */
}

.speaker-bio {
  color: #9e9e9e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Truncate the bio to a single line */
  max-width: 220px; /* Adjust width to control truncation */
}

.speaker-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>
