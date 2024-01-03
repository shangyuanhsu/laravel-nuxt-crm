<template>
    <div class="navbar">
        <nav>
            <div v-for="linkData in navItems" :key="linkData.id" :class="{ 'floor': linkData.group }">
                    <details :open="linkData.isOpen">
                        <summary>{{ linkData.group }}</summary>
                    </details>
                    <ul>
                        <li v-for="linkList in linkData.list">
                            <NuxtLink :to="linkList.link" :class="{ 'navCkeck': $route.path === linkList.link }">{{
                                linkList.title }}</NuxtLink>
                        </li>
                    </ul>
            </div>
        </nav>
    </div>
</template>

<script  setup lang="ts">
const route = useRoute();
const navItem = reactive<GroupObject[]>([
    {
        id: 1,
        isOpen: false,
        group: "groupTitle1",
        list: [
            {
                title: 'index',
                link: '/'
            },
        ]
    },
    {
        id: 2,
        isOpen: false,
        group: "groupTitle2",
        list: [
            {
                title: 'about',
                link: '/about'
            }
        ]
    }
]);
//========================
const navItems = computed(() => {
    for (let i = 0; i < navItem.length; i++) {
        const checkPath = navItem[i].list.find((x:ListItem) => x.link === route.path);
        navItem[i].isOpen = checkPath != undefined;
    }
    return navItem;
});

</script>

<style scoped>
.navbar {
    height: calc(100vh - 80px);
    overflow-y: auto;
}

a {
    padding: 10px;
}

details {
    padding: 10px;
}

.floor>details {
    position: relative;
}

.floor a {
    padding-left: 24px;
}

summary {
    cursor: pointer;
    text-decoration: none;
    list-style: none;
}

li {
    list-style: none;
}

summary::after {
    content: '';
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border-left: 5px dashed transparent;
    border-right: 5px dashed transparent;
    border-top: 5px solid #212121;
    position: absolute;
    top: 44%;
    right: 8%;
    transition: .3s ease-out;
}

[open] summary::after {
    transform: rotate(180deg)
}

ul {

    max-height: 0;
    padding: 0;
    margin: 0;
}

.floor ul {
    transition: .3s ease-out;
    overflow: hidden;
}

[open]+ul {
    max-height: 90px;
}


a:hover,
.navCkeck {
    background-color: white;
    color: #000;
}
</style>