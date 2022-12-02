<template>
  <div class="vehicle-page">
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
            <v-tab href="#single-vin">Single Vin</v-tab>
            <v-tab-item id="single-vin">
              <add-vehicle />
            </v-tab-item>
            <v-tab disabled>Bulk Vin</v-tab>
            <v-tab disabled>Manual Entry</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
    <vehicle-list v-if="vehicles.length >= 1" :vehicles="vehicles" />
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
      return this.$store.state.vehicles;
    },
  },
};
</script>

<style>
</style>