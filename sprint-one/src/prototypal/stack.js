var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
	size: function(){
		return this.length;
	},
	push: function(value){
		this.length++;
		this.storage[this.length] = value;
	},
	pop: function(){
		if (this.length>0){
			this.length--;
			return this.storage[this.length + 1];
		}
	}
};


