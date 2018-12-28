<template>
  <v-card class="pa-4">
    <h1> {{ $page.frontmatter.title }} </h1>
    <video width="320" height="240" controls :src="$page.frontmatter.file">
      Your browser does not support the video tag.
      <a :href="$page.frontmatter.file">Here is a link to the file.</a>
    </video>
    <Content />
  </v-card>
</template>
<script>
export default {};
</script>
<style>
</style>
