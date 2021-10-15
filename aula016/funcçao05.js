//RECURSIVIDADE NA FUNÇAO - quando ela mesma se chama

function fatorial(n) { 
    if(n==1){
        return 1
    }else{
        return n * fatorial (n-1)
    }
 }
console.log(fatorial(5))
 /*
se liga nessa:
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!  <---sacou?
n! = n x (n-1)!  <--termo genérico que vamos usar 

*/