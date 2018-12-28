<template>
  <v-card class="pa-4">
    <a :href="path">
      <h1> {{ title }} </h1>
    </a>
    <slot></slot>
  </v-card>
</template>
<script>
export default {
  props: ["frontmatter", "title", "path"]
};
</script>
<style>
</style>
