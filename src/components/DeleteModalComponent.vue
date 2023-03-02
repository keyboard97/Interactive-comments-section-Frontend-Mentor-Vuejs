<script lang="ts" setup>
import ButtonComponent from './AtomComponents/ButtonComponent.vue';

const emit = defineEmits(['close-modal', 'accept-modal'])
</script>

<template>
    <div class="background"></div>
    <div class="modal-parent-container">
        <div class="modal-container">
            <h3>Delete comment</h3>
            <p>Are you sure you want to delete this comment? This will remove the component and can't be undone</p>
            <div class="row">
                <ButtonComponent @click="emit('close-modal')" :text="'NO, CANCEL'" :background-color="'#68727e'" />
                <ButtonComponent @click="emit('accept-modal')" :text="'YES, DELETE'" :background-color="'#ee6368'" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.modal-parent-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
}

.modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    margin-left: 5%;
}

.background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    left: 0;
}
</style>