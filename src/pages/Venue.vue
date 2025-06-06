<template>
  <v-app>
    <Layout>
      <v-main>
        <Header title="Venue" />
        <div class="max-center">
          <div class="ma-3">
            <div class="sponsor-header text-center">
              The Ohio Union
            </div>
            <v-row justify="space-around" class="max-center my-5">
              <v-col cols="12" md="6">
                <img :src="require(`@/assets/images/past/2019_4.webp`)" width="100%" />
              </v-col>
              <v-col cols="12" md="6">
                <div class="pl-5">
                  <div class="font-weight-light">
                    The Ohio Union is a 318,000 square foot facility built on a
                    foundation of rich history and Buckeye spirit. Located on
                    The Ohio State University’s campus, the building has 34
                    unique meeting and event spaces and is near many on-campus
                    and off-campus dining and entertainment options.
                  </div>
                  <div class="py-5 font-weight-light">
                    During the conference, breakfast, lunch, and snacks will be
                    provided. However, if you want other options, there are
                    several dining locations within the Ohio Union including the
                    Union Market, a fast-casual option offering grab-and-go food
                    choices, and Espress-OH, a coffee shop serving specialty
                    drinks, breakfast items, and gelato.
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="sponsor-header text-center">
              Location
            </div>
            <v-row class="max-center my-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4731073509515!2d-83.01086034837715!3d39.997878588827895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388eb8c5837241%3A0x29e24cc55fefd423!2sOhio%20Union!5e0!3m2!1sen!2sus!4v1665514617425!5m2!1sen!2sus"
                width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-row>
            <div class="sponsor-header text-center">
              Floor Plan
            </div>
            <v-row align="center" justify="center" class="mt-5">
              <img :src="require(`@/assets/images/rooms/greathall3.png`)" width="60%" />
              <img :src="require(`@/assets/images/rooms/secondfloor.png`)" width="60%" />
              <img :src="require(`@/assets/images/rooms/thirdfloor.png`)" width="60%" />
            </v-row>
            <div class="sponsor-header text-center mt-5">
              Parking
            </div>
            <v-row class="max-center my-5">
              <v-col cols="12" md="6">
                <div class="py-5 font-weight-light">
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
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1640.443805156314!2d-83.00890542512437!3d39.997750204153256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45c9ae82bfe978ce!2sOhio%20Union%20South%20Garage!5e0!3m2!1sen!2sus!4v1665515987150!5m2!1sen!2sus"
                  width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </v-col>
            </v-row>
            <div class="sponsor-header text-center mt-5">
              Nearby Hotels
            </div>
            <v-row v-for="(hotel, index) in hotels" :key="index" justify="center" class="max-center my-5">
              <v-col cols="12" md="6">
                <div class="py-5 font-weight-light">
                  <div class="font-weight-bold pb-5">{{ hotel.name }}</div>
                  <div v-html="hotel.description"></div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <iframe :src="hotel.mapsUrl" width="100%" height="450" style="border: 0" allowfullscreen=""
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-main>
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
          description: `
            Located 1.5 miles from the Ohio Union, this hotel is a great and safe walk through Ohio State's campus to the Ohio Union. 
            Also, it is conveniently located by The Ohio State University. Just minutes to Downtown Columbus and other Columbus attractions 
            such as the Nationwide Arena District, Short North, Huntington Park, COSI, and German Village.<br/><br/>
            Get the QA or the Highway group rate for <strong>149.00 USD per night</strong><br/>
            <strong>Last Day to Book:</strong> Monday, May 26, 2025.<br/>
            <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1743690111247&key=GRP&guestreslink2=true&app=resvlink" target="_blank">
              Click here to get the group rate
            </a>
            `,
          mapsUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.8746108070845!2d-83.02856388461704!3d39.98890737941711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ef032010203%3A0x73b8944335921fbd!2sSpringHill%20Suites%20by%20Marriott%20Columbus%20OSU!5e0!3m2!1sen!2sus!4v1665517226610!5m2!1sen!2sus",
        },
        {
          name: "The Blackwell Inn",
          description:
            "Located 0.8 miles from the Ohio Union, this hotel is a great and safe walk through Ohio State's campus to the Ohio Union and right accross the street from the Ohio Stadium (the horseshoe). The Blackwell Inn and Pfahl Conference Center is located in University District. The area's natural beauty can be seen at Chadwick Arboretum & Learning Gardens, while Billy Ireland Cartoon Library and Museum and Wexner Center for the Arts are cultural highlights.",
          mapsUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.165269855282!2d-83.01892018391231!3d40.00475578851412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e97af90fd3d%3A0xe43dbd69e093c2c!2sThe%20Blackwell%20Inn%20%26%20Pfahl%20Conference%20Center!5e0!3m2!1sen!2sus!4v1665517681174!5m2!1sen!2sus",
        },
        {
          name: "Hilton Garden Inn",
          description:
            "Located 2.8 miles from the Ohio Union, this hotel has shopping and restaurants close by along with sporting and entertainment venues. Suburbs of Upper Arlington, Grandview and Clintonville are located within two miles of the hotel.",
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

.sponsor-header {
  background: var(--v-primary-base);
  /* Adjust color as needed */
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border-radius: 6px 6px 0 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: left;
}
</style>
