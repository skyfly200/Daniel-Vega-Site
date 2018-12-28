<template>
  <v-card class="pa-4">
    <h1> {{ $page.frontmatter.title }} </h1>
    <a :href="$page.frontmatter.file">a link to the file</a>
    <Content />
  </v-card>
</template>
<script>
export default {};
</script>
<style>
</style>
