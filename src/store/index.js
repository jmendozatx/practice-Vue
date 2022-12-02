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

  },
  actions: {

  },
  modules: {
  }
})









