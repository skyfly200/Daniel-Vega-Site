<template>
  <div class="events-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
        <v-layout class="pa-2" align-center justify-space-around row fill-height>
          <v-flex v-for="p in posts" :key="p.title" xs12 md4>
            <Post class="event section" v-bind="p" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Post from "./components/Post"
export default {
  components: {
    Nav,
    Post
  },
  computed: {
      posts() {
        return this.$site.pages
          .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
          .sort((a, b) => Date.parse(b.frontmatter.datetime) - Date.parse(a.frontmatter.datetime));
      }
  }
};
</script>
