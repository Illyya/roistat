<template>
  <table class="table">
    <tr class="table__row">
      <td class="table__td" @click="sortName">Имя</td>
      <td class="table__td" @click="sortPhone">Телефон</td>
    </tr>    
    <tr 
      class="table__row" 
      :class="{ 'table__row-child': row.child }" 
      v-for="(row, index) in users" 
      :key="index"
    >
      <td class="table__td">{{ row.name }}</td>
      <td class="table__td">{{ row.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    sortName() {
      this.$store.commit('sortName')
    },
    sortPhone() {
      this.$store.commit('sortPhone')
    }
  }  
};
</script>

<style lang='scss'>
.table {
  width: 400px;
  border-collapse: collapse;

  &__tbody {
  }

  &__row {
    
    &:first-of-type {
      
      td {
        cursor: pointer;
      }
    }
  }

  &__row-child {      

    td:first-of-type {
      display: block;
      margin: -1px -1px 0 20px;
    }
  }

  &__td {
    padding: 10px 20px;
    border: 1px solid #919090;
  }
}
</style>