var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.lastAdded = 0;
  obj.lastRemoved = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
	size: function(){
		return this.lastAdded - this.lastRemoved;
	},
	enqueue: function(value){
		this.lastAdded++;
		this.storage[this.lastAdded] = value;
	},
	dequeue: function(){
		if(this.lastAdded > this.lastRemoved) {
			this.lastRemoved++;
			return this.storage[this.lastRemoved];
		}
	}
};


