let ms = prompt("Enter your maritial status (married/unmarried)");

if(ms.toLowerCase()=="married"){
    console.log("eligible for the insurance");
}
else if(ms.toLowerCase()=="unmarried"){
    console.log("enter the below details");
}
else{
    console.log("invaid input")
}

console.log(ms.toLowerCase());