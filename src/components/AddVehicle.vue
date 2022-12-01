<template>
  <!-- TODO: TypeScript -->
  <!-- TODO: Jest, Vitest -->
  <!-- TODO: TypeScript -->
  <!-- TODO: Ability to add more vin's -->
  <!-- TODO: When the Save button is clicked, the information for the VIN should be saved to the local state and
persisted.
 -->
  <!-- TODO: When the Cancel button is clicked, all edits should be discarded and things should be returned to their
previous saved state. -->

  <div class="add-vehicle">
    <v-row class="text-center">
      <h2 class="text-h4 blue--text text--darken-2 mb-4">Add Vehicle(s)</h2>
    </v-row>
    <v-row>
      <v-col>
        <v-tabs grow tile>
          <v-tab href="#one">Single Vin</v-tab>
          <v-tab-item id="one">
            <v-card flat class="pa-4">
              <p class="mb-4">
                Enter your vin to search for your vehicle <br />Sample
                3AKJHHDR3KSKX6689
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
                    :loading="loading5"
                    :disabled="loading5"
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
            </v-card>
          </v-tab-item>
          <v-tab disabled>Bulk Vin</v-tab>
          <v-tab disabled>Manual Entry</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AddVehicle",

  data: () => ({
    loader: null,
    loading5: false,
    apiUrl:
      "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3AKJHHDR3KSKX6689?format=json",
    userVin: null,
  }),

  methods: {
    // function to make api call
    // make api call
    // recieve data
    // transform data
    // display data
    search() {
      this.loading5 = true;
      setTimeout(() => (this.loading5 = false), 3000);
    },
  },
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
