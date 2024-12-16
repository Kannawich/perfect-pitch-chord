(function(){var e={9308:function(e,s,t){"use strict";var n=t(3751),a=t(641);function i(e,s,t,n,i,o){const c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(c)}var o={name:"App"},c=t(6262);const l=(0,c.A)(o,[["render",i]]);var r=l,u=t(33);const h={lang:"en"},d={class:"container"},m={class:"text-center"},p={class:"progress"},v={class:"progress-text"},f={id:"bar"},b={class:"progress-text"},w={class:"modal"},y={class:"message"},k={class:"keys"},g=["onClick","data-name"],C={class:"inside"},_={class:"choices-container"},L=["onClick"],A={class:"inside"},Q={class:"choices-container"},x=["onClick"],E={key:0};function G(e,s,t,i,o,c){return(0,a.uX)(),(0,a.CE)("html",h,[s[17]||(s[17]=(0,a.Lk)("head",null,[(0,a.Lk)("meta",{charset:"UTF-8"}),(0,a.Lk)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.Lk)("title",null,"Perfect Pitch Chord Training")],-1)),(0,a.Lk)("body",null,[(0,a.Lk)("div",d,[s[16]||(s[16]=(0,a.Lk)("header",null,[(0,a.Lk)("h1",{class:"text-center"},"Perfect Pitch Chord Practice")],-1)),(0,a.Lk)("div",m,[(0,a.bo)((0,a.Lk)("div",p,[(0,a.Lk)("span",v,[s[8]||(s[8]=(0,a.eW)(" Question Number")),s[9]||(s[9]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" "+(0,u.v_)(o.currentQuestion)+" / "+(0,u.v_)(o.numQuestions),1)]),(0,a.bo)((0,a.Lk)("div",f,[(0,a.Lk)("div",{id:"inbar",style:(0,u.Tr)({width:c.progressWidth()})},[(0,a.Lk)("div",{id:"corbar",style:(0,u.Tr)({width:c.progressRightWidth()})},null,4)],4)],512),[[n.aG,o.started]]),(0,a.Lk)("span",b,[s[10]||(s[10]=(0,a.eW)(" Right Answer")),s[11]||(s[11]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)(" "+(0,u.v_)(e.rightAnswer)+" / "+(0,u.v_)(o.numQuestions),1)])],512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("div",w,[(0,a.Lk)("div",y,[s[13]||(s[13]=(0,a.Lk)("h2",null,"Ok You Just finished",-1)),(0,a.Lk)("p",null,[(0,a.eW)("Your Score: "+(0,u.v_)(e.rightAnswer)+" / "+(0,u.v_)(o.numQuestions),1),s[12]||(s[12]=(0,a.Lk)("br",null,null,-1)),(0,a.eW)((0,u.v_)(o.finishmes),1)]),(0,a.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>c.restart&&c.restart(...e)),class:"option"},"Restart"),(0,a.Lk)("button",{onClick:s[1]||(s[1]=(...e)=>c.closePopup&&c.closePopup(...e)),class:"option"},"Close")])],512),[[n.aG,o.finish]]),(0,a.bo)((0,a.Lk)("button",{ref:"opt1",onClick:s[2]||(s[2]=e=>c.nextQuestion()),class:"option"},(0,u.v_)(0===o.currentQuestion?"Start Listen":"Hear Next"),513),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("button",{ref:"opt2",onClick:s[3]||(s[3]=e=>c.replay()),class:"option"},"Hear Again",512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("button",{ref:"opt3",onClick:s[4]||(s[4]=e=>c.indi()),class:"option"},"Play Individial Note",512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("button",{ref:"opt4",onClick:s[5]||(s[5]=e=>c.display()),class:"option"},"Display On Keyboard",512),[[n.aG,o.started]]),(0,a.Lk)("ul",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.keys,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.name,class:(0,u.C4)(e.class),onClick:s=>c.playTune(e.name),"data-name":e.name},[(0,a.Lk)("span",null,(0,u.v_)(e.label),1)],10,g)))),128))]),(0,a.bo)((0,a.Lk)("h2",C,"Tonic",512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("div",_,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.tonics,(e=>((0,a.uX)(),(0,a.CE)("button",{key:e.name,class:(0,u.C4)([e.class,{"active-choice":e.selected}]),onClick:s=>c.selectTonic(e.name)},(0,u.v_)(e.name),11,L)))),128))],512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("h2",A,"Quality",512),[[n.aG,o.started]]),(0,a.bo)((0,a.Lk)("div",Q,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.qualities,(e=>((0,a.uX)(),(0,a.CE)("button",{key:e.name,class:(0,u.C4)([e.class,{"active-choice":e.selected}]),onClick:s=>c.selectQuality(e.name)},(0,u.v_)(e.name),11,x)))),128))],512),[[n.aG,o.started]]),o.started?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",E,[s[14]||(s[14]=(0,a.Lk)("h2",null,"Select Number Of Questions",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number",class:"start dis","onUpdate:modelValue":s[6]||(s[6]=e=>o.numQuestions=e),min:"0",max:"500"},null,512),[[n.Jo,o.numQuestions]]),s[15]||(s[15]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{class:"start dis",onClick:s[7]||(s[7]=(...e)=>c.startGame&&c.startGame(...e))},"Start")]))])])])])}t(4114),t(8992),t(3949);var T={name:"PerfectPitch",mounted(){let e=localStorage.getItem("user-info");console.log("User Info:",e),document.body.classList.add("test-page-background")},beforeUnmount(){document.body.classList.remove("test-page-background")},data(){return{started:!1,numQuestions:0,currentQuestion:0,userTonic:null,userQuality:null,finish:!1,finishmes:null,tonics:[{name:"A",class:"choices",selected:!1},{name:"A#",class:"choices",selected:!1},{name:"B",class:"choices",selected:!1},{name:"C",class:"choices",selected:!1},{name:"C#",class:"choices",selected:!1},{name:"D",class:"choices",selected:!1},{name:"D#",class:"choices",selected:!1},{name:"E",class:"choices",selected:!1},{name:"F",class:"choices",selected:!1},{name:"F#",class:"choices",selected:!1},{name:"G",class:"choices",selected:!1},{name:"G#",class:"choices",selected:!1}],qualities:[{name:"Major",class:"choices",selected:!1},{name:"Minor",class:"choices",selected:!1},{name:"Diminished",class:"choices",selected:!1},{name:"Augmented",class:"choices",selected:!1},{name:"Dominant Seventh",class:"choices",selected:!1},{name:"Minor Seventh",class:"choices",selected:!1},{name:"Major Seventh",class:"choices",selected:!1}],keys:[{name:"C3",label:"C",class:"key w",sound:"C3.wav"},{name:"C_3",label:"C#",class:"key b",sound:"C_3.wav"},{name:"D3",label:"D",class:"key w",sound:"D3.wav"},{name:"D_3",label:"D#",class:"key b",sound:"D_3.wav"},{name:"E3",label:"E",class:"key w",sound:"E3.wav"},{name:"F3",label:"F",class:"key w",sound:"F3.wav"},{name:"F_3",label:"F#",class:"key b",sound:"F_3.wav"},{name:"G3",label:"G",class:"key w",sound:"G3.wav"},{name:"G_3",label:"G#",class:"key b",sound:"G_3.wav"},{name:"A3",label:"A",class:"key w",sound:"A3.wav"},{name:"A_3",label:"A#",class:"key b",sound:"A_3.wav"},{name:"B3",label:"B",class:"key w",sound:"B3.wav"},{name:"C4",label:"C",class:"key w",sound:"C4.wav"},{name:"C_4",label:"C#",class:"key b",sound:"C_4.wav"},{name:"D4",label:"D",class:"key w",sound:"D4.wav"},{name:"D_4",label:"D#",class:"key b",sound:"D_4.wav"},{name:"E4",label:"E",class:"key w",sound:"E4.wav"},{name:"F4",label:"F",class:"key w",sound:"F4.wav"},{name:"F_4",label:"F#",class:"key b",sound:"F_4.wav"},{name:"G4",label:"G",class:"key w",sound:"G4.wav"},{name:"G_4",label:"G#",class:"key b",sound:"G#4.wav"},{name:"A4",label:"A",class:"key w",sound:"A4.wav"},{name:"A_4",label:"A#",class:"key b",sound:"A_4.wav"},{name:"B4",label:"B",class:"key w",sound:"B4.wav"}],ListofChords:[[4,7],[-8,-5],[-5,4],[3,7],[-9,-5],[-5,3],[3,6],[-9,-6],[-6,3],[4,8],[-8,-4],[-4,4],[4,7,10],[-8,-5,-2],[-5,-2,4],[-2,4,7],[3,7,10],[-9,-5,-2],[-5,-2,3],[-2,3,7],[4,7,11],[-8,-5,-1],[-5,-1,4],[-1,4,7]]}},methods:{startGame(){this.started=!0,this.currentQuestion=0,this.rightAnswer=0,this.finish=!1},restart(){this.started=!1,this.finish=!1},playTune(e){try{const s=t(7083),n=s(`./${e}.wav`),a=new Audio(n);a.play()}catch(s){console.error(`Failed to load sound file: ${e}`,s)}},playTune_chord(e){try{const s=t(7083),n=s(`./${e}.wav`),a=new Audio(n);a.volume=.45,a.play()}catch(s){console.error(`Failed to load sound file: ${e}`,s)}},getRandomInt(e){return Math.floor(Math.random()*e)},nextQuestion(){if(this.tonics.forEach((e=>e.selected=!1)),this.qualities.forEach((e=>e.selected=!1)),this.currentQuestion<this.numQuestions){this.currentQuestion++,this.play=[];let e=this.getRandomInt(24)+1,s=this.getRandomInt(this.ListofChords.length);while(e+this.ListofChords[s][0]<1||e+this.ListofChords[s][this.ListofChords[s].length-1]>24)e=this.getRandomInt(24)+1,s=this.getRandomInt(this.ListofChords.length);this.selectedTonic=this.keys[e-1].label,this.selectedQuality=this.checkQuality(s);const t=this.keys[e-1].name;this.play.push(e-1),this.playTune_chord(t),this.ListofChords[s].forEach((s=>{const t=this.keys[e-1+s].name;this.play.push(e-1+s),this.playTune_chord(t)})),console.log(this.currentQuestion,this.numQuestions)}else this.popup()},replay(){this.play&&this.play.length>0?this.play.forEach((e=>{const s=this.keys[e].name;this.playTune_chord(s)})):console.error("No sound has been played yet to replay.")},indi(){let e=0;if(this.play&&this.play.length>0){const s=this.play.slice().sort(((e,s)=>e-s));s.forEach((s=>{const t=this.keys[s].name;setTimeout((()=>{this.playTune_chord(t)}),e),e+=500}))}else console.error("No sound has been played yet to replay.")},display(){let e=0;if(this.play&&this.play.length>0){const s=this.play.slice().sort(((e,s)=>e-s));s.forEach((s=>{const t=this.keys[s].name,n=document.querySelector(`.keys li[data-name="${t}"]`);setTimeout((()=>{n.classList.add("playing"),this.playTune_chord(t),setTimeout((()=>{n.classList.remove("playing")}),500)}),e),e+=500}))}else console.error("No sound has been played yet to replay.")},checkQuality(e){return e>=20?this.qualities[6].name:e>=16?this.qualities[5].name:e>=12?this.qualities[4].name:e>=9?this.qualities[3].name:e>=6?this.qualities[2].name:e>=3?this.qualities[1].name:this.qualities[0].name},selectTonic(e){this.tonics.forEach((s=>{s.selected=s.name===e})),this.userTonic=e,this.checkAnswer()},selectQuality(e){this.qualities.forEach((s=>{s.selected=s.name===e})),this.userQuality=e,this.checkAnswer()},checkAnswer(){this.userTonic&&this.userQuality&&("Augmented"===this.selectedQuality&&(this.userTonic=this.aug_handle(this.userTonic),this.selectedTonic=this.aug_handle(this.selectedTonic)),this.userTonic===this.selectedTonic&&this.userQuality===this.selectedQuality?(this.rightAnswer++,alert("Correct!")):alert("Fuck Off!"),this.userTonic&&this.userQuality&&this.popup(),this.nextQuestion(),this.userTonic=null,this.userQuality=null)},popup(){this.currentQuestion>=this.numQuestions&&(this.finish=!0,this.rightAnswer<=this.numQuestions/3?this.finishmes="You Suck lol":this.rightAnswer>this.numQuestions/3&&this.rightAnswer<=this.numQuestions/3*2?this.finishmes="Go Practice more even you can't":this.finishmes="I Hate You, You Perfect Pitch bastard")},aug_handle(e){return"E"===e||"G#"===e?"C":"F"===e||"A"===e?"C#":"F#"===e||"A#"===e?"D":"G"===e||"B"===e?"D#":e},progressWidth(){return this.currentQuestion/this.numQuestions*100+"%"},progressRightWidth(){return this.rightAnswer/this.currentQuestion*100+"%"},closePopup(){this.finish=!1}}};const F=(0,c.A)(T,[["render",G]]);var D=F,O=t.p+"img/image.005e3edb.png";const P={class:"register"};function S(e,s,t,i,o,c){return(0,a.uX)(),(0,a.CE)(a.FK,null,[s[4]||(s[4]=(0,a.Lk)("h1",{class:"texttop"},[(0,a.eW)("Please DO NOT Enter your real information here"),(0,a.Lk)("br"),(0,a.eW)("Just want to test something")],-1)),s[5]||(s[5]=(0,a.Lk)("img",{alt:"Vue logo",src:O,class:"logo"},null,-1)),s[6]||(s[6]=(0,a.Lk)("h2",null,"Sign up",-1)),(0,a.Lk)("div",P,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.name=e),placeholder:"Enter Name"},null,512),[[n.Jo,o.name]]),(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=e=>o.email=e),placeholder:"Enter Email"},null,512),[[n.Jo,o.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>o.password=e),placeholder:"Enter Password"},null,512),[[n.Jo,o.password]]),(0,a.Lk)("button",{onClick:s[3]||(s[3]=(...e)=>c.signUp&&c.signUp(...e))},"Sign Up")])],64)}var U={name:"SignUp",data(){return{name:"",email:"",password:""}},methods:{async signUp(){this.$router.push({name:"Test"})}},mounted(){let e=localStorage.getItem("user-info");e&&this.$router.push({name:"Test"})}};const B=(0,c.A)(U,[["render",S]]);var I=B,W=t(6166);const q=[{name:"Test",component:D,meta:{bodyClass:"test-page-background"},path:"/"},{name:"SignUp",component:I,path:"/sign-up"}],j=(0,W.aE)({history:(0,W.Bt)(),routes:q});j.beforeEach(((e,s,t)=>{s.meta.bodyClass&&document.body.classList.remove(s.meta.bodyClass),e.meta.bodyClass&&document.body.classList.add(e.meta.bodyClass),t()}));var N=j;(0,n.Ef)(r).use(N).mount("#app")},7083:function(e,s,t){var n={"./A3.wav":6722,"./A4.wav":8745,"./A_3.wav":3605,"./A_4.wav":3590,"./B3.wav":9139,"./B4.wav":6360,"./C3.wav":5148,"./C4.wav":8799,"./C_3.wav":5023,"./C_4.wav":5292,"./D3.wav":8885,"./D4.wav":2422,"./D_3.wav":2184,"./D_4.wav":1699,"./E3.wav":7254,"./E4.wav":7349,"./F3.wav":932,"./F4.wav":8948,"./F_3.wav":4898,"./F_4.wav":4185,"./G3.wav":4096,"./G4.wav":3979,"./G_3.wav":2083,"./G_4.wav":7272};function a(e){var s=i(e);return t(s)}function i(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=7083},6722:function(e,s,t){"use strict";e.exports=t.p+"media/A3.618b6345.wav"},8745:function(e,s,t){"use strict";e.exports=t.p+"media/A4.bc0975c9.wav"},3605:function(e,s,t){"use strict";e.exports=t.p+"media/A_3.9380b6f4.wav"},3590:function(e,s,t){"use strict";e.exports=t.p+"media/A_4.46df8cdb.wav"},9139:function(e,s,t){"use strict";e.exports=t.p+"media/B3.dc27c5bd.wav"},6360:function(e,s,t){"use strict";e.exports=t.p+"media/B4.d53a628e.wav"},5148:function(e,s,t){"use strict";e.exports=t.p+"media/C3.9b063981.wav"},8799:function(e,s,t){"use strict";e.exports=t.p+"media/C4.4b0f5bc4.wav"},5023:function(e,s,t){"use strict";e.exports=t.p+"media/C_3.9f0e2fb5.wav"},5292:function(e,s,t){"use strict";e.exports=t.p+"media/C_4.789b7963.wav"},8885:function(e,s,t){"use strict";e.exports=t.p+"media/D3.9c99a3a5.wav"},2422:function(e,s,t){"use strict";e.exports=t.p+"media/D4.7a8e6c4e.wav"},2184:function(e,s,t){"use strict";e.exports=t.p+"media/D_3.188ec083.wav"},1699:function(e,s,t){"use strict";e.exports=t.p+"media/D_4.7b7ffc69.wav"},7254:function(e,s,t){"use strict";e.exports=t.p+"media/E3.fa9304b2.wav"},7349:function(e,s,t){"use strict";e.exports=t.p+"media/E4.4c6129b1.wav"},932:function(e,s,t){"use strict";e.exports=t.p+"media/F3.9248b816.wav"},8948:function(e,s,t){"use strict";e.exports=t.p+"media/F4.6c72f8c9.wav"},4898:function(e,s,t){"use strict";e.exports=t.p+"media/F_3.b437c268.wav"},4185:function(e,s,t){"use strict";e.exports=t.p+"media/F_4.5fb1b578.wav"},4096:function(e,s,t){"use strict";e.exports=t.p+"media/G3.c410d736.wav"},3979:function(e,s,t){"use strict";e.exports=t.p+"media/G4.c0befcec.wav"},2083:function(e,s,t){"use strict";e.exports=t.p+"media/G_3.46660f75.wav"},7272:function(e,s,t){"use strict";e.exports=t.p+"media/G_4.2839af2f.wav"}},s={};function t(n){var a=s[n];if(void 0!==a)return a.exports;var i=s[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(s,n,a,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],i=e[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(c=!1,i<o&&(o=i));if(c){e.splice(u--,1);var r=a();void 0!==r&&(s=r)}}return s}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/perfect-pitch-chord/"}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var a,i,o=n[0],c=n[1],l=n[2],r=0;if(o.some((function(s){return 0!==e[s]}))){for(a in c)t.o(c,a)&&(t.m[a]=c[a]);if(l)var u=l(t)}for(s&&s(n);r<o.length;r++)i=o[r],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self["webpackChunktest_project"]=self["webpackChunktest_project"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9308)}));n=t.O(n)})();
//# sourceMappingURL=app.008e7bc7.js.map