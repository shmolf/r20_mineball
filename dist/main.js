!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(e,t,n,r){this.id=e,this.url=t,this.name=n,this.tag=r}toJSON(){return{id:this.id,url:this.url,name:this.name,tag:this.tag}}fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return this.id=t.id,this.url=t.url,this.name=t.name,this.tag=t.tag,this}}r.revive=e=>{const t="string"==typeof e?JSON.parse(e):e;return new r(t.id,t.url,t.name,t.tag)};class a{constructor(e){this.id=e,this.emblem=null}getId(){return this.id}getEmblem(){return this.emblem}setEmblem(e){this.emblem=e}toJSON(){return{id:this.id,emblem:this.getEmblem().toJSON()}}fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,n=(new r).fromJSON(t.emblem);return this.id=t.id,this.setEmblem(n),this}}a.revive=e=>{const t="string"==typeof e?JSON.parse(e):e,n=r.revive(t.emblem),s=new a(t.id);return s.setEmblem(n),s};class s{constructor(){this.helpParam="--help"}}let i=null;const o={};function l(e){const t=i.filter(e=>!(e.name in o)).map(e=>{const{name:t,url:n}=e;return`<p><a href='!mineball emblem ${t}'><img width='30' src='${n}' /> ${t}</a></p>`}).join("");sendChat("Mine Ball Help",`/w ${e} <p>Choose from one of the available emblems below.</p>\n    <p>You cannot choose an emblem if another player has already selected it.</p>\n    <p>Click the emblem you'd like to choose to represent you.</p>\n    ${t}`)}on("ready",()=>{i=JSON.parse(Campaign().get("token_markers")).map(e=>new r(e.id,e.url,e.name,e.tag))});let c={};const m={},d={},u=new class extends s{constructor(e){super(),this.cmd="help",this.desc="<p>Provides general help, and a list of all commands.",this.paramList=[],this.func=(t,n,r,a)=>{log(e);const s=Object.keys(e).map(t=>function(e){const t=e.paramList.join(" ");return`<hr><pre>!mineball ${e.cmd} ${t}</pre><p>${e.desc}</p>`}(e[t])).join("");sendChat("Mine Ball Help",`/w ${n} <p>Below is a list of commands available to you, for this game.</p>\n        <p>\n          If you provide <code>${this.helpParam}</code> after some commands, it will provide additional details.\n          Example:\n        </p>\n        <pre>!minecraft emblem ${this.helpParam}</pre>\n        ${s}`)}}}(m);m[u.cmd]=u;const h=new class extends s{constructor(e){super();const t=e;this.cmd="emblem",this.desc=`Command is used to join the game, and declare/change what emblem will represent you as a player.\n      The emblem will be represented on all of your cards. (${this.helpParam} avail)`,this.paramList=["emblemName"],this.func=function(n,r,s,c){if(c.includes(this.helpParam))return function(e){Object.keys(e).forEach(t=>{log(e);const n=e[t].getEmblem();o[n.name]=n})}(e),l(r),e;const m=c.shift(),d=i.map(e=>e.name).indexOf(m);if(void 0===m||-1===d)return sendChat("Mine Ball Error",`/w ${r} Need to provide a valid Emblem choice.`),l(r),e;s in e||(t[s]=new a(s));const u=e[s];return log("player type: "+typeof u),u.setEmblem(i[d]),sendChat("Emblem Choosen",`/w ${r} You are now <img width='30' src='${u.getEmblem().url}'>`),state.MineBall.players=t,t}}}(c);m[h.cmd]=h;const p=new class extends s{constructor(e){super(),this.cmd="whoami",this.desc="Informs you of which emblem belongs to you, and thereby which cards you should control.",this.paramList=[],this.func=(t,n,r,a)=>{if(r in e){const t=e[r];sendChat("",`/w ${n} You are <img width='30' src='${t.getEmblem().url}'>`)}else sendChat("the Referee",`/w ${n} You are not yet a player in the game. Use the <code>!mineball help</code>\n          command to understand how to join.`)}}}(c);m[p.cmd]=p;const f=new class extends s{constructor(e){super(),this.cmd="reset-players",this.desc="Clears the list of Mineball players from the Campaign",this.paramList=[],this.func=()=>{state.MineBall.players={},log("Players are reset")}}}(c);function b(e){if("api"!==e.type)return;const t=(getObj("player",e.playerid)||{get:()=>"API"}).get("_displayname"),n=e.playerid,r=e.content.split(/\s+/);if("!mineball"!==r.shift()||0===r.length)return;let s;switch(r.shift().toLowerCase()){case h.cmd:Object.assign(c,h.func(e,t,n,r)),s=c[n]||null,typeof s==typeof a&&s.getDeck();break;case p.cmd:p.func(e,t,n,r);break;case f.cmd:f.func(e,t,n,r),({players:c}=state.MineBall);break;case u.cmd:default:u.func(e,t,n,r)}}function g(e,t){}function y(e,t){}function w(e){const t=e.get("_cardid"),n=getObj("card",t);t&&(t in d||(d[t]=n))}function O(e,t){const n=t.currentHand.split(/,/),r=e.get("currentHand").split(/,/),a=n.find(e=>!r.includes(e));if(a&&a in d){const t=e.get("parentid"),n=d[a];if(delete d[a],t in c){c[t];const e=n.get("name"),r=findObjs({_type:"character",name:e})[0].get("_id"),a=findObjs({type:"graphic",represents:r});if(a.length>0){const e=a[0];log(["Found the token: ",e])}createObj("attribute",{characterid:r,name:"player_id",current:t})}}}m[f.cmd]=f,on("ready",()=>{void 0===state.MineBall?state.MineBall={version:1,players:c}:(Object.keys(state.MineBall.players).forEach(e=>{const t=state.MineBall.players[e].emblem,n=new a(e);n.setEmblem(new r(t.id,t.url,t.name,t.tag)),c[e]=n}),state.MineBall.players=c),on("chat:message",b),on("change:graphic",g),on("change:card",y),on("add:card",w),on("change:hand",O)})}]);