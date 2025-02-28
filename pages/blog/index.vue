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
        :auteurs="post.auteur"
        :image="post.image"
   />
    
    </UBlogList>
  </UContainer>
</template>

<style scoped></style>
