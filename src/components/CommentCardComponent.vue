<script lang="ts" setup>
import ButtonScoreComponent from './AtomComponents/ButtonScoreComponent.vue';
import { Comment, Reply } from '../interfaces/data'
import { useLoadAsset } from '../composables/useLoadImages';
import { useDimension } from '../composables/useDimension';
import AddCommentComponent from './AddCommentComponent.vue';
import { useComments } from '../composables/useComments';
import { ref } from 'vue';
import DeleteModalComponent from './DeleteModalComponent.vue';

interface Props {
    comment: Comment | Reply
    currentUser: string
    replyingTo?: string
    idReply?: number
    idComment?: number
}
const props = defineProps<Props>()
const { isMobile } = useDimension()
const { currentUser, addReply, doEditComment, doDeleteComment, doDeleteReply } = useComments()

const showAddComment = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)


const onReply = (id: number, reply: string, username: string) => {
    showAddComment.value = false;
    addReply(id, reply, username)
}
const onEditClick = () => {
    isEditing.value = !isEditing.value;
    showAddComment.value = !showAddComment.value
}

const onClickSendButton = (id: number, content: string) => {
    const idReply = props.idReply ? props.idReply : 0
    const idComment = props.idComment ? props.idComment : id
    if (isEditing.value) {
        doEditComment(idComment, idReply, content)
        onEditClick()
    }
    else {
        showAddComment.value = !showAddComment.value
        onReply(idComment, content, props.comment.user.username)
    }
}

const onDeleteClick = () => {
    showDeleteModal.value = true;
}
const doDelete = () => {
    if (props.idReply == undefined) doDeleteComment(props.idComment!)
    else doDeleteReply(props.idComment!, props.idReply!)
    return showDeleteModal.value = false;
}
</script>

<template>
    <transition name="pop" appear>
        <teleport to="#app">
            <div class="modal" role="dialog" v-if="showDeleteModal">
                <DeleteModalComponent @close-modal="showDeleteModal = false" @accept-modal="doDelete" />
            </div>
        </teleport>
    </transition>

    <div v-if="!isEditing" class="parent-container" :class="isMobile ? 'mobile' : ''">
        <div class="container" :class="isMobile ? 'mobile' : ''">
            <div class="options" :class="isMobile ? 'mobile' : ''">
                <ButtonScoreComponent :score="props.comment.score" @increase-score="props.comment.score++"
                    @decrease-score="props.comment.score--" />
                <div class="options-container" v-if="isMobile">
                    <template v-if="props.comment.user.username == props.currentUser">
                        <div class="delete-button-container">
                            <button role="button" aria-label="action button" @click="onDeleteClick">
                                <img alt="delete icon" src="../assets/resources/images/icon-delete.svg" />
                                <b>Delete</b>
                            </button>
                        </div>
                        <div class="reply-button-container">
                            <button role="button" aria-label="action button" @click="onEditClick">
                                <img alt="edit icon" src="../assets/resources/images/icon-edit.svg" />
                                <b>Edit</b>
                            </button>
                        </div>
                    </template>

                    <div class="reply-button-container" v-if="props.comment.user.username != props.currentUser">
                        <button role="button" aria-label="action button" @click="showAddComment = !showAddComment">
                            <img alt="reply icon" src="../assets/resources/images/icon-reply.svg" />
                            <b>Reply</b>
                        </button>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="info-card">
                    <div class="user-info-comment">
                        <div>
                            <img alt="avatar profile photo" :src="useLoadAsset(props.comment.user.image.webp)">
                            <b class="username">{{ props.comment.user.username }}</b>
                            <p class="created">{{ props.comment.createdAt }}</p>
                        </div>

                        <div class="options-container" v-if="!isMobile">
                            <template v-if="props.comment.user.username == props.currentUser">
                                <div class="delete-button-container">
                                    <button role="button" aria-label="action button" @click="onDeleteClick">
                                        <img alt="delete icon" src="../assets/resources/images/icon-delete.svg" />
                                        <b>Delete</b>
                                    </button>
                                </div>
                                <div class="reply-button-container">
                                    <button role="button" aria-label="action button" @click="onEditClick">
                                        <img alt="edit icon" src="../assets/resources/images/icon-edit.svg" />
                                        <b>Edit</b>
                                    </button>
                                </div>
                            </template>

                            <div class="reply-button-container" v-if="props.comment.user.username != props.currentUser">
                                <button role="button" aria-label="action button" @click="showAddComment = !showAddComment">
                                    <img alt="reply icon" src="../assets/resources/images/icon-reply.svg" />
                                    <b>Reply</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <p><span v-if="props.replyingTo">
                            <b> {{ "@" + props.replyingTo }}</b></span>
                        {{ props.comment.content }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="add-comment-container" v-if="showAddComment">
        <AddCommentComponent :button-text="isEditing ? 'Update' : 'Reply'" :comment-id="props.comment.id"
            :replying-to="comment.user.username" :avatar="currentUser.image.webp!" :is-editing="isEditing"
            :editing-comment="props.comment.content" @send-comment="onClickSendButton" />
    </div>
</template>

<style scoped>
.add-comment-container {
    margin-top: -5px;
}

.options {
    margin-top: 15px;
}

.comment>p>span {
    color: #5358b4;
}
.comment>p {
    text-align: left;
}
.options.mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
}

.options.mobile>* {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

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

.container.mobile {
    flex-direction: column-reverse;
    align-items: center;
}

.container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 10px;
}

.parent-container.mobile {
    width: 90%;
    margin: 10px 5%;
    min-height: 160px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 10px;
}

.parent-container {
    width: 80%;
    margin: 10px 10%;
    min-height: 160px;
    border-radius: 10px;
    background-color: white;
}
</style>