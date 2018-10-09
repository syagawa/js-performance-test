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
      message: title + " window[name]"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var name = "var" + i;
          window.name = name;
        }
      },
      message: title + " window.name"
    };

    var code3 = {
      code: function(){
        var max = 100000;
        var g = window;
        for(var i = 0; i < max; i++){
          var name = "var" + i;
          g[name] = name;
        }
      },
      message: title + " global[name]"
    };


    var code4 = {
      code: function(){
        var max = 100000;
        var g = window;
        for(var i = 0; i < max; i++){
          var name = "var" + i;
          g.name = name;
        }
      },
      message: title + " global.name"
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  globalLocalCache();
})(window);