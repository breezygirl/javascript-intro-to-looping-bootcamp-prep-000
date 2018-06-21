let n = 10;

function whileLoop(n){
while ( n > 0 ) {
    
    console.log(n--);
    
}
return ('done');
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
  }
  do {
     array.pop()
  } while ( array.length > 0 && maybeTrue())
  
return array
}


