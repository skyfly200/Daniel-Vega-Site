<template>
  <div class="nav-layout">
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="page in menuPages"
          :key="page.title"
          :href="page.path">
            <v-list-tile-action>
              <v-icon> {{ page.frontmatter.menuIcon }} </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{ page.title }} </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Daniel Vega</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          v-for="page in menuPages"
          :key="page.title"
          :href="page.path">
            {{ page.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
      computed: {
          menuPages() {
            let pages = this.$site.pages;
            pages = pages.filter(page => !page.frontmatter.hideInMenu);
            return pages;
          }
      },
      data: function() {
        return {
          drawer: false
        };
      }
  };
</script>
