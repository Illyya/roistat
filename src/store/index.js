import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [
      { name: "Марина", phone: "+7 941 123 21 42", isParent: true },
      { name: "Петр", phone: "+7 941 123 21 42", isParent: true },
      { name: "Алексей", phone: "+7 941 123 21 42", isParent: true },
      { name: "Борис", phone: "+7 941 123 21 42", isParent: true },
    ],
    sortingDirection: true,
  },
  getters: {
    users: state => {
      return state.tableData;
    }
  },
  mutations: {
    loadingFromLocStor(state) {
      state.tableData = JSON.parse(localStorage.getItem("data"));
    },
    sortName(state) {      
      state.sortingDirection = !state.sortingDirection;
      if (state.sortingDirection) {
        state.tableData.sort(function (a, b) {
          const nameA = a.name.toLowerCase(), 
                nameB = b.name.toLowerCase()
          if (nameA < nameB) 
            return -1
          if (nameA > nameB)
            return 1
          return 0 
        })  
      } else {
        state.tableData.sort(function (a, b) {
          const nameA = a.name.toLowerCase(), 
                nameB = b.name.toLowerCase()
          if (nameA < nameB) 
            return 1
          if (nameA > nameB)
            return -1
          return 0 
        })
      }      
    },
    sortPhone(state) {
      state.sortingDirection = !state.sortingDirection;      
      function noSpaces (value) {
        return value.replace(/\s+/g, '');
      }      
      if (state.sortingDirection) {
        state.tableData.sort(function (a, b) {          
          return noSpaces(a.phone) - noSpaces(b.phone);
        })
      } else {
        state.tableData.sort(function (a, b) {          
          return noSpaces(b.phone) - noSpaces(a.phone);
        })
      }
    }
  }
})