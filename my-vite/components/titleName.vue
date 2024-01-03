<template>
    <div>
        <h2>
            {{ props.txt }}
        </h2>
    </div>
</template>
<script setup="ts">

const props = defineProps({
    txt: String
});
</script>
<style scoped>
h2 {
    font-size: 24px;
    padding: 5px 0 10px 0;
}
</style>