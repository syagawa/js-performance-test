(function(global){

  var APP = global.APP;
  var title = "global local cache";

  var globalLocalCache = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var name = "var" + i;
          window[name] = name;
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var g = window;
        for(var i = 0; i < max; i++){
          var name = "var" + i;
          g[name] = name;
        }
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  globalLocalCache();
})(window);