var BinarySearchTree = function(value){
	// This function (class) with take a value, and return an object (tree)
	// this will have properties such as left, right, value
	// this will have functions such as insert, contains, and depthFirstLog
	var tree = {};

	tree.left = null; //left is lower than current value
	tree.right = null; //right is greater than current value
	tree.value = value;
	tree.insert = function(value){
		// it will take a value and return nothing

		//  create new node with argument value
		var newNode = BinarySearchTree(value);

		var checkNode = function(node) {
			// if we've reached the bottom of the tree, insert newNode
			// 
			// it will look to see if the value is greater than or less than the value of the current node
			// and check that node to the left or right
			if(value < node.value) {
				if(node.left === null) {
					node.left = newNode;
				} else {
					checkNode(node.left);
				}
			} else {
				if(node.right === null) {
					node.right = newNode;
				} else {
					checkNode(node.right);
				}
			}
		}
		checkNode(tree);
	};

	tree.contains = function(value) {
		// it's going to take a value and return true or false
		var targetFound = false;
		var checkNode = function(node) {
			// if node is null,return
			if(node === null) {
				return;
			}
			// check to see if the value matches the current node's value
			if(node.value === value) {
			// if node's value === value target, found is true
				targetFound = true;
				return;
			} else {
			// else check left and right nodes
				checkNode(node.left);
				checkNode(node.right);
			}
		};

		checkNode(tree);
		return targetFound;
	};

	tree.depthFirstLog = function(func){
		// takes a function
		// iterates for every node, run function
		var runFuncOnNode = function(node){	
			// if current node is null, return
			if (node === null){
				return;
			} else {
				func(node.value, node, tree);
			}
			// go into node left 
			runFuncOnNode(node.left);
			// go into node right 
			runFuncOnNode(node.right);
		};

		runFuncOnNode(tree);
		// returns nothing

	};

	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
