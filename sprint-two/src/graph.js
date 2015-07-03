

var Graph = function(){
	// var obj = Object.create(Graph.prototype);

	this.nodes = {};
	this.edges = {};

	// return obj;
};

Graph.prototype.addNode = function(node){
	// this = newNode;
	this.nodes[node] = node;
	// newNode.value = value;
};

Graph.prototype.removeNode = function(node){
	if(this.nodes[node] === node) {
		this.nodes[node] = null;
	}
};

Graph.prototype.contains = function(target){
	if(this.nodes[target] === target) {
		return true;
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var edgeName = fromNode + toNode;
	var reverseEdge = toNode + fromNode;
	this.edges[edgeName] = edgeName;
	this.edges[reverseEdge] = reverseEdge;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var edgeName = fromNode + toNode;
	var reverseEdge = toNode +fromNode;
	if(this.edges[edgeName] === edgeName) {
		this.edges[edgeName] = null;
		this.edges[reverseEdge] = null;
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var edgeName = fromNode + toNode;
	var reverseEdge = toNode + fromNode;
	if(this.edges[edgeName] === edgeName) {
		return true;
	}
	return false;
};

Graph.prototype.forEachNode = function(callback){
	for (var node in this.nodes){
		callback(node);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



