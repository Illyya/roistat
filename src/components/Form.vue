<template>
  <form 
    @click.prevent 
    class="app__add-form add-form" 
    action="#"
  >
    <span 
      @click="hideForm" 
      class="add-form__close"
    >
    &#10006;
    </span>
    <p class="add-form__title">Добавление пользователя</p>
    <div class="add-form__row">
      <label class="add-form__label" for="name">Имя</label>
      <input 
        class="add-form__input" 
        type="text" 
        name="name" 
        id="name"
        v-model.trim="name" 
      />
    </div>
    <div class="add-form__row">
      <label class="add-form__label" for="phone">Телефон</label>
      <input 
        class="add-form__input" 
        type="tel" 
        id="phone" 
        name="phone"
        v-model.trim="phone" 
        @input="onlyNumbers"
      />
    </div>
    <div class="add-form__row">
      <label class="add-form__label" for="chief">Начальник</label>
      <select class="add-form__select" name="chief" id="chief" v-model="select">
        <option value=""></option>
        <option 
          v-for="(select, index) in this.$store.state.tableData"
          :key="index"
          :value="select.name"          
        >
        {{ select.name }}
        </option>
      </select>
    </div>
    <Button 
      class="add-form__btn" 
      :btnMsg="btnMsg"
      @saveData='saveData' 
    />
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
      name: '',
      phone: '',
      select: ''
    };
  },
  methods: {
    hideForm() {
      this.$emit('hideForm')
    },
    saveData() {      
      if(this.name.length > 0 && this.phone.length > 0) {
        if (this.select) {          
          this.$store.state.tableData.forEach((el, key) => {            
            if (el.name == this.select) {
              this.$store.state.tableData.splice(key + 1, 0, {name: this.name, phone: this.phone, child: true});    
              localStorage.setItem("data", JSON.stringify(this.$store.state.tableData));              
            }            
          })
          this.name = '';
          this.phone = '';
        } else {
          this.$store.state.tableData.push({name: this.name, phone: this.phone});
          localStorage.setItem("data", JSON.stringify(this.$store.state.tableData));  
          this.name = '';
          this.phone = '';
        }        
      }          
    },
    onlyNumbers() {
      this.phone = this.phone.replace(/[^0-9+ ]/g, '');
    }
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