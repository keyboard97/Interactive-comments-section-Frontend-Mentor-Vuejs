<script lang="ts" setup>
import { useDimension } from '../../composables/useDimension';


interface Props {
    score: number
}
const props = defineProps<Props>()
const emit = defineEmits(['increase-score', 'decrease-score'])
const { isMobile } = useDimension()
</script>

<template>
    <div class="score-container" :class="isMobile ? 'mobile' : ''">
        <button role="button" aria-label="icrease score button" @click="emit('increase-score')">
            <img src="../../assets/resources/images/icon-plus.svg" />
        </button>
        <p><b>{{ props.score }}</b></p>
        <button role="button" aria-label="decrease score button" @click="emit('decrease-score')">
            <img src="../../assets/resources/images/icon-minus.svg" />
        </button>
    </div>
</template>

<style scoped>
p {
    /* font-weight: 600; */
    color: #5358b4;
}

.score-container.mobile>button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.score-container.mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    min-width: 100px;
}

.score-container {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 90%;
    height: 100px;
    justify-content: center;
    align-items: center !important;
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