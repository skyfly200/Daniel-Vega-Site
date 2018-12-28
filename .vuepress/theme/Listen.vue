<template>
    <div>
        <div class="content">
            <h1>{{ $page.frontmatter.title }}</h1>
            <Content />
        </div>
        <div class="articles">
            <article class="work section" v-for="work in works">
                <h2 class="subtitle is-4">{{ work.title }}</h2>
                <p>{{ work.frontmatter.excerpt }}</p>
                <a :href="work.path">Read More →</a>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        works() {
            return this.$site.pages
                .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
                .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
        }
    }
};
</script>
