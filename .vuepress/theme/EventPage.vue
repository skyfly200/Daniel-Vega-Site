<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4">
          <Event />
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Event from "./components/Event"
export default {
  components: {
    Nav,
    EventItem
  }
};
</script>
<style>
</style>
