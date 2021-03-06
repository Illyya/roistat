<template>
  <button
    @click="
      showForm();
      saveData();
    "
    class="btn"
  >
    {{ btnMsg }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnMsg: String,
  },
  methods: {
    showForm() {
      this.$emit("showForm");
    },
    saveData() {
      this.$emit("saveData");
    },
  },
};
</script>

<style lang='scss'>
.btn {
  padding: 7px 30px;
  border: 1px solid #919090;
  border-radius: 30px;
  transition: 0.2s ease-out;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
}
</style>