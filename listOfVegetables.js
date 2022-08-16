const veggies={carrot:"orange",tomato:"red",
cucumber:"green",cabbage:"voilet",potato:"brown"};
let x="carrot";
let colorName=showColor(x);
console.log(colorName);
function showColor(x){
   let theColor=veggies[x];
   return theColor;
}
