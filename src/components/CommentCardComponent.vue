<script lang="ts" setup>
import ButtonScoreComponent from './AtomComponents/ButtonScoreComponent.vue';
import { Comment } from '../interfaces/data'
import { useLoadAsset } from '../composables/useLoadImages';

interface Props {
    comment: Comment
    currentUser: string
}
const props = defineProps<Props>()

</script>

<template>
    <div class="parent-container">
        <div class="container">
            <ButtonScoreComponent :score="props.comment.score" />
            <div class="content">
                <div class="info-card">
                    <div class="user-info-comment">
                        <div>
                            <img :src="useLoadAsset(props.comment.user.image.webp)">
                            <b class="username">{{ props.comment.user.username }}</b>
                            <p class="created">{{ props.comment.createdAt }}</p>
                        </div>

                        <div class="options-container">
                            <template v-if="props.comment.user.username == props.currentUser">
                                <div class="delete-button-container">
                                    <button>
                                        <img src="../assets/resources/images/icon-delete.svg" />
                                        Delete
                                    </button>
                                </div>
                                <div class="reply-button-container">
                                    <button>
                                        <img src="../assets/resources/images/icon-edit.svg" />
                                        Edit
                                    </button>
                                </div>
                            </template>

                            <div class="reply-button-container" v-if="props.comment.user.username != props.currentUser">
                                <button>
                                    <img src="../assets/resources/images/icon-reply.svg" />
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <p>{{ props.comment.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.created {
    color: gray;
    font-weight: lighter;
}

.reply-button-container>button {
    color: #5358b4;
}

.delete-button-container>button {
    color: #ca6c76;
}

.reply-button-container>button,
.delete-button-container>button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    cursor: pointer;
}

.user-info-comment>div>img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.user-info-comment>div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.user-info-comment {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.info-card {
    width: 100%;
    margin-top: 10px;
}

.content>.comment>p {
    color: gray;
}

.container>.content {
    display: flex;
    flex-direction: column;
    width: 85%;
}

.container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}

.parent-container {
    width: 80%;
    margin: 10px 10%;
    min-height: 150px;
    border-radius: 10px;
    background-color: white;
}
</style>