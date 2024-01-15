let a =+prompt(" nhap so bat ki vao di  ");
for(let i = 1 ; i < a ; i++ ){
    if ( i%1===0 && i%i==0 && i%2 != 0 && i%3 !=0 && i%5!=0) {
        console.log(`${i}`)
    }
}