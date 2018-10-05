(function(global){

  var APP = global.APP;
  var title = "logical operators";

  var logicalOperators = function(){
    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          (function(){
            return true && false;
          })();
        }
      },
      message: title + " true && false"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          (function(){
            return false && true;
          })();
        }
      },
      message: title + " false && true"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          (function(){
            return true || false;
          })();
        }
      },
      message: title + " true || false"
    };

    var code4 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          (function(){
            return false || true;
          })();
        }
      },
      message: title + " false || true"
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});
  };
  logicalOperators();
})(window);