let n = 5; 
let i, j;

// Upper part of the butterfly
for(i=1; i<n; i++){
    for(j=1; j<=i; j++){
        document.write("*");
    }
    for(j=1; j<=2*(n-i); j++){
        document.write("&nbsp;&nbsp;");
    }
    for(j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}

for(i=n; i>=1; i--){
    for(j=1; j<=i; j++){
        document.write("*");
    }
    for(j=1; j<=2*(n-i); j++){
        document.write("&nbsp;&nbsp;");
    }
    for(j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}

// let i,j,k,l;

// for(i=1; i<=5; i++){
//     for(k=1; k<=5-i; k++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(j=1; j<=i; j++){
//         document.write(j);
//     }
//     for(l=2; l<=i; l++){
//         document.write(j);
//     }
//     document.write("<br>");
// }

// for(i=4; i>=1; i--){
//     for(k=1; k<=5-i; k++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(j=1; j<=i; j++){
//         document.write(i);
//     }
//     for(l=2; l<=i; l++){
//         document.write(i);
//     }
//     document.write("<br>");
// }