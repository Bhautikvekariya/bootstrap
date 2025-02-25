// let n = 5; 
// let i, j;

// // Upper part of the butterfly
// for(i=1; i<n; i++){
//     for(j=1; j<=i; j++){
//         document.write("*");
//     }
//     for(j=1; j<=2*(n-i); j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for(i=n; i>=1; i--){
//     for(j=1; j<=i; j++){
//         document.write("*");
//     }
//     for(j=1; j<=2*(n-i); j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(j=1; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

let i,j,k,l;
let n=5;

for(i=5; i>=1; i--){
    for(k=1; k<=n-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(j=1; j<=i; j++){
        document.write("*");
    }
    for(l=2; l<=i; l++){
        document.write("*");
    }
    document.write("<br>");
}

for(i=2; i<=5; i++){
    for(k=1; k<=n-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(j=1; j<=i; j++){
        document.write("*");
    }
    for(l=2; l<=i; l++){
        document.write("*");
    }
    document.write("<br>");
}

