<template>
  <div class="vehicle-page">
    <!-- TODO: TypeScript -->
    <!-- TODO: Jest, Vitest -->
    <div class="add-vehicle mb-4">
      <v-row class="text-center">
        <h2 class="text-h4 blue--text text--darken-2 mb-4">Add Vehicle(s)</h2>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs grow tile>
            <v-tab href="#single-vin">Single Vin</v-tab>
            <v-tab-item id="single-vin">
              <AddVehicle />
            </v-tab-item>
            <v-tab disabled>Bulk Vin</v-tab>
            <v-tab disabled>Manual Entry</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
    <VehicleList :vehicles="vehicles" />
  </div>
</template>

<script>
import AddVehicle from "../components/AddVehicle.vue";
import VehicleList from "../components/VehicleList.vue";
export default {
  name: "VehiclePage",

  components: {
    AddVehicle,
    VehicleList,
  },

  data: () => ({}),

  computed: {
    vehicles() {
      return this.$store.getters.vehicleList;
    },
  },
};
</script>