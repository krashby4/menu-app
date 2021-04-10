(this["webpackJsonpmenu-app"]=this["webpackJsonpmenu-app"]||[]).push([[0],{53:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),r=t(12),a=t.n(r),s=(t(53),t(44)),o=t(45),d=t(48),l=t(47),p=t(16),j=t(14),u=t(27),b=t(29),h=t(43),m=t(8),g=t(40),O=t(4),x=function(){var e=Object(i.useState)([{ingredient:""}]),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(O.jsx)(m.a.Group,{children:t.map((function(e,n){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"ingredientInput",children:[Object(O.jsxs)(m.a.Label,{className:"ingredientLabel",children:["Ingredient ",n+1]}),Object(O.jsx)(m.a.Control,{as:"input",className:"form-control",id:"ingredient"+(n+1),name:"ingredient"+(n+1),value:e.ingredient,onChange:function(e){return function(e,n){var i=Object(g.a)(t);i[e].ingredient=n.target.value,c(i)}(n,e)}}),Object(O.jsx)(j.a,{variant:"secondary",onClick:function(){return function(e){var n=Object(g.a)(t);n.splice(e,1),c(n)}(n)},children:"-"}),Object(O.jsx)(j.a,{variant:"primary",onClick:function(){return function(){var e=Object(g.a)(t);e.push({ingredient:""}),c(e)}()},children:"+"})]})]},"".concat(e,"~").concat(n))}))})},f=function(){var e=Object(i.useState)(""),n=Object(p.a)(e,2),t=n[0],c=n[1],r=function(e){c(Object(h.a)(Object(h.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a.Group,{children:[Object(O.jsx)(m.a.Label,{children:"Recipe Name"}),Object(O.jsx)(m.a.Control,{as:"input",name:"recipeName",onChange:r}),Object(O.jsx)(m.a.Label,{children:"Recipe Source"}),Object(O.jsx)(m.a.Control,{as:"input",name:"recipeSource",onChange:r}),Object(O.jsx)(m.a.Label,{children:"Description"}),Object(O.jsx)(m.a.Control,{as:"textarea",name:"recipeDescription",onChange:r}),Object(O.jsx)(m.a.Group,{name:"ingredientList",onChange:r,children:Object(O.jsx)(x,{})})]}),Object(O.jsx)(j.a,{variant:"primary",onClick:function(e){e.preventDefault(),console.log(t)},children:"Save recipe"})]})};var v=function(){var e=Object(i.useState)(!1),n=Object(p.a)(e,2),t=n[0],c=n[1];return Object(O.jsxs)("div",{className:"newRecipeModal",children:[Object(O.jsx)(j.a,{variant:"primary",onClick:function(){return c(!0)},children:"Add new recipe"}),Object(O.jsxs)(u.a,{show:t,onHide:function(){return c(!1)},animation:!1,children:[Object(O.jsx)(u.a.Header,{closeButton:!0,children:Object(O.jsx)(u.a.Title,{children:"New Recipe"})}),Object(O.jsx)(u.a.Body,{children:Object(O.jsx)(f,{})})]})]})},y=t(38),k=t(46),w=[{recipeName:"Easy Brookie Pie",recipeSource:"https://www.melskitchencafe.com/brookie-pie/",recipeDescription:"This easy brookie pie is the perfect mashup of rich, decadent brownies and soft and chewy chocolate chip cookies! It\u2019s easy and so very delicious!",ingredient1:"12 tablespoons butter",ingredient2:"2 cup chocolate chips",ingredient3:"2/3 cup granulated sugar",ingredient4:"3 large eggs",ingredient5:"2 tsp vanilla extract",ingredient6:"1 1/2 cup flour",ingredient7:"3 tbsp cocoa powder",ingredient8:"1/2 tsp salt",ingredient9:"1/3 cup brown sugar",ingredient10:"1/2 tsp baking soda"},{recipeName:"Avocado Chicken Salad",recipeSource:"https://www.melskitchencafe.com/avocado-chicken-salad/",recipeDescription:"This avocado chicken salad is irresistible! Perfect for a light, healthy dinner, it\u2019s also delicious for a quick lunch or great for party food. Bonus: it comes together FAST (15 minutes or less)!",ingredient1:"3 tbsp lime or lemon juice",ingredient2:"2 tbsp olive oil",ingredient3:"1/2 tsp salt",ingredient4:"Pinch black pepper",ingredient5:"2 cups chopped, cooked chicken",ingredient6:"1 cup corn kernels",ingredient7:"2 medium/large ripe avocados, peeled and diced",ingredient8:"1/4 cup finely chopped red onion",ingredient9:"1/4 cup chopped fresh cilantro or parsley"},{recipeName:"Sweet and Spicy Pork and Pineapple Tacos",recipeSource:"https://www.melskitchencafe.com/sweet-and-spicy-pork-and-pineapple-tacos/",recipeDescription:"Look no further for delicious, tender, perfectly sweet and spicy bites of pork, put into in a delicious taco!",ingredient1:"2 lbs pork tenderloin, trimmed and cut into 1-inch cubes",ingredient2:"Salt and pepper",ingredient3:"1 tbsp oil",ingredient4:"4 garlic cloves, finely minced or pressed",ingredient5:"1 tsp ground cumin",ingredient6:"2 tsp chili powder",ingredient7:"Pinch of cayenne pepper",ingredient8:"1/4 cup pineapple juice",ingredient9:"2-3 tbsp chopped fresh cilantro",ingredient10:"Corn or flour tortillas"}];var N=function(e){var n=Object(i.useState)(""),t=Object(p.a)(n,2),c=t[0],r=t[1],a=function(e){console.log(e),r(e)},s=w.map((function(e){return Object(O.jsx)(y.a.Item,{onSelect:a,eventKey:e.recipeName,children:e.recipeName},e.recipeName)}));return Object(O.jsxs)("div",{className:e.name,children:[Object(O.jsx)("p",{id:e.name+"Item",children:c}),Object(O.jsx)(k.a,{variant:e.variant,title:"Add "+e.name+" item",children:s})]})};var S=function(e){return Object(O.jsxs)("div",{className:"weekday",children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)(N,{name:"breakfast",variant:"primary"}),Object(O.jsx)(N,{name:"lunch",variant:"success"}),Object(O.jsx)(N,{name:"dinner",variant:"warning"})]})},C=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"allContent",children:[Object(O.jsx)("h1",{className:"menuTitle",children:"Weekly Menu"}),Object(O.jsxs)("div",{className:"weekLayout",children:[Object(O.jsx)(S,{name:"Sunday"}),Object(O.jsx)(S,{name:"Monday"}),Object(O.jsx)(S,{name:"Tuesday"}),Object(O.jsx)(S,{name:"Wednesday"}),Object(O.jsx)(S,{name:"Thursday"}),Object(O.jsx)(S,{name:"Friday"}),Object(O.jsx)(S,{name:"Saturday"})]}),Object(O.jsx)(v,{})]})}}]),t}(c.a.Component);t(59);a.a.render(Object(O.jsx)(C,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.16d496d0.chunk.js.map