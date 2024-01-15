let a=+prompt(" nhap so tuy chon di  : ");
let b=+prompt(" nhap so tuy chon di  : ");
if (a > b ) {
    for( let i = 1 ; i <= a; i++ ){
        if( i%b==0 ){
            console.log(`${i}`);
        } 
    }
 }else {
    console.log(" gia tri nhap vao ko hop le ");
 }