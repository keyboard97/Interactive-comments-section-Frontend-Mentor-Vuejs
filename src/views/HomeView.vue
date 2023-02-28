<script lang="ts" setup>
import data from '../assets/resources/data.json'
import AddCommentComponent from '../components/AddCommentComponent.vue';
import ButtonComponent from '../components/AtomComponents/ButtonComponent.vue';
import CommentCardComponent from '../components/CommentCardComponent.vue';

</script>

<template>
    <div class="home-parent-container">
        <!-- <ButtonComponent :text="'Reply'" :background-color="'#5358b4'" @click=""/> -->
        <template v-for="item in data.comments">
            <CommentCardComponent :comment="item" :current-user="data.currentUser.username" />
            <template v-if="item.replies.length > 0" v-for="reply in item.replies">
                <div class="replies-container">
                    <CommentCardComponent :comment="reply" :current-user="data.currentUser.username"/>
                </div>
            </template>
        </template>
        <AddCommentComponent :avatar="data.currentUser.image.webp" />
    </div>
</template>

<style scoped>
.replies-container {
    width: 90%;
    margin-left: 9%;
}

.home-parent-container {
    width: 80%;
    height: 100%;
    margin-left: 10%;
}
</style>