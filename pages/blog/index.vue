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
        v-for="(post ,index) in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :authors="post.auteurs"
        :image="post.image"
        :date="formatDate(post.date)"
        :badge="{...post.badge, variant: 'soft'}"
        :orientation="index === 0 ? 'vertical' : 'horizontal'"
        :to="post.path"

   />
    
    </UBlogList>
  </UContainer>
</template>

<style scoped></style>
