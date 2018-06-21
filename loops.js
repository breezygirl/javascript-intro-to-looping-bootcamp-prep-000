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
function forLoop(array){
  
 for( let i = 1; i <25; i++) {
   
   if( i ==1){
   
     console.log('"I am 1 strange loop."')
   } else {
     console.log("I am ${i} strange loops.")
   }
 }
return array
}