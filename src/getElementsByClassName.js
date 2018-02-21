// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  let result = [];
  let classes = node.classList;

  if (classes !== undefined) {
    if (classes.contains(className)) {
      result.push(node);
    }
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    result = result.concat(getElementsByClassName(className, node.childNodes[i]));
  }
  return result;
};

//  **** Alternate variation  ***//

// var matchingElements = [];

//    if (node.className === className) {
//  matchingElements.push(node);
// }

// node.childNodes.forEach(className, child =>
//   getElementsByClassName(className, node.childNodes[child])
// )

