var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
  	storage: {},
  	lastAdded: 0,
  	lastRemoved: 0  	
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
	size: function(){
		return this.lastAdded - this.lastRemoved;
	},
	enqueue: function(value){
		// take the element that is passed to the function, put it at end of the queue
		this.lastAdded++;
		this.storage[this.lastAdded] = value;
	},
	dequeue: function(){
		// take the first element of the queue, and return it
		if (this.lastAdded > this.lastRemoved){
			this.lastRemoved++;
			return this.storage[this.lastRemoved];
		}
	}
};

