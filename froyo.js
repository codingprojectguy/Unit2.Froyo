const userObjectText = prompt('Please enter a list of comma-separated froyo flavors.','vanilla,vanilla,vanilla,strawberry,coffee,coffee');


const userObjectArray = userObjectText.split(',');


console.log(userObjectArray)

//function starts here
const countFlavors = (arr) => {

    //object to hold the flavors and counts
    const flavorcounter = {};

    //for loop iterate through arr
    for (let i = 0; i < userObjectArray.length; i++) {
        const flavor = userObjectArray[i].trim();

        //if there is no value 
        if(!flavorcounter[flavor]){ 
            //define the value = 0
            flavorcounter[flavor] = 0
        } 
        //add value +1 
           flavorcounter[flavor] += 1;
    }
    //return object
return flavorcounter;
}


const runFunc = countFlavors(userObjectArray)



console.table(runFunc);



