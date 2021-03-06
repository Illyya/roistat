<template>
  <div class="added-users">
    <Button @showForm="showForm" class="added-users__btn" :btnMsg="btnMsg" />
    <Table class="added-users__table" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import Table from "@/components/Table";

export default {
  name: "AddedUsers",
  components: {
    Button,
    Table,
  },
  data() {
    return {
      btnMsg: "Добавить",
    };
  },
  methods: {
    showForm() {
      this.$emit("showForm");
    },
  },
};
</script>

<style lang='scss'>
.added-users {
  display: flex;
  flex-direction: column;

  &__btn {
    align-self: flex-end;
    margin-bottom: 30px;
  }

  &__table {
  }
}
</style>