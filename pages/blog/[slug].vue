<script setup lang="ts">const route = useRoute();

const { data: post } = await useAsyncData('cuisine-asiatique', () => queryCollection('blog').path(route.path).first());
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
    queryCollectionItemSurroundings('blog', route.path));

</script>
<template>
    <div>
        <UContainer v-if="post">
            <UPageHeader :title="post?.title" :description="post?.description">
                <template #headline>
                    <UBadge v-bind="post?.badge" variant="subtle" />

                    <time :datetime="post?.date">{{ post?.date }}</time>
                    <UButton v-for="(auteur, index) in post?.auteurs" :key="index" color="white" variant="soft"
                        :to="auteur.to" target="_blank">
                        <UAvatar v-bind="auteur.avatar" :alt="`Avatar de ${auteur} `" />

                        {{ auteur.name }}

                    </UButton>
                </template>
            </UPageHeader>

            <UPage>
                <UPageBody prose>
                    <ContentRenderer :value="post" />
                </UPageBody>

                <template #right v-if="post.body">
                    <UContentToc v-if="post.body.toc?.links?.length" :links="post.body.toc.links"></UContentToc>
                </template>

                <!--   Les liens séparateurs -->
                <UDivider v-if="surround" class="my-4"></UDivider>
                <!---   Les liens des articles précédeents -->
                <UContentSurround v-if="surround" :surround="surround" />


            </UPage>
        </UContainer>
    </div>
</template>

<style scoped></style>