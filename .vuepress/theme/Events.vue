<template>
  <div class="events-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <h1>{{ $page.frontmatter.title }}</h1>
          <Content />
          <EventItem class="event section" v-for="event in events" :key="event.title" />
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import EventItem from "./components/Event"
export default {
  components: {
    Nav,
    EventItem
  },
  computed: {
      events() {
          return this.$site.pages
              .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
              .sort((a, b) => Date.parse(b.frontmatter.datetime) - Date.parse(a.frontmatter.datetime));
      }
  }
};
</script>
