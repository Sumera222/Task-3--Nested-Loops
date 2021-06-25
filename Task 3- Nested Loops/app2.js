let Array = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];

/* using while loop */
let i = 0;

while (i < Array.length) {

  let x = 0;  
  while (x < Array[i].length) {
  
    if ( (Array[i][x] == "cat") || (Array[i][x] == "rabbit") ){
      console.log("Pet animals");
    }

    else if ( (Array[i][x] == "pigeon") || (Array[i][x] == "parrot") ){
      console.log("Pet birds");
    }

    else if ( (Array[i][x] == "goldfish") || (Array[i][x] == "whale") ){
      console.log("Fish");
    }

    x++;
  }
  i++;

}

/* using for loop */

for (let a = 0; a < Array.length; a++) {
  for (let b = 0; b < Array[b].length; b++) {

    if ( (Array[a][b] == "cat") || (Array[a][b] == "rabbit") ){
      console.log("Pet animals");
    }

    else if ( (Array[a][b] == "pigeon") || (Array[a][b] == "parrot") ){
      console.log("Pet birds");
    }

    else if ( (Array[a][b] == "goldfish") || (Array[a][b] == "whale") ){
      console.log("Fish");
    }
    
  }
}