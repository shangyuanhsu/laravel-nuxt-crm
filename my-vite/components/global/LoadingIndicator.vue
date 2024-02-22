<template>
    <div class="loading" :class="{ 'show': loadingStore.isLoading }">
        <v-progress-circular indeterminate :size="70" :width="7"></v-progress-circular>
    </div>
</template>
  
<script setup lang="ts">

const loadingStore = useLoadingStore();
const nuxtApp = useNuxtApp();


nuxtApp.hook('page:start', () => {
    loadingStore.setLoading(true);
});

nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
        loadingStore.setLoading(false);
    }, 500);
});
</script>
  
<style scoped>
.loading {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(70, 69, 69, 0.363);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
}

.show {
    opacity: 1;
    z-index: 1007;
    transition: opacity 0.2s ease-in-out;
}
</style>