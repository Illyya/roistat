<template>
  <div id="app" class="app">
    <AddedUsers 
      class="app__added-users" 
      @showForm='showForm' 
    />
    <transition name="fade">
      <Form 
        class="app__add-form" 
        @hideForm="hideForm()" 
        v-show="visibleForm" 
      />
    </transition>
  </div>
</template>

<script>
import AddedUsers from "@/components/AddedUsers";
import Form from "@/components/Form";

export default {
  name: "App",
  components: {
    AddedUsers,
    Form,
  },
  data() {
    return {
      visibleForm: false
    }
  },
  methods: {
    showForm() {
      this.visibleForm = true; 
    },
    hideForm() {
      this.visibleForm = false;
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("data"))) {
      this.$store.commit('loadingFromLocStor')
    }    
  }
};
</script>

<style lang="scss">
////////////////////////////////////////////resets
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

ul li {
  list-style: none;
}
/////////////////////////////////////////////////

body {
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  min-height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__added-users {
  }

  &__add-form {
  }
}

.fade-enter-active, .fade-leave-active {
  transition: .5s;
  transform: scale(1);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
