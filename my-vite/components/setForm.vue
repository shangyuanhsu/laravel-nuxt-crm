<template>
    <div>
        <input :type=props.type :required=props.isRequired>
    </div>
</template>
<script setup="ts">
const props = defineProps({
    type: String,
    isRequired: Boolean,
});
</script>
<style scoped></style>