const userObjectText = prompt('Please enter a list of comma-separated froyo flavors.');


const userObjectArray = userObjectText.split(',');


console.log(userObjectArray)


const flavorcounter = {};

for (let i = 0; i < userObjectArray.length; i++) {
    const flavor = userObjectArray[i].trim();
    
    if(!flavorcounter[flavor]){ 
        flavorcounter[flavor] = 0
    } 
       flavorcounter[flavor] += 1;
}


console.table(flavorcounter);