function getName(){

let pii = { name:'Ninoshka', ssn:''};

function security(){  
    return pii.ssn; 
}
return pii.name;
}
console.log(getName());