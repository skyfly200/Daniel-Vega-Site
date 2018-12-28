<template>
  <v-app dark>
    <Home v-if="isHome"/>
    <Contact v-else-if="isContact"/>
    <Listen v-else-if="isListen" />
    <Events v-else-if="isEvents" />
    <EventItem v-else-if="isEvent" />
    <Work v-else-if="isWork" />
    <Base v-else/>
    <v-footer app>
      <span>&copy; Daniel Vega {{ copyrightYear }}</span>
    </v-footer>
  </v-app>
</template>
<script>
  import Home from './Home';
  import Contact from './Contact';
  import Events from './Events';
  import Listen from './Listen';
  import Work from './Work';
  import Base from './Base';
  import EventItem from './components/Event';
  export default {
      components: {
        Home,
        Contact,
        Events,
        EventItem,
        Listen,
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
          isListen() {
            const {path} = this.$page;
            return path === "/listen.html";
          },
          isEvents() {
            const {path} = this.$page;
            return path === "/events.html";
          },
          isEvent() {
            const {path} = this.$page;
            return path.startsWith("/events/");
          },
          isWork() {
            const {path} = this.$page;
            return path.startsWith("/works/");
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
