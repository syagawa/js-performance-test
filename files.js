(function(global){
  var files = [
    {
      src: "arrayLengthCache.js",
      name: "array length cache"
    },
    {
      src: "boolean.js",
      name: "boolean"
    },
    {
      src: "concatString.js",
      name: "concat string"
    },
    {
      src: "domClassOrId.js",
      name: "dom class or id"
    },
    {
      src: "domCloneNode.js",
      name: "dom clonenode"
    },
    {
      src: "domCreateDocumentFragment.js",
      name: "dom createDocumentFragment"
    },
    {
      src: "domDirectOrVariable.js",
      name: "dom direct or variable"
    },
    {
      src: "domStyle.js",
      name: "dom style"
    },
    {
      src: "exponentiation.js",
      name: "exponentiation"
    },
    {
      src: "for.js",
      name: "for"
    },
    {
      src: "functionCall.js",
      name: "function call"
    },
    {
      src: "functionScope.js",
      name: "function scope"
    },
    {
      src: "globalLocalCache.js",
      name: "global local cache"
    },
    {
      src: "if.js",
      name: "if"
    },
    {
      src: "increment.js",
      name: "increment"
    },
    {
      src: "jQueryDomAttribute.js",
      name: "jQuery dom attribute"
    },
    {
      src: "jQueryDomBrother.js",
      name: "jQuery dom brother"
    },
    {
      src: "jQueryDomChildren.js",
      name: "jQuery dom children"
    },
    {
      src: "jQueryDomClass.js",
      name: "jQuery dom class"
    },
    {
      src: "jQueryDomClone.js",
      name: "jQuery dom clone"
    },
    {
      src: "jQueryDomCreateAdd.js",
      name: "jQuery dom create add"
    },
    {
      src: "jQueryDomDataset.js",
      name: "jQuery dom dataset"
    },
    {
      src: "jQueryDomHtmlText.js",
      name: "jQuery dom html text"
    },
    {
      src: "jQueryDomId.js",
      name: "jQuery dom id"
    },
    {
      src: "jQueryDomParent.js",
      name: "jQuery dom parent"
    },
    {
      src: "jQueryDomRemove.js",
      name: "jQuery dom remove"
    },
    {
      src: "jQueryDomReplace.js",
      name: "jQuery dom replace"
    },
    {
      src: "jQueryDomStyle.js",
      name: "jQuery dom style"
    },
    {
      src: "jQueryDomVariables.js",
      name: "jQuery dom variables"
    },
    {
      src: "jQueryEach.js",
      name: "jQuery each"
    },
    {
      src: "logicalOperators.js",
      name: "logical operators"
    },
    {
      src: "loopExpansion.js",
      name: "loop expansion"
    },
    {
      src: "newObject.js",
      name: "new Object"
    },
    {
      src: "nullDelete.js",
      name: "null delete"
    },
    {
      src: "objectAndArray.js",
      name: "object and array"
    },
    {
      src: "objectClone.js",
      name: "object clone"
    },
    {
      src: "oneline.js",
      name: "oneline"
    },
    {
      src: "prototypeChain.js",
      name: "prototype chain"
    },
    {
      src: "prototypeMethod.js",
      name: "prototype method"
    },
    {
      src: "search.js",
      name: "search"
    },
    {
      src: "sort.js",
      name: "sort"
    },
    {
      src: "swapArray.js",
      name: "swap array"
    },
    {
      src: "timer.js",
      name: "timer"
    },
    {
      src: "tryCatch.js",
      name: "try catch"
    },
    {
      src: "variableDeclaration.js",
      name: "variable declaration"
    },
    {
      src: "variableNameLength.js",
      name: "variable name length"
    },
    {
      src: "regexp.js",
      name: "regexp"
    },
    {
      src: "arrayIncludes.js",
      name: "array includes"
    }
  ];

  files.sort(function(a, b){
    if( a.name > b.name ){
      return 1;
    }
    if( a.name < b.name ){
      return -1;
    }
    return 0;
  });
  var select = document.getElementById("select_src");
  for(var i = 0; i < files.length; i++){
    var o = document.createElement("option");
    var f = files[i];
    o.value = f.src;
    o.innerText = f.name;
    select.appendChild(o);
  }

})(window);

