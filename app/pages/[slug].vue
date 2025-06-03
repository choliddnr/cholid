<script setup lang="ts">
const slug = useRoute().params.slug;
const { data } = await useAsyncData(() =>
  queryCollection("content")
    .path("/" + slug)
    .first()
);
</script>
<template>
  <div class="max-w-[640px] w-auto mx-auto my-20 px-5">
    <LazyContentRenderer v-if="data" :value="data" />
    <div v-else>Home not found</div>
  </div>
</template>
