<script setup lang="ts">
const slug = useRoute().params.slug;
const { data } = await useAsyncData(() =>
  queryCollection("content")
    .path("/" + slug)
    .first()
);
</script>
<template>
  <ContentRenderer v-if="data" :value="data" />

  <div v-else>Home not found</div>
</template>
