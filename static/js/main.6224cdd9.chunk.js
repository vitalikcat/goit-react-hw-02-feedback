(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={ul:"Statistics_ul__cvpcM",li:"Statistics_li__1hLVV"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__kcmF9"}},,,,,,,function(e,t,a){e.exports={h2:"Section_h2__dLdug"}},function(e,t,a){e.exports={p:"Notification_p__2Fj4S"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),l=a.n(o),r=a(5),i=a(6),s=a(7),u=a(11),d=a(8),m=a(12),b=a(1),p=a.n(b),v=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,l=e.positivePercentage;return c.a.createElement("ul",{className:p.a.ul},c.a.createElement("li",{className:p.a.li},"Good: ",t),c.a.createElement("li",{className:p.a.li},"Neutral: ",a),c.a.createElement("li",{className:p.a.li},"Bad: ",n),c.a.createElement("li",{className:p.a.li}," Total: ",o),c.a.createElement("li",{className:p.a.li},"Positive feedback: ",l,"%"))};v.defaultProps={total:0,positivePercentage:0};var h=v,f=a(2),k=a.n(f),g=function(e){e.options;var t=e.onLeaveFeedback;return c.a.createElement("div",null,c.a.createElement("button",{className:k.a.button,type:"button",name:"good",onClick:t},"Good"),c.a.createElement("button",{className:k.a.button,type:"button",name:"neutral",onClick:t},"Neutral"),c.a.createElement("button",{className:k.a.button,type:"button",name:"bad",onClick:t},"Bad"))},E=a(9),N=a.n(E),_=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:N.a.h2},t),a)},F=a(10),P=a.n(F),y=function(e){var t=e.message;return c.a.createElement("p",{className:P.a.p},t)},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},a.handleClick=function(e){var t=e.target.name;a.setState((function(e,a){return Object(r.a)({},t,e[t]+a.step)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good,t=this.countTotalFeedback();return Math.round(100*e/t)}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement("div",null,c.a.createElement(_,{title:"Please leave feedback"},c.a.createElement(g,{options:this.state,onLeaveFeedback:this.handleClick})),c.a.createElement(_,{title:"Statistics"},this.countTotalFeedback()>0?c.a.createElement(h,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(y,{message:"No feedback given"})))}}]),t}(n.Component);j.defaultProps={step:1},l.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6224cdd9.chunk.js.map