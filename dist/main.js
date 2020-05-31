!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n={};n={help:{cmd:"help",func:(e,t,l,o)=>{const r=Object.keys(n).map(e=>(e=>{const t=e.paramList.join(" ");return`<hr><pre>!mineball ${e.cmd} ${t}</pre><p>${e.desc}</p>`})(n[e])).join("");sendChat("Mine Ball Help","<p>Below is a list of commands available to you for this game.</p>\n        <p>If you provide `--help` after some commands, it will provide additional details. Example:</p>\n        <pre>!minecraft emblem --help</pre>\n        "+r)},desc:"<p>Provides general help, and a list of all commands.",paramList:[]},emblem:{cmd:"emblem",func:(e,t,n,r)=>{if(r.includes("--help"))return void(e=>{const t=o.map(e=>(e=>`<p><img width='30' src='${e.url}'> <code style='border-radius: 0.25em; user-select: all; border: solid black 1px;'>${e.name}</code></p>`)(e)).join("");sendChat("Mine Ball Help","<p>Choose from one of the available emblems below.</p>\n        <p>You cannot choose an emblem if another player has already selected it.</p>\n        <p>To select an emblem, type <code style='background: #F5F5DC'>!mineball emblem &lt;your selection&gt;</code> in the messages. Example:</p>\n        <pre style='background: #F5F5DC; user-select: all; -webkit-user-select: all'>!mineball emblem three-leaves</pre>\n        "+t)})();const a=r.shift(),i=o.map(e=>e.name).indexOf(a);if(null==a||-1===i)return sendChat(t,"Need to provide a valid Emblem choice."),void showHelp(t);n in l||(l[n]=new Player(n));const s=l[n];s.setEmblem(o[i]),sendChat(t,`You are now <img width='30' src='${s.getEmblem().url}'>`)},desc:"Command is used to join the game, and declare/change what emblem will represent you as a player. The emblem will be represented on all of your cards. (--help avail)",paramList:["emblemName"]},whoami:{cmd:"whoami",func:(e,t,n,o)=>{if(n in l){const e=l[n];sendChat(t,`You are <img width='30' src='${e.getEmblem().url}'>`)}else sendChat(t,"You are not yet a player in the game. Use the <code>!mineball help</code> command to understand how to join.")},desc:"Informs you of which emblem belongs to you, and thereby which cards you should control.",paramList:[]}};let l={},o=null;const r=e=>{if("api"!==e.type)return;const t=(getObj("player",e.playerid)||{get:()=>"API"}).get("_displayname"),l=e.playerid,o=e.content.split(/\s+/);if("!mineball"!==o.shift()||0===o.length)return;const r=o.shift();(r in n?n[r]:n.help).func(e,t,l,o)};on("ready",(function(){"use strict";o=JSON.parse(Campaign().get("token_markers")),on("chat:message",r)}))}]);