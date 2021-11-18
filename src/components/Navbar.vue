<template>
  <div class="navbar container">
      <a href="/" class="logo">Vue Kanban</a>
      <div class="nav-links">
          <router-link v-for="(link,index) in links" :key="index" :to="link.path" :class="{active : link.path == $route.path }">{{ link.name }}</router-link>
          <AddBoard />
      </div>
  </div>
</template>

<script>

import AddBoard from "@/components/AddBoard"

export default {
  name: "Navbar",
  components : {
      AddBoard
  },
  data() {
    return {
        links: [
            {
                name : 'Home',
                path : '/'
            },
            {
                name : 'Facts',
                path : '/facts/20'
            },
            {
                name : 'About',
                path : '/about'
            },
        ]
    };
  },
};
</script>

<style scoped>

/* Navbar */ 

.navbar{
    height: 70px;
    background: #080808;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .nav-links a {
    font-size: .9em;
    margin-left: .75em;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    line-height: 1.5em;
    color: #fff;
    text-decoration: none;
    transition: all 0.5s ease-out;
}

.navbar .nav-links a:hover, .nav-links a.active {
    border-bottom: 1px solid var(--primary-Clr);
}

.nav-links .btn{
    margin-left: .75em;
}

.navbar .logo{
    font-size: 1.1em;
    font-weight: bold;
    color: var(--primary-Clr);
    text-decoration: none;
}

.btn i {
    margin-right: .5em;
}

</style>
