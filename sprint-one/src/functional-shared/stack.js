var Stack = function() {
	// a constructor function
	// will create and return an object
	// will extend stackMethods to the object
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
  	length : 0,
  	storage : {}
  };

  _.extend(obj,stackMethods);

  return obj;
};

var stackMethods = {
	
	//list of methods push,pop,size
	size : function() {
		return this.length;
	},
	push : function(value) {
		// add to length
		this.length++;
		// add value to the storage
		this.storage[this.length] = value;

	},
	pop : function() {
		// we don't want to alter an empty stack
		if(this.length > 0) {
			this.length--;
			return this.storage[this.length+1];
		}
		// subtract from length


		// return the item on top of the stack

	}

};


