<template>
    <div class="userNavbar">
        <div class="userImg" :style="{ backgroundImage: `url(${userImg})` }">
        </div>
        <div>
            <p>{{ userName }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const userName = ref<string>('username');
const userImg = ref<string>('https://picsum.photos/200/200/?gravity=east');

</script>
<style scoped>
.userNavbar{
    display: flex;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
}
.userImg {
    width: 40px;
    height: 40px;
    border-radius: 70%;
    overflow: hidden;
    background-size: cover;
    margin-right: 12px;
}
</style>