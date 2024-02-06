<template>
    <div class="loading" :class="{ 'show': isLoading }">
   
    </div>
</template>
  
<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);

nuxtApp.hook('page:start', () => {
    isLoading.value = true;
});

nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
        isLoading.value = false;
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
}

.show {
    opacity: 1;
    z-index: 1005;
    transition: opacity 0.2s ease-in-out;
}
</style>