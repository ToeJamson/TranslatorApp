(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,a){e.exports=a(602)},292:function(e,t,a){},294:function(e,t,a){},602:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),o=a.n(r),l=(a(292),a(207)),c=a(26),i=a(198),u=a(199),g=a(209),h=a(200),m=a(208),d=a(33),p=(a(294),a(68)),b=a.n(p),f=a(201),v=a.n(f),w=a(202),E=a.n(w),y=a(203),x=a(17),_=a(204),k=a.n(_),C=a(205),F=a.n(C),j=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(g.a)(this,Object(h.a)(t).call(this,e))).picker=null,a.leaveChat=function(){a.pubnub.unsubscribe({channels:[a.channel]})},a.onMessage=function(e){console.log(e,e.message),"messageSend"===e.message.action&&a.setState(function(){var t=Object(c.a)({},a.state);return t.messages.unshift({id:e.timetoken,target_text:e.message.data.text,target_lang:e.message.data.translate.target,source_text:e.message.data.text_original,source_lang:e.message.data.translate.source,userId:e.message.userId,color:e.message.color,timestamp:e.message.timestamp}),t})},a.onPresenceChange=function(e){switch(e.action){case"join":a.addUser(e.uuid);break;case"leave":case"timeout":a.removeUser(e.uuid);break;default:console.error("unknown action: "+e.action)}},a.onStatusChange=function(e){console.log("status changed",e)},a.publishMessage=function(e){return function(){if(a.state.newMessage){var t={action:"messageSend",userId:e,timestamp:(new Date).toISOString(),color:a.state.color,data:{translate:{source:a.state.source_lang,target:a.state.target_lang,text:a.state.newMessage},text_original:a.state.newMessage}},n=Object(c.a)({},a.state);n.newMessage="",a.setState(function(){return n}),a.pubnub.publish({message:t,channel:a.channel})}}},a.addUser=function(e){if(e){e.uuid&&(e=e.uuid);var t=Object(c.a)({},a.state);a.state.users.includes(e)||t.users.push(e),a.setState(function(){return t})}},a.removeUser=function(e){return function(){var t=Object(c.a)({},a.state);t.users=b()(t.users).filter(function(t){return t!==e}),a.setState(function(){return t})}},a.toggleTranslationDirection=function(e){return function(e){var t=Object(c.a)({},a.state);t.enabled=e.target.checked,t.enabled?(t.source_lang=a.source_lang,t.target_lang=a.target_lang):(t.target_lang=a.source_lang,t.source_lang=a.target_lang),a.setState(function(){return t})}},a.handleTextChange=function(e){var t=Object(c.a)({},a.state);t.newMessage=e.target.value,a.setState(function(){return t})},a.handleColorChange=function(e){var t=Object(c.a)({},a.state);t.color=e.hex,a.setState(function(){return t})};var n=window.location.href.split("?");a.urlQuery=n&&n[1]||"default",a.source_lang="en",a.target_lang="es",a.url=window.location.href;var s=a.urlQuery.split(";");s.length>1&&(a.source_lang=s[1]),s.length>2&&(a.target_lang=s[2]),a.urlQuery=s[0],a.channel="chat."+a.urlQuery,a.userId="User"+Math.round(1e3*Math.random()),a.state={enabled:!0,background:"#aaa",newMessage:"hello world",source_lang:a.source_lang,target_lang:a.target_lang,color:"#FFFFFF",messages:[],users:[],index:0,now:new Date},a.pubnub=new E.a({publishKey:"pub-c-9c89a6f1-c3d5-40bf-bfa0-2ba3224f256d",subscribeKey:"sub-c-0b4b5b4e-f980-11e8-80f1-b6259b5c8742",uuid:a.userId}),a.pubnub.init(Object(d.a)(Object(d.a)(a)));var r=Object(d.a)(Object(d.a)(a));return setInterval(function(){var e=Object(c.a)({},r.state);e.now=new Date,r.setState(function(){return e})},3e4),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.addEventListener("beforeunload",e.leaveChat),this.pubnub.subscribe({channels:[e.channel],withPresence:!0}),this.pubnub.getMessage(this.channel,e.onMessage),this.pubnub.getPresence(this.channel,e.onPresenceChange),this.pubnub.getStatus(e.onStatusChange),this.pubnub.hereNow({channels:[this.channel]},function(t,a){b()(a.channels[e.channel].occupants).forEach(function(t){return e.addUser(t)})})}},{key:"componentWillUnmount",value:function(){this.leaveChat()}},{key:"getTextFieldLabel",value:function(){return"Type message... ("+this.state.source_lang+" \u2192 "+this.state.target_lang+")"}},{key:"friendlyTime",value:function(e){if(!e||!this.state.now)return"a while ago";var t=v()(e).from(this.props.now);return"in a few seconds"===t?"just now":t}},{key:"render",value:function(){var e=this,t=Object(l.a)(this.state.messages),a=b.a.map(t,function(t){return s.a.createElement("div",{key:t.id},s.a.createElement(x.b,{className:"App-card",style:{backgroundColor:t.color}},s.a.createElement(x.c,{className:"App-cardcontent"},s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginTop:"20px"}},s.a.createElement("i",null,t.target_text)),s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginTop:"30px"}},t.source_text),s.a.createElement(x.f,{variant:"h6",component:"h6",style:{marginTop:"40px"}},"- ",t.userId,s.a.createElement("br",null),s.a.createElement("span",{style:{fontSize:"10px"}},"[",t.source_lang," \u2192 ",t.target_lang,", ",e.friendlyTime(t.timestamp),"]")))))});return a.push(s.a.createElement("div",{key:0},s.a.createElement(x.b,{className:"App-card"},s.a.createElement(x.c,{className:"App-cardcontent"},s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginTop:"20px",marginBottom:"20px",fontFamily:'"Lato", sans-serif'}},"Welcome"),s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginBottom:"20px",fontFamily:"Charm, cursive"}},"Bienvenue"),s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginBottom:"20px",fontFamily:'"Roboto Slab", serif'}},"Bienvenido"),s.a.createElement(x.f,{variant:"h3",component:"h3",style:{marginBottom:"20px",fontFamily:"Lato, sans-serif"}},s.a.createElement("i",null,"Willkommen")))))),s.a.createElement("div",{id:"App",className:"App",flex:1},s.a.createElement("header",{className:"App-header",style:{background:this.state.background}},s.a.createElement(F.a,{className:"App-cardport",enableMouseEvents:!0},a),s.a.createElement("div",{style:{marginBottom:"10px"}},s.a.createElement(y.GithubPicker,{colors:["#FFFFFF","#EB9694","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"],ref:function(t){e.picker=t},triangle:"hide",color:this.state.color,onChangeComplete:this.handleColorChange})),s.a.createElement("div",{style:{marginTop:"20px",marginBottom:"10px"}},s.a.createElement(x.e,{style:{width:"360px"},label:this.getTextFieldLabel(),value:this.state.newMessage,onChange:this.handleTextChange,maxLength:"140"})),s.a.createElement("div",{style:{marginBottom:"20px"}},s.a.createElement(x.d,{checked:this.state.enabled,onChange:this.toggleTranslationDirection("enabled"),color:"primary"}),s.a.createElement(x.a,{onClick:this.publishMessage(this.userId)},"Send!")),s.a.createElement("div",null,s.a.createElement("h6",null,this.userId," / #",this.channel," / 1 of ",this.state.users.length," participants")),s.a.createElement(k.a,{value:this.url,style:{width:"300px",height:"300px"}}),s.a.createElement("div",null,s.a.createElement("h6",null,"~"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[287,2,1]]]);
//# sourceMappingURL=main.290373b8.chunk.js.map