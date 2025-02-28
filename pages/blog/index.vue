<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").all()
);
</script>

<template>
  <UContainer>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique
    inventore alias sapiente pariatur et nisi. Tempora veritatis minus facilis?
    <UBlogList>
      <UBlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :authors="post.auteurs"
        :image="post.image"
        :date="formatDate(post.date)"
        :badge="post.badge"
   />
    
    </UBlogList>
  </UContainer>
</template>

<style scoped></style>
