(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),s=e(3),i=e.n(s),a=(e(13),e(6)),u=e(4),j=e(5),o=e(8),l=e(7),h=(e(14),e(0)),d=function(t){Object(o.a)(e,t);var n=Object(l.a)(e);function e(t){var c;return Object(u.a)(this,e),(c=n.call(this,t)).state={basics:{player:null,computer:null,judgement:null},i18n:null},c.URI="https://localhost/i18n.json",c.LANG="ja",c}return Object(j.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.fetch(this.URI).then((function(t){return t.json()})).then((function(n){return n[t.LANG]})).then((function(n){return t.setState({i18n:n})}))}},{key:"judge",value:function(t,n){return(t!==n)%3}},{key:"handleClick",value:function(t){var n=t,e=Math.floor(4*Math.random()),c=this.judge(e,n);this.setState({basics:{player:n,computer:e,judgement:c}})}},{key:"render",value:function(){var t=this;if(!this.state.i18n)return Object(h.jsx)("div",{children:" Now Loading..."});var n=this.state.i18n,e=n.title,c=n.hands;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:e}),Object(h.jsx)(b,{status:this.state}),Object(h.jsx)(f,{hands:c,onClick:function(n){return t.handleClick(n)}}),Object(h.jsx)("script",{src:"src/Tab.jsx"})]})}}]),e}(r.a.Component),b=function(t){var n=t.status.basics,e=n.player,c=n.computer,r=n.judgement,s=t.status.i18n,i=s.hands,u=s.judgements,j=s.header,o=[[j[1],i[c]],[j[2],u[r]],[j[0],i[e]]];return Object(h.jsx)("div",{class:"jundgements",children:Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:o.map((function(t){var n=Object(a.a)(t,2),e=n[0],c=n[1];return Object(h.jsxs)("tr",{children:[Object(h.jsx)("h3",{children:Object(h.jsx)("th",{children:e})}),Object(h.jsx)("td",{children:c})]},e)}))})})})},f=function(t){var n=t.hands,e=t.onClick;return Object(h.jsxs)(h.Fragment,{children:["\u3000\u3000\u3000",Object(h.jsx)("div",{class:"button-area",children:n.map((function(t,n){return Object(h.jsx)("button",{onClick:function(){return e(n)},children:t},t)}))})]})},O=d,m=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,s=n.getLCP,i=n.getTTFB;e(t),c(t),r(t),s(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a8a3f75e.chunk.js.map