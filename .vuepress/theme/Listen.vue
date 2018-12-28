<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
        <v-layout class="pa-2" align-center justify-space-around row fill-height>
          <v-flex v-for="w in works" :key="w.title" xs12 md4>
            <Work class="work section" v-bind="w" />
          </v-flex>
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
