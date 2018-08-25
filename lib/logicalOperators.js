(function(global){
  // logical operators
  var logicalOperators = function(){
    var tru = true,
        fal = false,
        max = 1000,
        i;

    APP.timer.start();
    // console.time("logical operators before");
    for(i = 0; i < max; i++){
      (function(){
        return tru && fal;
      })();
    }
    // console.timeEnd("logical operators before");
    var a = "logical operators before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("logical operators after");
    for(i = 0; i < max; i++){
      (function(){
        return fal && tru;
      })();
    }
    // console.timeEnd("logical operators after");
    var b = "logical operators after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);
  };
  logicalOperators();
})(window);