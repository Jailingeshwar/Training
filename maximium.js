let arr=[5,4,6,7,3];
let a=max_element(arr);
console.log(a);
function max_element(arr){
   let maximum=Math.max(...arr);
   return maximum;
}
