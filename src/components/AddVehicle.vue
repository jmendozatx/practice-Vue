<template>
  <v-card flat class="pa-10">
    <div class="description mb-4 text-center">
      <p>
        Enter your vin to search for your vehicle.<br />
        Your vehicle will be automatically added to the list of Active Vehicles
        below.
      </p>
    </div>

    <div class="vin-input-container">
      <v-text-field
        prepend-icon="mdi-car-outline"
        label="Enter VIN"
        v-model="userVin"
        outlined
        max-width="400px"
      />
      <v-btn
        x-large
        :loading="loading"
        :disabled="loading"
        class="ml-4"
        color="info"
        @click="search"
        >Search
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>
    </div>

    <a
      href="https://vingenerator.org/"
      target="_blank"
      class="grey--text text--lighten-1"
      >VIN Generator
    </a>
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
          this.addVehicle();
        });
    },

    addVehicle() {
      this.$store.commit("addVehicle", this.fullVehicle);
    },
  },
};
</script>

<style lang="scss">
.vin-input-container {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}
</style>
