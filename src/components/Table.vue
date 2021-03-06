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
    <tr class="table__row" v-for="(user, index) in users" :key="index">
      <td class="table__td table__td_parent">{{ user.name }}</td>
      <td class="table__td table__td_parent">{{ user.phone }}</td>
      <td>
        <table class="table">
          <tr
            v-for="(subordinate, index) in user.subordinates"
            :key="index"
            class="table__row-subordinate"
          >
            <td class="table__td">{{ subordinate.name }}</td>
            <td class="table__td">{{ subordinate.phone }}</td>
          </tr>
        </table>
      </td>
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
    display: flex;
    flex-wrap: wrap;

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

  &__row-subordinate {
    display: flex;

    td:first-of-type {
      flex: 0.88;
      margin: 0 0 0 20px;
    }
  }

  &__td {
    flex: 1;
    padding: 10px 20px;
    border: 1px solid #919090;

    &_parent {
    }
  }
}

.arrow {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%) rotate(180deg);
  transition: 0.2s ease-out;
}

.rotateArrow {
  transform: translateY(-50%) rotate(360deg);
}
</style>