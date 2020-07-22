console.log(`The Console.`);

let n=prompt(`Input the limit:`);
let i;
for(i=2;i<=n;i++){
    // console.log(i);
    if(i>3){
        if((i%2)!=0){
            if((i%3 !=0)){
                console.log(i);
            }
        }
    }
    else{
        console.log(i);
    }
}