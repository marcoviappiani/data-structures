var Queue = function(){
  var someInstance = {};
  var lastRemoved = 0;
  var lastAdded = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    lastAdded++;
    storage[lastAdded] = value;
  };

  someInstance.dequeue = function(){
    // update last removed and return object
    if (lastRemoved < lastAdded){
      lastRemoved ++;
      return storage[lastRemoved];
    }
  };

  someInstance.size = function(){
    return lastAdded - lastRemoved;
  };

  return someInstance;
};
