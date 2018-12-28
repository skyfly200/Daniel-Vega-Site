<template>
  <v-card class="pa-4">
    <a :href="path">
      <h1> {{ title }} </h1>
    </a>
    <Audio v-if="frontmatter.workType === 'audio'" :frontmatter="frontmatter"/>
    <Video v-if="frontmatter.workType === 'video'" :frontmatter="frontmatter"/>
  </v-card>
</template>
<script>
import Audio from './Audio';
import Video from './Video';
export default {
  props: ["frontmatter", "path", "title"],
  components: {
    Audio,
    Video
  },
};
</script>
<style>
</style>
