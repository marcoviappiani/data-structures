var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined){
  	bucket = {};
  	this._storage.set(index,bucket);
  }
  bucket[key] = value;
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  if(bucket!==undefined) {
  	return bucket[key];
  }
};

HashTable.prototype.remove = function(key){
	var index = getIndexBelowMaxForKey(key, this._limit);
	var bucket = this._storage.get(index);
	bucket[key] = null; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
