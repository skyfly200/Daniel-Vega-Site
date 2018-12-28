<template>
  <v-card class="pa-4">
    <h1> {{ $page.frontmatter.title }} </h1>
    <audio :src="$page.frontmatter.file" controls>
      Your browser does not support the audio element. Here is a <a :href="$page.frontmatter.file">link to the audio</a> instead.
    </audio>
    <Content />
  </v-card>
</template>
<script>
export default {};
</script>
<style>
</style>
