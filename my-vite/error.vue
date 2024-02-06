<template>
    <div class="errorPage">
        <div>
            <h2>{{ error.statusCode }}</h2>
            <p>{{ error.message }}</p>
            <v-btn rounded="lg" size="large" @click="handleError">Go back home</v-btn>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    error: {
        type: Object,
        required: true
    }
});
const handleError = () => clearError({ redirect: '/' });
</script>
<style scoped>
.errorPage {
    background-color: rgb(233, 233, 233);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.errorPage>div {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
}

.errorPage>div>h2 {
    font-size: 150px;
}

.errorPage>div>p {
    color: gray;
    margin: 0 0 20px 0;
}
</style>