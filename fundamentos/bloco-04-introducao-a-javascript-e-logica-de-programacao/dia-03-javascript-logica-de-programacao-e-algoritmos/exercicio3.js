/* 3- Agora inverta o lado do triângulo. Por exemplo: */

/* n = 5 */
/*  */
/*     * */
/*    ** */
/*   *** */
/*  **** */
/* ***** */

let n = 5
let y = " "
let x = "*"
let inputPosition = n
 
for (let index = 0; index < n; index ++){
    for( let columnIndex = 0; columnIndex <= n; columnIndex++){
        if(columnIndex < inputPosition){
            y = y + " "
        }else{
          y = y + x  
        }
    }
    console.log(y)
    y = " "
    inputPosition --
}

