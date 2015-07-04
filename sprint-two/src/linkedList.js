var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    //list = node;
    if (list.tail!==null){
      list.tail.next = node;
    }
    // var oldTail = list.tail;
    list.tail = node;
    if (list.head===null){ // this may need to be different, (eg single-node-list-head is removed, and then new tail is added)
      list.head = list.tail;
    }
    
    
    // list.head = node;
  };

  list.removeHead = function(){
    var headValue = list.head.value;
    list.head = list.head.next;
    if (list.head===null){
      list.tail = null;
    }
    return headValue;
  };

  list.contains = function(target){
    var targetFound = false;
    var searchForTarget = function(node) {
      if(node.value === target) {
        targetFound = true;
      }
      if(node.next === null) {
        return;
      }
      searchForTarget(node.next);

    };
    searchForTarget(list.head);
    return targetFound;
  };

  list.each = function(func){
    var actOnNode = function(node) {
      if(node === null) {
        return;
      }
      func(node.value);
      actOnNode(node.next);
    };
    actOnNode(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
