<template>
  <form @submit.prevent class="app__add-form add-form" action="#">
    <span @click="hideForm" class="add-form__close"> &#10006; </span>
    <p class="add-form__title">Добавление пользователя</p>
    <div class="add-form__row">
      <label class="add-form__label" for="name">Имя</label>
      <input
        @input="firstCapitalLetter"
        v-model.trim="name"
        class="add-form__input"
        type="text"
        name="name"
        id="name"
      />
    </div>
    <div class="add-form__row">
      <label class="add-form__label" for="phone">Телефон</label>
      <input-mask
        v-model="phone"
        mask="+7\ 999 999 99 99"
        maskChar=" "
        id="phone"
        name="phone"
        class="add-form__input"
      ></input-mask>
    </div>
    <div class="add-form__row">
      <label class="add-form__label" for="chief">Начальник</label>
      <select class="add-form__select" name="chief" id="chief" v-model="select">
        <option value=""></option>
        <option v-for="(boss, index) in bosses" :key="index" :value="boss.name">
          {{ boss.name }}
        </option>
      </select>
    </div>
    <Button class="add-form__btn" :btnMsg="btnMsg" @saveData="saveData" />
  </form>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Form",
  components: {
    Button,
  },
  data() {
    return {
      btnMsg: "Сохранить",
      name: "",
      phone: "",
      select: "",
    };
  },
  computed: {
    bosses() {
      return this.$store.getters.users;
    },
  },
  methods: {
    hideForm() {
      this.$emit("hideForm");
    },
    saveData() {
      if (this.name.length > 0 && this.phone.length > 0) {
        if (this.select) {
          this.$store.commit("addingASubordinate", {
            name: this.name,
            phone: this.phone,
            boss: this.select,
          });
          this.name = "";
          this.phone = "";
        } else {
          this.$store.commit("addingUser", {
            name: this.name,
            phone: this.phone,
          });
          this.name = "";
          this.phone = "";
        }
      }
    },
    firstCapitalLetter() {
      if (!this.name) return;

      this.name = this.name
        .replace(/\s+/g, " ")
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" ");
    },
  },
};
</script>

<style lang='scss'>
.add-form {
  position: relative;
  padding: 10px 20px 30px 20px;
  border: 1px solid #919090;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  &__title {
    margin-bottom: 30px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__label {
    width: 40%;
  }

  &__input {
  }

  &__input,
  &__select {
    width: 300px;
    padding: 5px 10px;
    border: 1px solid #919090;
  }

  &__select {
  }

  &__btn {
  }
}
</style>