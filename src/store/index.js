import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles:[
        {
           vin:"4A4AP3AUXDE006568",
           year:"2013",
           make:"MITSUBISHI",
           model:"Outlander Sport",
           bodyClassId: "7"
        },
        {
           vin:"1FTFW1CF0CKD99953",
           year:"2012",
           make:"FORD",
           model:"F-150",
           bodyClassId:"60"
        }
     ]
  },
  mutations: {
    addVehicle (state, newVehicle) {
        state.vehicles.unshift({
            vin: newVehicle.vin,
            year:newVehicle.year,
            make:newVehicle.make,
            model:newVehicle.model,
            bodyClassId: newVehicle.bodyClassId
        })
    },

    deleteVehicle (state, vehicleVin) {
        let removedEl = state.vehicles.findIndex((x) => x.vin == vehicleVin);
        state.vehicles.splice(removedEl, 1);
    },

    updateVehicle (state, vehicle) {
        let vin = vehicle.vin;
        let findEl = state.vehicles.find((x) => x.vin == vin);
        findEl.vin =  vehicle.vin;
        findEl.year = vehicle.year;
        findEl.make = vehicle.make;
        findEl.model = vehicle.model;
        findEl.bodyClassId = vehicle.bodyClassId;

    },
  },
  actions: {

  },
  modules: {
  }
})









