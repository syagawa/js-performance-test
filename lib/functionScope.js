(function(global){
  // function scope
  var functionScope = function(){
    var max = 1000,
        i;

    APP.timer.start();
    // console.time("function scope before");
    for(i = 0; i < max; i++){
      (function(){
        var j = i;
      })();
    }
    // console.timeEnd("function scope before");
    var a = "function scope before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("function scope after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    // console.timeEnd("function scope after");
    var b = "function scope after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);

  };
  functionScope();
})(window);