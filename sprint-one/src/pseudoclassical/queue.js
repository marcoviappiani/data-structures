var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastAdded = 0;
  this.lastRemoved = 0;

};

Queue.prototype.size = function(){
	return this.lastAdded - this.lastRemoved;
};

Queue.prototype.enqueue = function(value){
	this.lastAdded++;
	this.storage[this.lastAdded] = value;
};

Queue.prototype.dequeue = function(){
	if (this.lastAdded > this.lastRemoved){
		this.lastRemoved++;
		return this.storage[this.lastRemoved];
	}
};


