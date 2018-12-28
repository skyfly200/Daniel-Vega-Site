<template>
    <div>
        <div class="content">
            <h1>{{ $page.frontmatter.title }}</h1>
            <Content />
        </div>
        <div class="articles">
            <article class="post section" v-for="event in events">
                <h2 class="subtitle is-4">{{ event.title }}</h2>
                <p>{{ event.frontmatter.excerpt }}</p>
                <a :href="event.path">Read More →</a>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        events() {
            return this.$site.pages
                .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
                .sort((a, b) => Date.parse(b.frontmatter.datetime) - Date.parse(a.frontmatter.datetime));
        }
    }
};
</script>
