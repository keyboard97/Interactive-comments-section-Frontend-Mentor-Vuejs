import { ref } from "vue";
import json from "../assets/resources/data.json";
import { Comment, Reply } from "../interfaces/data";

export const useComments = () => {
  const comments = ref(json);
  const currentUser = comments.value.currentUser;

  const addNewComment = (id: number = 0, content: string) => {
    const comment: Comment = {
      id: comments.value.comments.length + 1,
      content: content,
      createdAt: "now",
      score: 0,
      user: comments.value.currentUser,
      replies: [],
    };
    comments.value.comments.unshift(comment);
  };

  const addReply = (id: number, content: string, username: string) => {
    const find = comments.value.comments.find((x) => x.id == id);
    if (!find) return;
    const reply: Reply = {
      id: find.replies.length,
      content: content,
      createdAt: "now",
      score: 0,
      user: comments.value.currentUser,
      replyingTo: username,
    };
    comments.value.comments.find((x) => x.id == id)?.replies.push(reply);
  };

  const doEditComment = (
    idComment: number,
    idReply: number,
    content: string
  ) => {
    var find = null;
    if (idReply != 0)
      find = comments.value.comments
        .find((x) => x.id == idComment)!
        .replies.find((x) => x.id == idReply);
    else find = comments.value.comments.find((x) => x.id == idComment);
    if (!find) return;

    if (idReply != 0)
      find = comments.value.comments
        .find((x) => x.id == idComment)!
        .replies.find((x) => x.id == idReply)!.content = content;
    else
      find = comments.value.comments.find((x) => x.id == idComment)!.content =
        content;
  };

  const doDeleteComment = (id: number) => {
    const filter = comments.value.comments.filter((x) => x.id != id);
    comments.value.comments = filter;
  };

  const doDeleteReply = (idComment: number, idReply: number) => {
    const findIndex = comments.value.comments.findIndex(
      (x) => x.id == idComment
    );
    if (!findIndex) return;
    const filter = comments.value.comments
      .at(findIndex)!
      .replies.filter((x) => x.id != idReply);
    comments.value.comments.at(findIndex)!.replies = filter;
  };

  return {
    comments,
    addNewComment,
    doEditComment,
    doDeleteComment,
    addReply,
    currentUser,
    doDeleteReply,
  };
};
