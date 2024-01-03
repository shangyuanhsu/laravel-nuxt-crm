<template>
  <TitleName txt="index" />
  <section>
    <h1>{{ store.count }}</h1>
    <button @click="store.add">click</button>
  </section>
</template>

<script setup="ts">
useSeoMeta({
  title: "my index",
  description: "my index",
  ogDescription: "my index",
  ogTitle: "my index",
  ogImage: "",
  twitterCard: "summary_large_image",
  twitterSite: "",
  twitterCreator: "",
});


const store = useHomeStore();
</script>
  