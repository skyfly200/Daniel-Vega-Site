<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <Work :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" />
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
  }
};
</script>
<style>
</style>
