<template>
  <div class="vehicle-list">
    <h3 class="text-h5 mb-4">Active vehicles</h3>
    <v-card
      v-for="vehicle in vehicles"
      :key="vehicle.vin"
      class="pa-4 mb-4 d-flex justify-content align-center"
    >
      <v-img
        contain
        class="mr-4"
        max-width="150"
        :src="require(`../assets/BodyClassImages/${vehicle.bodyClassId}.png`)"
      />
      <div class="vehicle-details-container">
        <strong class="vehicle-vin">{{ vehicle.vin }}</strong>
        <div>
          {{ vehicle.year }}
          {{ vehicle.make }}
          {{ vehicle.model }}
        </div>
      </div>
      <div class="vehicle-actions ml-auto">
        <v-btn @click="openDeleteModal(vehicle)" color="error" class="mr-4">
          <v-icon> mdi-trash-can </v-icon>
        </v-btn>
        <v-dialog v-model="deleteModal" width="500">
          <v-card>
            <v-card-title class="text-h5"> Are you sure? </v-card-title>

            <v-card-text>
              This will delete the {{ selectedVehicle.year }}
              {{ selectedVehicle.make }}
              {{ selectedVehicle.model }}</v-card-text
            >

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="ma-1"
                color="grey"
                text
                @click="deleteModal = false"
              >
                Cancel
              </v-btn>
              <v-btn color="error" text @click="deleteVehicle(vehicle)">
                Confirm Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn @click="editVehicle(vehicle)" color="success">
          <v-icon left> mdi-pencil </v-icon>
          Edit
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "VehicleList",

  data: () => ({
    deleteModal: false,
    selectedVehicle: {},
  }),

  components: {},

  props: {
    vehicles: {
      type: Array,
      default: null,
    },
  },

  methods: {
    openDeleteModal(vehicle) {
      this.selectedVehicle = vehicle;
      this.deleteModal = true;
    },

    deleteVehicle() {
      this.deleteModal = false;
      alert(
        `${this.selectedVehicle.year} ${this.selectedVehicle.make} ${this.selectedVehicle.model}`
      );
    },

    editVehicle(vehicle) {
      alert(`${vehicle.year} ${vehicle.make} ${vehicle.model} `);
    },
  },
};
</script>

<style lang="scss">
.vehicle-list {
  .vehicle-details-container {
    text-transform: uppercase;
  }
}
</style>