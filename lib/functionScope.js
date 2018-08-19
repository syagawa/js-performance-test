(function(global){
  // function scope
  var functionScope = function(){
    var max = 1000,
        i;

    console.time("function scope before");
    for(i = 0; i < max; i++){
      (function(){
        var j = i;
      })();
    }
    console.timeEnd("function scope before");

    console.time("function scope after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    console.timeEnd("function scope after");
  };
  functionScope();
})(window);