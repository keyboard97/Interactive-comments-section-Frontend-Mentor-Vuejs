<script lang="ts" setup>

interface Props {
    text: string,
    backgroundColor: string
}

const props = defineProps<Props>()
const emit = defineEmits(['click'])
</script>

<template>
    <button @click="emit('click')" :style="{ backgroundColor: props.backgroundColor }">
        {{ text.toUpperCase() }}
    </button>
</template>

<style scoped>
button {
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
}
</style>