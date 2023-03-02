<script lang="ts" setup>
import { ref } from 'vue';
import AddCommentComponent from '../components/AddCommentComponent.vue';
import CommentCardComponent from '../components/CommentCardComponent.vue';
import { useComments } from '../composables/useComments';
import { useDimension } from '../composables/useDimension';

const { comments, addNewComment } = useComments()
const { isMobile } = useDimension()

const onAddComment = (id: number = 0, comment: string) => {
    addNewComment(id, comment)
}

</script>

<template>
    <div class="home-parent-container" :class="isMobile ? 'mobile' : ''">
        <template v-for="item in comments.comments">
            <CommentCardComponent :comment="item" :current-user="comments.currentUser.username" :id-comment="item.id" />
            <template v-if="item.replies.length > 0" v-for="reply in item.replies">
                <div class="replies-container" :class="isMobile ? 'mobile' : ''">
                    <div class="row">
                        <div class="vertical-line" :class="isMobile ? 'mobile' : ''"></div>
                        <div>
                            <CommentCardComponent :comment="reply" :id-comment="item.id" :id-reply="reply.id"
                                :replying-to="reply.replyingTo" :current-user="comments.currentUser.username" />
                        </div>
                    </div>
                </div>
            </template>
        </template>
        <AddCommentComponent :avatar="comments.currentUser.image.webp" @send-comment="onAddComment" />
    </div>
</template>

<style >
.row>div>.parent-container {
    width: auto;
    margin: 10px 0 !important;
}

.row>div:last-child {
    width: 100%;
}

.vertical-line.mobile {
    width: auto;
}

.vertical-line {
    width: 5%;
    height: auto;
    margin: 0 20px;
    padding: 0;
    border-right: solid 3px #f0f1f5;
}

.row {
    display: flex;
    justify-content: center;
    align-items: stretch;
}


.replies-container.mobile {
    width: 95%;
    margin-left: 5%;
}

.replies-container {
    width: 80%;
    margin-left: 10%;
}

.home-parent-container.mobile {
    width: 100%;
    height: 100%;
    margin-left: 0;
}

.home-parent-container {
    width: 80%;
    height: 100%;
    margin-left: 10%;
}</style>