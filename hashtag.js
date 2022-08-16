function getHashTags(str)
{
  let arr = str.split(" ");
  let sortArr = arr.sort((a,b) => b.length - a.length);
  const out=[];
  if(arr.length<3)
  {
    for(let i=0;i<arr.length;i++)
    {
        out.push("#"+arr[i]);
    }
  }
  else{
    out.push("#"+arr[0]);
    out.push("#"+arr[1]);
    out.push("#"+arr[2]);
  }
  console.log(out);
}

getHashTags("How the Avacodo became the fruit of global trade");