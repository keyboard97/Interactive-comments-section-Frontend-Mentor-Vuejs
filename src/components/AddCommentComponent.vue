<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { useDimension } from '../composables/useDimension';
import { useLoadAsset } from '../composables/useLoadImages';
import ButtonComponent from './AtomComponents/ButtonComponent.vue';


interface Props {
    avatar: string;
}

const props = defineProps<Props>()
const emit = defineEmits(['send-comment'])
const { isMobile } = useDimension()
const textArea = ref("")

</script>

<template>
    <div class="parent-container" :class="isMobile ? 'mobile' : ''">
        <div class="container" :class="isMobile ? 'mobile' : ''">
            <img :src="useLoadAsset(props.avatar)" v-if="!isMobile">
            <textarea placeholder="Add a comment..." v-model="textArea"></textarea>
            <ButtonComponent :text="'Send'" :background-color="'#5358b4'" @click="emit('send-comment')" v-if="!isMobile" />
            <div class="row" v-if="isMobile">
                <img :src="useLoadAsset(props.avatar)">
                <ButtonComponent :text="'Send'" :background-color="'#5358b4'" @click="emit('send-comment')" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container.mobile {
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    padding-bottom: 10px;
}

.container.mobile>textarea {
    width: 100%;
    padding: 0;
}

.row {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    margin-top: 20px;
}

.container>img,
.row>img {
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

.parent-container.mobile {
    width: 90%;
    margin-left: 5%;
    min-height: 120px;
    background-color: white;
    border-radius: 10px;
}

.parent-container {
    width: 80%;
    margin-left: 10%;
    min-height: 120px;
    background-color: white;
    border-radius: 10px;
}
</style>