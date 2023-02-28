<script lang="ts" setup>

interface Props {
    score: number
}
const props = defineProps<Props>()
const emit = defineEmits(['increase-score', 'decrease-score'])
</script>

<template>
    <div class="container">
        <button @click="emit('increase-score')">
            <img src="../../assets/resources/images/icon-plus.svg" />
        </button>
        <p>{{ props.score }}</p>
        <button @click="emit('decrease-score')">
            <img src="../../assets/resources/images/icon-minus.svg" />
        </button>
    </div>
</template>

<style scoped>
p {
    /* font-weight: 600; */
    color: #5358b4;
}

.container {
    display: flex;
    flex-direction: column;
    width: 40px;
    /* height: 100px; */
    justify-content: center;
    align-items: center;
    background-color: #f5f6f9;
    border-radius: 5px;
}

button {
    background: none;
    border: none;
    color: #aeacfc;
    height: 20px;
    width: 100%;
    cursor: pointer;
}
</style>