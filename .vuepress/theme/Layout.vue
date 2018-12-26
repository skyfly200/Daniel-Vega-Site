<template>
  <v-app dark>
    <Home v-if="isHome"/>
    <Contact v-if="isContact"/>
    <Base v-if="!isHome && !isContact" />
    <v-footer app>
      <span>&copy; Daniel Vega {{ copyrightYear }}</span>
    </v-footer>
  </v-app>
</template>
<script>
  import Home from './Home';
  import Contact from './Contact';
  import Base from './Base';
  export default {
      components: {
        Home,
        Contact,
        Base
      },
      computed: {
          isHome() {
            const {path} = this.$page;
            return path === "/";
          },
          isContact() {
            const {path} = this.$page;
            return path === "/contact.html";
          },
          copyrightYear() {
            return new Date().getFullYear();
          }
      }
  };
</script>
<style>
  .container {
    padding: 0
  }
  footer span {
    margin: 0 auto;
  }
</style>
