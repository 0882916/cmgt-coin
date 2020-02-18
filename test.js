var p1 = new Promise(function(resolve, reject) { 
    setTimeout(() => resolve('one'), 500); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(() => resolve('two'), 100); 
});

Promise.race([p1, p2])
.then(function(value) {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});