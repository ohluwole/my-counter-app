import { createStore } from 'vuex'

export default createStore({
  state: { counter : 0,
    value : ""
  },

  getters: {
  },
  mutations: {
   increment( state) {
    state.counter++;
  },

   decrement(state) {
    state.counter--;
  },

   reset(state) {
    state.counter = 0;
  },

   setValue(state) {
     if (state.value.length > 0) {
      state.counter = state.value
     } 
   },

   inputValueUpdate(state, payload){
    state.value = payload
   }

  },
  actions: {
  },
  modules: {
  }
})
