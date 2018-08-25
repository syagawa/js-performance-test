(function(global){
  // global local cache
  var globalLocalCache = function(){
    var max = 1000,
        i;

    APP.timer.start();
    // console.time("global local cash before");
    for(i = 0; i < max; i++){
      window.var1 = "var1";
    }
    // console.timeEnd("global local cash before");
    var a = "global local cache before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("global local cache after");
    var g = window;
    for(i = 0; i < max; i++){
      g.var2 = "var2";
    }
    // console.timeEnd("global local cache after");
    var b = "global local cache after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);
  };
  globalLocalCache();
})(window);