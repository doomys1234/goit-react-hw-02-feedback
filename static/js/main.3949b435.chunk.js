(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={wrap:"Statistics_wrap__1lmm0",text:"Statistics_text__1NZPh"}},,function(t,e,n){t.exports={container:"Feedback_container__32CHx",button:"Feedback_button__3Zdr6"}},function(t,e,n){t.exports={section:"Section_section__2mYr1",title:"Section_title__ikPIm"}},,,function(t,e,n){t.exports={text:"Notification_text__2xbX0"}},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(17),n(11)),i=n(2),u=n(3),l=n(5),b=n(4),d=n(8),j=n.n(d),p=n(0),h=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:j.a.container,children:this.props.options.map((function(e){return Object(p.jsx)("button",{className:j.a.button,type:"button",onClick:function(e){t.props.onClick(e)},children:e},e)}))})}}]),n}(c.a.Component),x=h,O=n(6),f=n.n(O),m=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:f.a.wrap,children:[Object(p.jsxs)("p",{className:f.a.text,children:["Good:",this.props.good]}),Object(p.jsxs)("p",{className:f.a.text,children:["Neutral:",this.props.neutral]}),Object(p.jsxs)("p",{className:f.a.text,children:["Bad:",this.props.bad]}),this.props.total>=1&&Object(p.jsxs)("p",{className:f.a.text,children:["Total:",this.props.total]}),this.props.percentage>0&&Object(p.jsxs)("span",{children:[this.props.percentage,"%"]})]})}}]),n}(c.a.Component),k=m,v=n(9),_=n.n(v);function N(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:_.a.section,children:[Object(p.jsx)("h2",{className:_.a.title,children:e}),n]})}var g=n(12),y=n.n(g);function F(t){var e=t.message;return Object(p.jsx)("p",{className:y.a.text,children:e})}n(19);var w=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={Good:0,Neutral:0,Bad:0},t.handleIncrement=function(e){var n=e.target.textContent;t.setState((function(t){return Object(o.a)({},n,t[n]+1)})),t.countTotalFeedback()},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+=e}))},t.countPositiveFeedbackPercentage=function(){return Math.trunc(t.state.Good/t.countTotalFeedback()*100)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{title:"Please leave your feedback",children:Object(p.jsx)(x,{options:t,onClick:this.handleIncrement})}),Object(p.jsx)(N,{title:"Statistics",children:this.countTotalFeedback()>0?Object(p.jsx)(k,{good:this.state.Good,neutral:this.state.Neutral,bad:this.state.Bad,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(F,{message:"There is no feedback"})})]})}}]),n}(c.a.Component),C=w;r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.3949b435.chunk.js.map