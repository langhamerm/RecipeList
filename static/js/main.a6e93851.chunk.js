(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(10),s=a(11),u=a(12),o=a(15),m=a(13),p=a(16);a(22);var h=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"React Recipes"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.recipepuppy.com/about/api/"},"Powered by Recipe Puppy"))};a(23);var d=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Recipes"))};var f=function(e){return r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))};var E=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,c=e.children,l=e.onClick;return r.a.createElement("button",{onClick:l,className:["btn btn-lg","btn-".concat(a),n].join(" ")},c)},v=a(14),b=a.n(v),g={getRecipes:function(e){return b.a.get("/api/recipes",{params:{q:e}})}};a(42);var N=function(e){var t=e.src;return r.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Recipe Image",style:{backgroundImage:"url(".concat(t,")")}})};function y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function k(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}function j(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function x(e){var t=e.thumbnail,a=void 0===t?"https://placehold.it/300x300":t,n=e.title,c=e.ingredients,l=e.href;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(w,{size:"xs-4 sm-2"},r.a.createElement(N,{src:a})),r.a.createElement(w,{size:"xs-8 sm-9"},r.a.createElement("h3",null,n),r.a.createElement("p",null,"Ingredients: ",c),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:l},"Go to recipe!")))))}var R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],recipeSearch:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),g.getRecipes(a.state.recipeSearch).then(function(e){console.log(e.data),a.setState({recipes:e.data})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(w,{size:"md-12"},r.a.createElement("form",null,r.a.createElement(y,null,r.a.createElement(k,null,r.a.createElement(w,{size:"xs-9 sm-10"},r.a.createElement(f,{name:"recipeSearch",value:this.state.recipeSearch,onChange:this.handleInputChange,placeholder:"Search For a Recipe"})),r.a.createElement(w,{size:"xs-3 sm-2"},r.a.createElement(E,{onClick:this.handleFormSubmit,type:"success",className:"input-lg"},"Search"))))))),r.a.createElement(k,null,r.a.createElement(w,{size:"xs-12"},this.state.recipes.length?r.a.createElement(j,null,this.state.recipes.map(function(e){return r.a.createElement(x,{key:e.title,title:e.title,href:e.href,ingredients:e.ingredients,thumbnail:e.thumbnail})})):r.a.createElement("h1",{className:"text-center"},"No Recipes to Display")))))}}]),t}(n.Component);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a6e93851.chunk.js.map