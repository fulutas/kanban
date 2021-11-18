<template>
  <div id="app">
    <Navbar />
    <div class="container main">

    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
