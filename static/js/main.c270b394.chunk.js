(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n(94)},54:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),u=n(44),s=(n(54),n(41)),i=n.n(s),l=n(23),p=n(2),g=n.n(p),f=n(7),d=n(34),h=n(35),v=n(46),b=n(36),y=n(47),m=n(13),k=n(14),w=n(9),O=n.n(w);O.a.defaults.baseURL="https://api.chucknorris.io/",O.a.defaults.headers.post["Content-Type"]="application/json",O.a.defaults.headers.post.headers={"Access-Control-Allow-Origin":"*"},O.a.interceptors.response.use(function(e){return e.data},function(){var e=Object(f.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.response)){e.next=5;break}if(404!==n.status){e.next=4;break}return e.abrupt("return",{error:{status:n.status,message:"NotFound"}});case 4:return e.abrupt("return",{error:{status:n.status,message:n.data.error}});case 5:return e.abrupt("return",{error:{status:500,message:"Error500"}});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var j=O.a,C=function(){var e=Object(f.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.get("jokes/random?category=".concat(t)));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.get("jokes/categories"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=n(38);function J(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 10em;\n  margin: 1em;\n"]);return J=function(){return e},e}function A(){var e=Object(m.a)(["\n  font-size: xx-large;\n  margin: auto;\n  position: absolute;\n  width: 70%;\n  top: 35%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);return A=function(){return e},e}function D(){var e=Object(m.a)(["\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return D=function(){return e},e}var K=Object(k.a)("div")(D()),L=Object(k.a)("div")(A()),S=Object(k.a)(E.a)(J()),F=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={joke:{},categories:[],selectedCategory:{label:"dev",value:"dev"}},n.getJoke=function(){var e=Object(f.a)(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:(r=e.sent)&&n.setState({joke:r});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.getCategories=Object(f.a)(g.a.mark(function e(){var t,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:(t=e.sent)&&(r=t.map(function(e){return{label:e,value:e}}),n.setState({categories:r}));case 4:case"end":return e.stop()}},e)})),n.handleKeyboardDown=function(e){var t=e.keyCode;t>=65&&t<=90||32===t?n.getJoke(n.state.selectedCategory.value):t>=37&&t<=40&&n.onArrowChangeCategory(t)},n.onArrowChangeCategory=function(e){var t=n.state,r=t.selectedCategory,a=t.categories,o=a.map(function(e){return e.value}).indexOf(r.value);38===e||37===e?o>0?n.changeOptionCategory(a[o-1]):n.changeOptionCategory(a[a.length-1]):39!==e&&40!==e||(o===a.length-1?n.changeOptionCategory(a[0]):n.changeOptionCategory(a[o+1]))},n.changeOptionCategory=function(e){n.setState({selectedCategory:e}),n.getJoke(e.value)},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getJoke(this.state.selectedCategory.value),this.getCategories(),document.addEventListener("keydown",this.handleKeyboardDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyboardDown)}},{key:"render",value:function(){var e=this.state,t=e.joke.value,n=e.categories,o=e.selectedCategory;return a.a.createElement(r.Fragment,null,a.a.createElement(S,{theme:function(e){return Object(l.a)({},e,{borderRadius:0,colors:Object(l.a)({},e.colors,{primary25:"lightgrey",primary:"black"})})},options:n,onChange:this.changeOptionCategory,defaultValue:o,value:o}),a.a.createElement(K,null,a.a.createElement(L,null,t)))}}]),t}(r.Component),R=i()({basename:"http://sidletsky.github.io/chuck"});c.a.render(a.a.createElement(u.a,{history:R},a.a.createElement(F,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c270b394.chunk.js.map