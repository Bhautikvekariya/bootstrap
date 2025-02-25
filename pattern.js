for(let i=5; i>=1; i--){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    for(let l=2; l<=i; l++){
        document.write("*");
    }
    document.write("<br>");
}

for(let i=2; i<=5; i++){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    for(let l=2; l<=i; l++){
        document.write("*");
    }
    document.write("<br>");
}

count=1;

for(let i=1; i<=4; i++){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write(count+" ");
        count++;
    }
    for(let l=2; l<=i; l++){
        document.write(count+" ");
        count++;
    }
    document.write("<br>");
}
