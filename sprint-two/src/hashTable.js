var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined){
  	bucket = LinkedList();
    bucket.addToTail([key,value]);
  	this._storage.set(index,bucket);
  } else {
    // search through all the nodes in the bucket
    var found = false;
    bucket.each(function(nodeValue){
      // look to see if the key matches the node value
      if (nodeValue[0]===key){
        // if key is found in bucket, update key value pair
        nodeValue[1]=value;
        found = true;
      }
    });
    // if key is not in the bucket, add twople to bucket
    if (!found){
      bucket.addToTail([key,value]);
    }
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if(bucket!==undefined) {
    var currValue;
    bucket.each(function(nodeValue){
      if (nodeValue[0]===key){
        currValue = nodeValue[1];
        // return nodeValue[1]; 
      }
    });
    return currValue;
  	// return bucket[key];
  }
};

HashTable.prototype.remove = function(key){
	var index = getIndexBelowMaxForKey(key, this._limit);
	var bucket = this._storage.get(index);
	
  // search through the bucket ti find the key
  bucket.each(function(nodeValue) {
    if(nodeValue[0] === key) {
      nodeValue[1] = null;
    }
  });
    // when key is found, overwrite value to null

  // bucket[key] = null; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
