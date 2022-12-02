<template>
  <v-card flat class="pa-4">
    <p class="mb-4">
      Enter your vin to search for your vehicle <br />Samples 
      <ul>
        <li>4A4AP3AUXDE006568</li>
      <li>3AKJHHDR3KSKX6689</li>
      <li>1FTFW1CF0CKD99953</li></ul>
    </p>
    <v-row>
      <v-col>
        <v-text-field
          prepend-icon="mdi-car-outline"
          label="Enter VIN"
          v-model="userVin"
          outlined
        />
      </v-col>
      <v-col
        ><v-btn
          x-large
          :loading="loading"
          :disabled="loading"
          color="info"
          @click="search"
          >Search
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template></v-btn
        ></v-col
      >
    </v-row>

    <div v-if="fullVehicle.vin">
      <h4>Vehicle:</h4>
      <p class="vehicle-results">
        <v-img
        contain
          max-width="250"
          :src="
            require(`../assets/BodyClassImages/${fullVehicle.bodyClassId}.png`)
          "
        />
        {{ fullVehicle.year }}
        {{ fullVehicle.make }}
        {{ fullVehicle.model }}
      </p>
    </div>
    <div class="error" v-show="error">{{ this.errorMsg }}</div>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "AddVehicle",

  data: () => ({
    loading: false,
    fullVehicle: {
      vin: "",
      year: "",
      make: "",
      model: "",
      bodyClassId: "",
    },
    baseApiUrl: "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/",
    userVin: null,
    error: null,
    errorMsg: "",
  }),

  methods: {
    // display data
    search() {
      this.loading = true;
      this.error = null;
      this.errorMsg = "";

      axios
        .get(`${this.baseApiUrl}${this.userVin}?format=json`)
        .then((response) => {
          let vehicleResults = response.data.Results;

          this.fullVehicle.year = vehicleResults.find(
            (x) => x.Variable === "Model Year"
          ).Value;

          this.fullVehicle.make = vehicleResults.find(
            (x) => x.Variable === "Make"
          ).Value;

          this.fullVehicle.model = vehicleResults.find(
            (x) => x.Variable === "Model"
          ).Value;

          this.fullVehicle.bodyClassId = vehicleResults.find(
            (x) => x.Variable === "Body Class"
          ).ValueId;

          this.fullVehicle.vin = this.userVin;
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        })
        .finally(() => {
          this.userVin = "";
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
</style>
