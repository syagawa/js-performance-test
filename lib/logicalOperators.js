(function(global){
  // logical operators
  var logicalOperators = function(){
    var tru = true,
        fal = false,
        max = 1000,
        i;
    console.time("logical operators before");
    for(i = 0; i < max; i++){
      (function(){
        return tru && fal;
      })();
    }
    console.timeEnd("logical operators before");

    console.time("logical operators after");
    for(i = 0; i < max; i++){
      (function(){
        return fal && tru;
      })();
    }
    console.timeEnd("logical operators after");
  };
  logicalOperators();
})(window);