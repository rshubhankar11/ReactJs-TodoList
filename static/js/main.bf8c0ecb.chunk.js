(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(46)},35:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(23),r=a.n(o),c=(a(35),a(25)),i=a(7),m=(a(37),a(39),a(14)),u=a(17);function s(e){return l.a.createElement("div",null,l.a.createElement(m.a,{fill:!0,variant:"tabs",defaultActiveKey:"/home"},l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{as:u.b,to:"/todos"},"My Todo List")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{as:u.b,to:"/addTodo"},"Add Todo")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{as:u.b,to:"/about"},"About"))))}s.defaultProps={title:"Your Title Here"};var d=function(){return l.a.createElement("footer",{className:"fixed-bottom bg-dark text-light py-3"},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 Rabiroshan Shubhankar"))},E=a(19),f=a(11),h=function(e){return l.a.createElement("div",null,l.a.createElement(f.a,{className:"text-center my-3"},l.a.createElement(f.a.Header,null,e.todoItem.title),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Text,null,e.todoItem.desc),l.a.createElement(E.a,{variant:"outline-danger",onClick:function(){e.onDelete(e.todoItem)}},"Delete"))))},b=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container my-3",style:{minHeight:"70vh"}},l.a.createElement("h3",{className:"text-center my-3"},"Todos List"),0===e.todos.length?l.a.createElement(f.a,{className:"text-center"},l.a.createElement(f.a.Body,null,"No Todos to display")):e.todos.map(function(t){return l.a.createElement(h,{todoItem:t,key:t.id,onDelete:e.onDelete})})))},g=a(15),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),u=m[0],s=m[1];return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",{className:"text-center"},"Add Todo"),l.a.createElement(g.a,{onSubmit:function(t){t.preventDefault(),o&&u?(r(""),s("")):alert("Title and Description are madatory"),e.addTodo(o,u)}},l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,{htmlFor:"disabledTextInput"},"Title"),l.a.createElement(g.a.Control,{id:"title",value:o,onChange:function(e){e.preventDefault(),r(e.target.value)},placeholder:"Title"})),l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,{htmlFor:"disabledTextInput"},"Description"),l.a.createElement(g.a.Control,{id:"desc",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Description"})),l.a.createElement(E.a,{type:"submit"},"Add")))},v=function(){return l.a.createElement("div",{className:"col d-flex justify-content-center my3"},["Info"].map(function(e){return l.a.createElement(f.a,{bg:e.toLowerCase(),key:e,text:"light"===e.toLowerCase()?"dark":"white",style:{width:"50rem"},className:" mb-2"},l.a.createElement(f.a.Header,null,"This is about Components"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,e," "),l.a.createElement(f.a.Text,null,"I am Rabiroshan Shubhankar author of this project . This is completely build wit React Js for styling we have used Bootsrap. In feature this about page will get an update.")))}))},y=a(1);var T=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(i.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(o))},[o]),l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(s,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/addTodo",element:l.a.createElement(p,{addTodo:function(e,t){console.log("I am adding this todo",e);var a={id:0===o.length?0:o[o.length-1].id+1,title:e,desc:t};r([].concat(Object(c.a)(o),[a])),console.log(a)}})}),l.a.createElement(y.a,{exact:!0,path:"/todos",element:l.a.createElement(b,{todos:o,onDelete:function(e){console.log("I am on delete",e),r(o.filter(function(t){return t!==e})),localStorage.setItem("todos",JSON.stringify(o))}})}),l.a.createElement(y.a,{exact:!0,path:"/about",element:l.a.createElement(v,null)})),l.a.createElement(d,null)))},I=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,47)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null))),I()}},[[26,3,2]]]);
//# sourceMappingURL=main.bf8c0ecb.chunk.js.map