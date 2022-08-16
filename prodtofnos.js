function productOfNumbers(...num)
{
let n = num.length;
product=1;
for (let i=0;i<n;i++)
{
    product= num[i]*product;
}
console.log(product);
}
productOfNumbers(7,5,4)