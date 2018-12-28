<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <h1>{{ $page.frontmatter.title }}</h1>
          <Content />
          <Work class="work section" v-for="work in works" :key="event.title"  />
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Work from "./components/Work"
export default {
  components: {
    Nav,
    Work
  },
  computed: {
      works() {
          return this.$site.pages
              .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
              .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
      }
  }
};
</script>
