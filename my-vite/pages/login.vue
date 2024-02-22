<template>
    <div class="login">
        <div>
            <h2> Sign in to your account</h2>
            <form>
                <p>Email address</p>
                <v-text-field variant="outlined" type="text"></v-text-field>
                <p>Password</p>
                <v-text-field variant="outlined" type="password"></v-text-field>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: false // no default layout
})

</script>
<style scoped>
.login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255);
}

.login>div {
    width: 100%;
    max-width: 600px;
    min-height: 80vh;
}

.login>div>h2 {
    padding: 20px 0;
    text-align: center;
}
</style>