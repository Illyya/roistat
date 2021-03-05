<template>
  <table class="table">
    <tr class="table__row">
      <td class="table__td" @click="sortName">
        Имя
        <div :class="{ rotateArrow: nameArrow }" class="arrow">
          &UpTeeArrow;
        </div>
      </td>
      <td class="table__td" @click="sortPhone">
        Телефон
        <div :class="{ rotateArrow: phoneArrow }" class="arrow">
          &UpTeeArrow;
        </div>
      </td>
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
  data() {
    return {
      nameArrow: null,
      phoneArrow: null,
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    sortName() {
      this.$store.commit("sortName");
      this.nameArrow = !this.nameArrow;
    },
    sortPhone() {
      this.$store.commit("sortPhone");
      this.phoneArrow = !this.phoneArrow;
    },
  },
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
        position: relative;
        user-select: none;
        cursor: pointer;
        transition: 0.2s ease-out;

        &:hover {
          background-color: rgb(240, 240, 240);
        }
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

.arrow {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%) rotate(180deg);
}

.rotateArrow {
  transform: translateY(-50%) rotate(360deg);
}
</style>