<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { useLoadAsset } from '../composables/useLoadImages';
import ButtonComponent from './AtomComponents/ButtonComponent.vue';


interface Props {
    avatar: string;
}

const props = defineProps<Props>()
const emit = defineEmits(['send-comment'])

const textArea = ref("")
</script>

<template>
    <div class="parent-container">
        <div class="container">
            <img :src="useLoadAsset(props.avatar)">
            <textarea v-model="textArea"></textarea>
            <ButtonComponent :text="'Send'" :background-color="'#5358b4'" @click="emit('send-comment')" />
        </div>
    </div>
</template>

<style scoped>
.container>img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    object-fit: contain;
}

.container>textarea {
    width: 65%;
    height: 80px;
    color: darkgray;
    border-radius: 5px;
    border-color: lightgray;
    border-width: 0.1px;
    resize: none;
    padding: 0 10px;
}

.container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    padding-top: 20px;
}

.parent-container {
    width: 80%;
    margin-left: 10%;
    min-height: 120px;
    background-color: white;
    border-radius: 10px;
}
</style>