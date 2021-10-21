(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(9),c=n.n(a),r=n(7),i=n(6),s=n(2),l=n(3),u=n(5),d=n(4),b=(n(15),n(0)),m=function(t){var e=t.todoCount,n=t.doneCount;return Object(b.jsxs)("div",{className:"app-header d-flex",children:[Object(b.jsx)("h1",{children:"Todo List"}),Object(b.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},f=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onSearchChange=function(e){console.log(e.target.value);var n=e.target.value;t.props.searchChange(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:this.onSearchChange})}}]),n}(o.Component)),j=n(10),h=(n(18),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.done,o=t.important,a=t.onDeleted,c=t.onToggleImportant,r=t.onToggleDone,i="todo-list-item";return n&&(i+=" done"),o&&(i+=" important"),Object(b.jsxs)("span",{className:i,children:[Object(b.jsx)("span",{className:"todo-list-item-label",onClick:r,children:e}),Object(b.jsx)("button",{type:"button",onClick:c,className:"btn btn-outline-success btn-sm float-right",children:Object(b.jsx)("i",{className:"fa fa-exclamation"})}),Object(b.jsx)("button",{type:"button",onClick:a,className:"btn btn-outline-danger btn-sm float-right",children:Object(b.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),p=(n(19),["id"]),O=function(t){var e=t.todos,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,c=e.map((function(t){var e=t.id,c=Object(j.a)(t,p);return Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(h,Object(i.a)(Object(i.a)({},c),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},e)}));return Object(b.jsx)("ul",{className:"list-group todo-list",children:c})},g=(n(20),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.itemStatus,n=t.onItemStatus,o=this.buttons.map((function(t){var o=t.name,a=t.label,c=e===o;console.log(e);var r=c?"btn-info":"btn-outline-secondary";return Object(b.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return n(o)},children:a},o)}));return Object(b.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component)),v=g,x=(n(21),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"todo-add-item-type d-flex",onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",placeholder:"type to add",className:"form-control",onChange:this.onLabelChange,value:this.state.label}),Object(b.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}}]),n}(o.Component)),y=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).maxId=10,t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")],term:"",itemStatus:"All"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e})),a=n.slice();a.splice(o,1);return{todoData:a}}))},t.onItemAdded=function(e){t.setState((function(n){var o=n.todoData,a=t.createTodoItem(e);return{todoData:o.concat(a)}}))},t.onToggleImportant=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e})),a=n[o],c=Object(i.a)(Object(i.a)({},a),{},{important:!a.important});return{todoData:[].concat(Object(r.a)(n.slice(0,o)),[c],Object(r.a)(n.slice(o+1)))}}))},t.onToggleDone=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e})),a=n[o],c=Object(i.a)(Object(i.a)({},a),{},{done:!a.done});return{todoData:[].concat(Object(r.a)(n.slice(0,o)),[c],Object(r.a)(n.slice(o+1)))}}))},t.searchChange=function(e){t.setState((function(t){t.term;return{term:e}}))},t.onItemStatus=function(e){t.setState((function(t){t.itemStatus;return{itemStatus:e}}))},t}return Object(l.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"itemStatusFilter",value:function(t,e){switch(e){default:return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}))}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,o=t.itemStatus,a=e.filter((function(t){return t.done})).length,c=e.length-a,r=this.itemStatusFilter(this.search(e,n),o);return Object(b.jsxs)("div",{className:"todo-app",children:[Object(b.jsx)(m,{doneCount:a,todoCount:c}),Object(b.jsxs)("div",{className:"top-panel d-flex",children:[Object(b.jsx)(f,{searchChange:this.searchChange}),Object(b.jsx)(v,{itemStatus:o,onItemStatus:this.onItemStatus})]}),Object(b.jsx)(O,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(b.jsx)("div",{className:"todo-add-item-block",children:Object(b.jsx)(x,{onItemAdded:this.onItemAdded})})]})}}]),n}(o.Component);n(22);c.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.fc6e129e.chunk.js.map