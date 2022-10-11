<template>
  <v-app>
    <Layout>
      <v-content>
        <Header title="Venue" />
        <div class="max-center">
          <div class="ma-3">
            <v-row align="center" justify="center"
              ><h3 class="text-h5 font-weight-black primary--text py-5">
                THE OHIO UNION
              </h3>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="space-around" class="max-center my-5">
              <v-col sm="12" md="6">
                <img
                  :src="require(`@/assets/images/past/2019_4.webp`)"
                  width="100%"
                />
              </v-col>
              <v-col sm="12" md="6">
                <div class="pl-5">
                  <h3 class="font-weight-light">
                    Located at 1739 N High St, Columbus, OH 43210, The Ohio
                    Union is a 318,000 square foot facility built on a
                    foundation of rich history and Buckeye spirit. Located on
                    The Ohio State University’s campus, the building has 34
                    unique meeting and event spaces and is near many on-campus
                    and off-campus dining and entertainment options.
                  </h3>
                  <h3 class="py-5 font-weight-light">
                    During the conference, breakfast, lunch, and snacks will be
                    provided. However, if you want other options, there are
                    several dining locations within the Ohio Union including the
                    Union Market, a fast-casual option offering grab-and-go food
                    choices, and Espress-OH, a coffee shop serving specialty
                    drinks, breakfast items, and gelato.
                  </h3>
                </div>
              </v-col>
            </v-row>
            <v-row align="center" justify="center"
              ><h3 class="text-h5 font-weight-black primary--text py-5">
                LOCATION
              </h3>
            </v-row>
            <v-divider></v-divider>
            <v-row class="max-center my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4731073509515!2d-83.01086034837715!3d39.997878588827895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388eb8c5837241%3A0x29e24cc55fefd423!2sOhio%20Union!5e0!3m2!1sen!2sus!4v1665514617425!5m2!1sen!2sus"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-row>
            <v-row align="center" justify="center"
              ><h3 class="text-h5 font-weight-black primary--text py-5">
                PARKING
              </h3>
            </v-row>
            <v-divider></v-divider>
            <v-row class="max-center my-5">
              <v-col sm="12" md="6">
                <h3 class="py-5 font-weight-light">
                  <div>
                    ​Upon arrival to the SOUTH Ohio Union parking garage (1759
                    North High Street), you must pull a ticket from the gate
                    machine to enter the parking garage.
                  </div>
                  <div class="py-5">
                    Bring that ticket with you to the conference registration
                    desk to receive your barcoded validation sticker.
                  </div>
                  <div>
                    In order to exit the garage, you must insert your entry
                    ticket with that barcoded validation sticker adhered to the
                    ticket.
                  </div>
                </h3>
              </v-col>
              <v-col sm="12" md="6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1640.443805156314!2d-83.00890542512437!3d39.997750204153256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45c9ae82bfe978ce!2sOhio%20Union%20South%20Garage!5e0!3m2!1sen!2sus!4v1665515987150!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-col>
            </v-row>
            <v-row align="center" justify="center"
              ><h3 class="text-h5 font-weight-black primary--text py-5">
                FLOOR PLAN
              </h3>
            </v-row>
            <v-divider></v-divider>
            <v-row align="center" justify="center" class="max-center my-5">
              <img
                :src="require(`@/assets/images/rooms/venue.webp`)"
                width="80%"
              />
            </v-row>
            <v-row align="center" justify="center"
              ><h3 class="text-h5 font-weight-black primary--text py-5">
                NEARBY HOTELS
              </h3>
            </v-row>
            <v-divider></v-divider>
            <v-row
              v-for="(hotel, index) in hotels"
              :key="index"
              justify="center"
              class="max-center my-5"
            >
              <v-col sm="12" md="6">
                <h3 class="py-5 font-weight-light">
                  <div>
                    {{ hotel.name }}
                  </div>
                </h3>
              </v-col>
              <v-col sm="12" md="6">
                <iframe
                  :src="hotel.mapsUrl"
                  width="100%"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      hotels: [
        {
          name: "SpringHill Suites by Marriott",
          mapsUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.8746108070845!2d-83.02856388461704!3d39.98890737941711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ef032010203%3A0x73b8944335921fbd!2sSpringHill%20Suites%20by%20Marriott%20Columbus%20OSU!5e0!3m2!1sen!2sus!4v1665517226610!5m2!1sen!2sus",
        },
        {
          name: "The Blackwell Inn",
          mapsUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.165269855282!2d-83.01892018391231!3d40.00475578851412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e97af90fd3d%3A0xe43dbd69e093c2c!2sThe%20Blackwell%20Inn%20%26%20Pfahl%20Conference%20Center!5e0!3m2!1sen!2sus!4v1665517681174!5m2!1sen!2sus",
        },
        {
          name: "Hilton Garden Inn",
          mapsUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.18665243653!2d-83.02954926427311!3d40.02661192135342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388c2560a8c93f%3A0x964a5d09816f59a8!2sHilton%20Garden%20Inn%20Columbus-University%20Area!5e0!3m2!1sen!2sus!4v1665517800813!5m2!1sen!2sus",
        },
      ],
    };
  },
  methods: {
    findImage: (speaker) => {
      try {
        return require(`@/assets/images/past/${speaker.toLowerCase()}.webp`);
      } catch (error) {
        return require("@/assets/images/generic-profile.png");
      }
    },
  },
  metaInfo() {
    return {
      title: "Venue",
    };
  },
};
</script>

<style>
.max-center {
  max-width: 1200px;
  margin: 0 auto;
  float: none;
}
</style>