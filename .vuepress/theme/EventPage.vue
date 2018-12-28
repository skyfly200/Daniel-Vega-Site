<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <EventItem :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" />
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
  }
};
</script>
<style>
</style>
