(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Logo.3f152699.svg"},,,function(e,t,n){e.exports=n(33)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),l=n(2),s=n(7),u=n(10),o=n(8),m=n(11),f=(n(18),n(9)),d=n.n(f);function p(e){var t=e.split("."),n=t[0],a=t[1],r="20"+t[2],c=new Date(r,a-1,n).getDay();return"".concat(n," ").concat(["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"][a-1]," ").concat(r,", ").concat(["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"][c])}var v=function(e){var t,n=e.currency,a=e.item,c=a.origin,i=a.origin_name,l=a.destination,s=a.destination_name,u=a.departure_date,o=a.departure_time,m=a.arrival_date,f=a.arrival_time,v=(a.carrier,a.stops),E=a.price;return r.a.createElement("li",{className:"ticket-list-item"},r.a.createElement("div",{className:"ticket-list-item__offer"},r.a.createElement("img",{src:d.a,className:"ticket-list-item__logo",alt:""}),r.a.createElement("button",{className:"buyBtn"},r.a.createElement("span",{className:"buyBtn-text"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",function(e,t){var n=" \u20bd";return"rub"===e?t+n:("usd"===e&&(t/=65.61,n=" $"),"eur"===e&&(t/=74.88,n=" \u20ac"),t.toFixed(3).toString().slice(0,-1)+n)}(n,E)))),r.a.createElement("div",{className:"ticket-list-item__details"},r.a.createElement("div",{className:"ticket-list-item__content"},r.a.createElement("div",{className:"ticket-list-item__origin"},r.a.createElement("span",{className:"time"},o," "),r.a.createElement("span",{className:"name"},c,", ",i),r.a.createElement("span",{className:"date"},p(u)," ")),r.a.createElement("div",{className:"ticket-list-item__stops"},r.a.createElement("span",null,v," ",[0,5,6,7,8,9].indexOf((t=v)%10)>-1?"\u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a":t%10===1?"\u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0410":"\u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0418")),r.a.createElement("div",{className:"ticket-list-item__destination"},r.a.createElement("span",{className:"time"}," ",f," "),r.a.createElement("span",{className:"name"},s,", ",l),r.a.createElement("span",{className:"date"},p(m)," ")))))},E=(n(20),100),b=function(e){var t=e.currency,n=e.items.map(function(e){return r.a.createElement(v,{currency:t,key:E++,item:e})});return r.a.createElement("ul",null," ",n," ")},h=(n(22),n(25),[{name:"rub",label:"RUB"},{name:"usd",label:"USD"},{name:"eur",label:"EUR"}]),g=function(e){var t=e.filter,n=e.onCurrencyChange,a=h.map(function(e){var a=e.name,c=e.label,i="btn "+(a===t?"active":"");return r.a.createElement("button",{key:a,type:"button",onClick:function(){return n(a)},className:i},c)});return r.a.createElement("div",{className:"currency-filter"},r.a.createElement("span",null,"\u0432\u0430\u043b\u044e\u0442\u0430"),r.a.createElement("div",{className:"btn-group"},a))},k=n(4),N=(n(27),[{name:-1,label:"\u0412\u0441\u0435"},{name:0,label:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},{name:1,label:"\u041e\u0434\u043d\u0430 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"},{name:2,label:"\u0414\u0432\u0435 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"},{name:3,label:"\u0422\u0440\u0438 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}]),y=function(e){var t=e.filter,n=e.onStopsFilter,a=N.map(function(e){var a=e.name,c=e.label,i=t.indexOf(a)>-1;return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("label",null,r.a.createElement("input",{checked:i,onChange:function(){return function(e,a){var r=t;if(-1===e&&a)r=[];else if(-1!==e||a)if(a){5===r.length&&r.splice(r.indexOf(-1),1);var c=r.indexOf(e);r=[].concat(Object(k.a)(r.slice(0,c)),Object(k.a)(r.slice(c+1)))}else r.push(e),4===r.length&&-1===r.indexOf(-1)&&r.unshift(-1);else r=[-1,0,1,2,3];n(r)}(a,i)},type:"checkbox"}),r.a.createElement("span",{className:"checkbox"}),r.a.createElement("span",null,c)))});return r.a.createElement("div",{className:"stops-filter"},r.a.createElement("span",{className:"amount"},"\u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a"),a)},_=n(1),x=n.n(_),O=n(3),w=function e(){var t=this;Object(l.a)(this,e),this.getResource=function(){var e=Object(O.a)(x.a.mark(function e(t){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getTickets=function(){var e=Object(O.a)(x.a.mark(function e(n){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(n);case 2:return a=e.sent,e.abrupt("return",a.tickets);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},j=(n(31),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).service=new w,n.state={tickets:[],currencyValue:"rub",filters:[0],isLoading:!0},n.onFilter=function(e){var t=n.state.filters;return t.indexOf(-1)>-1?e:e.filter(function(e){return t.indexOf(e.stops)>-1})},n.onStopsFilter=function(e){n.setState({filters:e})},n.OnCurrencyChange=function(e){n.setState({currencyValue:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getTickets("https://raw.githubusercontent.com/villione/aviasales-demo/master/src/tickets.json").then(function(t){return e.setState({tickets:t,isLoading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.tickets,n=e.filters,a=e.currencyValue;if(e.isLoading)return r.a.createElement(j,null);var c=this.onFilter(t.sort(function(e,t){return e.price-t.price}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"conteiner"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"filters"},r.a.createElement(g,{filter:a,onCurrencyChange:this.OnCurrencyChange}),r.a.createElement(y,{filter:n,onStopsFilter:this.onStopsFilter}))),r.a.createElement(b,{currency:a,items:c})))}}]),t}(a.Component);i.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.05433e79.chunk.js.map