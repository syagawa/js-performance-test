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
      message: title + " before"
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
      message: title + " after"
    };

    APP.runCodes([code1, code2]);
  };
  logicalOperators();
})(window);