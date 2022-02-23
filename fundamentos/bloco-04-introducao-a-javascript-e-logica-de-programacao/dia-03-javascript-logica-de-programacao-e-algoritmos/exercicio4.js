let n = 5
let y = " "
let x = "*"
let middle = (n + 1) / 2
let left = middle
let right = middle
 
for (let lineIndex = 0; lineIndex < middle; lineIndex ++){
    for( let columnIndex = 0; columnIndex <= n; columnIndex++){
        if(columnIndex >= left && columnIndex <= right){
            y = y + x;
        }else{
          y = y + ' ' 
        }
    }
    console.log(y)
    y = " "
    right++
    left--
}
