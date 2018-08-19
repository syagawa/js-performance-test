(function(global){
  // global local cash
  var globalLocalCash = function(){
    var max = 1000,
        i;

    console.time("global local cash before");
    for(i = 0; i < max; i++){
      window.var1 = "var1";
    }
    console.timeEnd("global local cash before");

    console.time("global local cash after");
    var g = window;
    for(i = 0; i < max; i++){
      g.var2 = "var2";
    }
    console.timeEnd("global local cash after");
  };
  globalLocalCash();
})(window);