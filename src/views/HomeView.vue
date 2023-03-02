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
                    <CommentCardComponent :comment="reply" :id-comment="item.id" :id-reply="reply.id"
                        :replying-to="reply.replyingTo" :current-user="comments.currentUser.username" />
                </div>
            </template>
        </template>
        <AddCommentComponent :avatar="comments.currentUser.image.webp" @send-comment="onAddComment" />
    </div>
</template>

<style scoped>
.replies-container.mobile {
    width: 95%;
    margin-left: 5%;
}

.replies-container {
    width: 90%;
    margin-left: 9%;
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
}
</style>