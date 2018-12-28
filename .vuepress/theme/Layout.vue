<template>
  <v-app dark>
    <Home v-if="isHome"/>
    <Contact v-else-if="isContact"/>
    <Listen v-else-if="isListen" />
    <WorkPage v-else-if="isWork" />
    <Events v-else-if="isEvents" />
    <EventPage v-else-if="isEvent" />
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
  import EventPage from './EventPage';
  import WorkPage from './WorkPage';
  import Base from './Base';
  export default {
      components: {
        Home,
        Contact,
        Events,
        EventPage,
        Listen,
        WorkPage,
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
            return path === "/works/";
          },
          isEvents() {
            const {path} = this.$page;
            return path === "/events/";
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
