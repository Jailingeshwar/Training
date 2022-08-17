function distanceTravel(cost){
    dist=0;
    if(cost!=0){
        dist++;
        cost-=3;
    }
    while(cost!=0){
        dist++;
        cost-=2;
    }
    return dist;
 }
 console.log(distanceTravel(3));

 et num1=10;
let num2=10;
let res=num1*num2;
console.log(res);