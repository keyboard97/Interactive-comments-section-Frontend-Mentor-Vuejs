import{r as w,c as R,d as I,o as r,a as c,t as $,n as G,_ as U,b as t,u as i,e as b,w as K,v as Q,i as X,f as F,g as h,h as y,p as E,j,F as k,k as Z,T as ee,l as te,m as ne,q as W}from"./index-fc011673.js";const D=()=>{const n=w(window.innerHeight),e=w(window.innerWidth>1920?1920:window.innerWidth),o=()=>e.value=window.innerWidth>1920?1920:window.innerWidth,l=R(()=>e.value>900?`${Math.round(e.value*.32)}px`:`${Math.round(e.value*.8)}px`),u=R(()=>e.value>900?`${e.value-Math.round(e.value*.32)-80}px`:`${Math.round(e.value*.8)}px`),_=R(()=>!(e.value>600));return window.addEventListener("resize",o),{isMobile:_,deviceHeight:n,deviceWidth:e,computedUploadLeftContainerWidth:l,computedUploadRightContainerWidth:u}},A=n=>new URL(n,import.meta.url).href,oe=["aria-label"],se=I({__name:"ButtonComponent",props:{text:null,backgroundColor:null},emits:["click"],setup(n,{emit:e}){const o=n;return(l,u)=>(r(),c("button",{role:"button","aria-label":o.text,onClick:u[0]||(u[0]=_=>e("click")),style:G({backgroundColor:o.backgroundColor})},$(n.text.toUpperCase()),13,oe))}});const S=U(se,[["__scopeId","data-v-f4a09d8a"]]),ae=["src"],re={key:2,class:"row"},ie=["src"],le=I({__name:"AddCommentComponent",props:{avatar:null,buttonText:null,commentId:null,replyingTo:null,editingComment:null,isEditing:{type:Boolean}},emits:["send-comment"],setup(n,{emit:e}){const o=n,{isMobile:l}=D(),u=w(o.isEditing?o.editingComment:o.replyingTo?"@"+o.replyingTo+" ":""),_=()=>{e("send-comment",o.commentId,u.value.replace("@"+o.replyingTo,""))};return(f,a)=>(r(),c("div",{class:y(["parent-container",i(l)?"mobile":""])},[t("div",{class:y(["container",i(l)?"mobile":""])},[i(l)?b("",!0):(r(),c("img",{key:0,alt:"avatar profile photo",src:i(A)(o.avatar)},null,8,ae)),K(t("textarea",{placeholder:"Add a comment...","onUpdate:modelValue":a[0]||(a[0]=s=>X(u)?u.value=s:null)},null,512),[[Q,i(u)]]),i(l)?b("",!0):(r(),F(S,{key:1,text:o.buttonText?o.buttonText:"Send","background-color":"#5358b4",onClick:a[1]||(a[1]=s=>e("send-comment",o.commentId,i(u).replace("@"+o.replyingTo,"")))},null,8,["text"])),i(l)?(r(),c("div",re,[t("img",{alt:"avatar profile photo",src:i(A)(o.avatar)},null,8,ie),h(S,{text:o.buttonText?o.buttonText:"Send","background-color":"#5358b4",onClick:_},null,8,["text"])])):b("",!0)],2)],2))}});const H=U(le,[["__scopeId","data-v-29cbb1d4"]]),z="/Interactive-comments-section-Frontend-Mentor-Vuejs/assets/icon-delete-a955972c.svg",Y="/Interactive-comments-section-Frontend-Mentor-Vuejs/assets/icon-edit-be86deeb.svg",q="/Interactive-comments-section-Frontend-Mentor-Vuejs/assets/icon-reply-b32cf4fa.svg",ce="/Interactive-comments-section-Frontend-Mentor-Vuejs/assets/icon-plus-e731c8fe.svg",de="/Interactive-comments-section-Frontend-Mentor-Vuejs/assets/icon-minus-cb46e373.svg",J=n=>(E("data-v-832ce7a0"),n=n(),j(),n),ue=J(()=>t("img",{src:ce},null,-1)),me=[ue],pe=J(()=>t("img",{src:de},null,-1)),_e=[pe],ve=I({__name:"ButtonScoreComponent",props:{score:null},emits:["increase-score","decrease-score"],setup(n,{emit:e}){const o=n,{isMobile:l}=D();return(u,_)=>(r(),c("div",{class:y(["score-container",i(l)?"mobile":""])},[t("button",{role:"button","aria-label":"icrease score button",onClick:_[0]||(_[0]=f=>e("increase-score"))},me),t("p",null,[t("b",null,$(o.score),1)]),t("button",{role:"button","aria-label":"decrease score button",onClick:_[1]||(_[1]=f=>e("decrease-score"))},_e)],2))}});const be=U(ve,[["__scopeId","data-v-832ce7a0"]]),ge={image:{png:"../assets/resources/images/avatars/image-juliusomo.png",webp:"../assets/resources/images/avatars/image-juliusomo.webp"},username:"juliusomo"},he=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"../assets/resources/images/avatars/image-amyrobson.png",webp:"../assets/resources/images/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"../assets/resources/images/avatars/image-maxblagun.png",webp:"../assets/resources/images/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"../assets/resources/images/avatars/image-ramsesmiron.png",webp:"../assets/resources/images/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"../assets/resources/images/avatars/image-juliusomo.png",webp:"../assets/resources/images/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}],ye={currentUser:ge,comments:he},O=()=>{const n=w(ye),e=n.value.currentUser;return{comments:n,addNewComment:(a=0,s)=>{const m={id:n.value.comments.length+1,content:s,createdAt:"now",score:0,user:n.value.currentUser,replies:[]};n.value.comments.unshift(m)},doEditComment:(a,s,m)=>{var p=null;s!=0?p=n.value.comments.find(d=>d.id==a).replies.find(d=>d.id==s):p=n.value.comments.find(d=>d.id==a),p&&(s!=0?p=n.value.comments.find(d=>d.id==a).replies.find(d=>d.id==s).content=m:p=n.value.comments.find(d=>d.id==a).content=m)},doDeleteComment:a=>{const s=n.value.comments.filter(m=>m.id!=a);n.value.comments=s},addReply:(a,s,m)=>{var x;const p=n.value.comments.find(T=>T.id==a);if(!p)return;const d={id:p.replies.length,content:s,createdAt:"now",score:0,user:n.value.currentUser,replyingTo:m};(x=n.value.comments.find(T=>T.id==a))==null||x.replies.push(d)},currentUser:e,doDeleteReply:(a,s)=>{const m=n.value.comments.findIndex(d=>d.id==a);if(!m)return;const p=n.value.comments.at(m).replies.filter(d=>d.id!=s);n.value.comments.at(m).replies=p}}},B=n=>(E("data-v-d2290645"),n=n(),j(),n),fe=B(()=>t("div",{class:"background"},null,-1)),Ce={class:"modal-parent-container"},we={class:"modal-container"},ke=B(()=>t("h3",null,"Delete comment",-1)),xe=B(()=>t("p",null,"Are you sure you want to delete this comment? This will remove the component and can't be undone",-1)),$e={class:"row"},Ie=I({__name:"DeleteModalComponent",emits:["close-modal","accept-modal"],setup(n,{emit:e}){return(o,l)=>(r(),c(k,null,[fe,t("div",Ce,[t("div",we,[ke,xe,t("div",$e,[h(S,{onClick:l[0]||(l[0]=u=>e("close-modal")),text:"NO, CANCEL","background-color":"#68727e"}),h(S,{onClick:l[1]||(l[1]=u=>e("accept-modal")),text:"YES, DELETE","background-color":"#ee6368"})])])])],64))}});const Te=U(Ie,[["__scopeId","data-v-d2290645"]]),g=n=>(E("data-v-91bbffd9"),n=n(),j(),n),Ue={key:0,class:"modal",role:"dialog"},Me={key:0,class:"options-container"},Se=g(()=>t("img",{alt:"delete icon",src:z},null,-1)),De=g(()=>t("b",null,"Delete",-1)),Re=[Se,De],Ae=g(()=>t("img",{alt:"edit icon",src:Y},null,-1)),Ee=g(()=>t("b",null,"Edit",-1)),je=[Ae,Ee],Be={key:1,class:"reply-button-container"},Ve=g(()=>t("img",{alt:"reply icon",src:q},null,-1)),Ne=g(()=>t("b",null,"Reply",-1)),We=[Ve,Ne],Le={class:"content"},Fe={class:"info-card"},He={class:"user-info-comment"},ze=["src"],Ye={class:"username"},qe={class:"created"},Je={key:0,class:"options-container"},Oe=g(()=>t("img",{alt:"delete icon",src:z},null,-1)),Pe=g(()=>t("b",null,"Delete",-1)),Ge=[Oe,Pe],Ke=g(()=>t("img",{alt:"edit icon",src:Y},null,-1)),Qe=g(()=>t("b",null,"Edit",-1)),Xe=[Ke,Qe],Ze={key:1,class:"reply-button-container"},et=g(()=>t("img",{alt:"reply icon",src:q},null,-1)),tt=g(()=>t("b",null,"Reply",-1)),nt=[et,tt],ot={class:"comment"},st={key:0},at={key:1,class:"add-comment-container"},rt=I({__name:"CommentCardComponent",props:{comment:null,currentUser:null,replyingTo:null,idReply:null,idComment:null},setup(n){const e=n,{isMobile:o}=D(),{currentUser:l,addReply:u,doEditComment:_,doDeleteComment:f,doDeleteReply:a}=O(),s=w(!1),m=w(!1),p=w(!1),d=(M,v,C)=>{s.value=!1,u(M,v,C)},x=()=>{p.value=!p.value,s.value=!s.value},T=(M,v)=>{const C=e.idReply?e.idReply:0,N=e.idComment?e.idComment:M;p.value?(_(N,C,v),x()):(s.value=!s.value,d(N,v,e.comment.user.username))},V=()=>{m.value=!0},P=()=>(e.idReply==null?f(e.idComment):a(e.idComment,e.idReply),m.value=!1);return(M,v)=>(r(),c(k,null,[h(ee,{name:"pop",appear:""},{default:Z(()=>[(r(),F(ne,{to:"#app"},[m.value?(r(),c("div",Ue,[h(Te,{onCloseModal:v[0]||(v[0]=C=>m.value=!1),onAcceptModal:P})])):b("",!0)]))]),_:1}),p.value?b("",!0):(r(),c("div",{key:0,class:y(["parent-container",i(o)?"mobile":""])},[t("div",{class:y(["container",i(o)?"mobile":""])},[t("div",{class:y(["options",i(o)?"mobile":""])},[h(be,{score:e.comment.score,onIncreaseScore:v[1]||(v[1]=C=>e.comment.score++),onDecreaseScore:v[2]||(v[2]=C=>e.comment.score--)},null,8,["score"]),i(o)?(r(),c("div",Me,[e.comment.user.username==e.currentUser?(r(),c(k,{key:0},[t("div",{class:"delete-button-container"},[t("button",{role:"button","aria-label":"action button",onClick:V},Re)]),t("div",{class:"reply-button-container"},[t("button",{role:"button","aria-label":"action button",onClick:x},je)])],64)):b("",!0),e.comment.user.username!=e.currentUser?(r(),c("div",Be,[t("button",{role:"button","aria-label":"action button",onClick:v[3]||(v[3]=C=>s.value=!s.value)},We)])):b("",!0)])):b("",!0)],2),t("div",Le,[t("div",Fe,[t("div",He,[t("div",null,[t("img",{alt:"avatar profile photo",src:i(A)(e.comment.user.image.webp)},null,8,ze),t("b",Ye,$(e.comment.user.username),1),t("p",qe,$(e.comment.createdAt),1)]),i(o)?b("",!0):(r(),c("div",Je,[e.comment.user.username==e.currentUser?(r(),c(k,{key:0},[t("div",{class:"delete-button-container"},[t("button",{role:"button","aria-label":"action button",onClick:V},Ge)]),t("div",{class:"reply-button-container"},[t("button",{role:"button","aria-label":"action button",onClick:x},Xe)])],64)):b("",!0),e.comment.user.username!=e.currentUser?(r(),c("div",Ze,[t("button",{role:"button","aria-label":"action button",onClick:v[4]||(v[4]=C=>s.value=!s.value)},nt)])):b("",!0)]))])]),t("div",ot,[t("p",null,[e.replyingTo?(r(),c("span",st,[t("b",null,$("@"+e.replyingTo),1)])):b("",!0),te(" "+$(e.comment.content),1)])])])],2)],2)),s.value?(r(),c("div",at,[h(H,{"button-text":p.value?"Update":"Reply","comment-id":e.comment.id,"replying-to":n.comment.user.username,avatar:i(l).image.webp,"is-editing":p.value,"editing-comment":e.comment.content,onSendComment:T},null,8,["button-text","comment-id","replying-to","avatar","is-editing","editing-comment"])])):b("",!0)],64))}});const L=U(rt,[["__scopeId","data-v-91bbffd9"]]),it={class:"row"},ct=I({__name:"HomeView",setup(n){const{comments:e,addNewComment:o}=O(),{isMobile:l}=D(),u=(_=0,f)=>{o(_,f)};return(_,f)=>(r(),c("div",{class:y(["home-parent-container",i(l)?"mobile":""])},[(r(!0),c(k,null,W(i(e).comments,a=>(r(),c(k,null,[h(L,{comment:a,"current-user":i(e).currentUser.username,"id-comment":a.id},null,8,["comment","current-user","id-comment"]),a.replies.length>0?(r(!0),c(k,{key:0},W(a.replies,s=>(r(),c("div",{class:y(["replies-container",i(l)?"mobile":""])},[t("div",it,[t("div",{class:y(["vertical-line",i(l)?"mobile":""])},null,2),t("div",null,[h(L,{comment:s,"id-comment":a.id,"id-reply":s.id,"replying-to":s.replyingTo,"current-user":i(e).currentUser.username},null,8,["comment","id-comment","id-reply","replying-to","current-user"])])])],2))),256)):b("",!0)],64))),256)),h(H,{avatar:i(e).currentUser.image.webp,onSendComment:u},null,8,["avatar"])],2))}});export{ct as default};
