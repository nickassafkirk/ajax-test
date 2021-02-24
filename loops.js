//for loop

 for (let i = 5; i >= 1; i-- ){
      if ( i % 2 != 0) console.log(i);
 }

 //for of loop

 const names = ["john", "paul", "luke", "owen"];

 for(name of names){
     if (name === "luke"){
         console.log("luke is on my list");
         break;
     }
 }

 //While Loop

let loading = 0;

while(loading < 5){
    console.log('Webiste is loading');

    loading++; // 'loading++' is the same as 'loading += 1'
}

const pets = [ {"name":"Monty", "age": 13}, {"name": "Fluffy", "age": 3}, {"name": "Flopsy", "age": 4} ];
for(pet of pets){
    for( value in pet){
        if(value !== value){
            console.log(value)
        } 
    }
}