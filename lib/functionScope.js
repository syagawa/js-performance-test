(function(global){

  var APP = global.APP;
  var title = "function scope";

  var functionScope = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          (function(){
            var j = i;
          })();
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var j = i;
        }
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  functionScope();
})(window);