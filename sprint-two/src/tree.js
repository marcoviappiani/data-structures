var Tree = function(value){
  var newTree = Object.create(treeMethods);
  
  newTree.value = value; // This is the value of the tree instance 

  // your code here

  newTree.children = [];  

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newChild = Tree(value);
	this.children.push(newChild);
};

treeMethods.contains = function(target){
	var targetFound = false;

	var searchNode = function(node){
		if(node.value === target){
			targetFound = true;
			return;
		}
		var nodeChildren = node.children;
		for(var i = 0; i<nodeChildren.length; i++){
			searchNode(nodeChildren[i]);
		}
	};

	searchNode(this);

	return targetFound;

};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: Constant
 contains: Linear
 */
