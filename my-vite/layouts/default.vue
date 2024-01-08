<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <div class="nav">
                <Header />
                <Navbar />
                <Footer />
            </div>
        </v-navigation-drawer>
        <v-app-bar>
            <div class="setBar">
                <v-app-bar-nav-icon @click="drawer = !drawer">
                </v-app-bar-nav-icon>
                <UserNavbar />
            </div>

        </v-app-bar>
        <v-main>
            <div class="showMain">
                <slot />
            </div>
        </v-main>
    </v-app>
</template>
<style scoped>
.nav {
    display: grid;
    height: 100vh;
    align-content: space-between;
    grid-template-rows: 60px 1fr 20px;
    background-color: rgb(233, 233, 233);
}

.showMain {
    padding: 10px 20px;
}

.v-app-bar {
    box-shadow: none !important;
}

.v-navigation-drawer--left {
    border: 0px;
}

.setBar {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
<script setup>
import { ref } from 'vue'
const drawer = ref(null)
</script>