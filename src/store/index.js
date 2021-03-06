import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [
      {
        name: "Марина",
        phone: "+7 941 123 21 42",
        subordinates: [],
      },
      {
        name: "Петр",
        phone: "+7 941 123 21 42",
        subordinates: [],
      },
      {
        name: "Алексей",
        phone: "+7 941 123 21 42",
        subordinates: [],
      },
      {
        name: "Борис",
        phone: "+7 941 123 21 42",
        subordinates: [],
      },
    ],
    sortingDirection: true,
  },
  getters: {
    users: state => {
      return state.tableData;
    },
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

      function noSpaces(value) {
        return value.replace(/\s+/g, '');
      }

      if (state.sortingDirection) {
        state.tableData.sort((a, b) => noSpaces(a.phone) - noSpaces(b.phone))
      } else {
        state.tableData.sort((a, b) => noSpaces(b.phone) - noSpaces(a.phone))
      }
    },
    addingUser(state, namePhone) {
      state.tableData.push({ name: namePhone.name, phone: namePhone.phone, subordinates: [] });

      localStorage.setItem("data", JSON.stringify(state.tableData));
    },
    addingASubordinate(state, namePhoneBoss) {
      state.tableData.forEach((el) => {

        if (el.name == namePhoneBoss.boss) {
          el.subordinates.push({ name: namePhoneBoss.name, phone: namePhoneBoss.phone });

          localStorage.setItem("data", JSON.stringify(state.tableData));
        }
      })
    }
  }
})