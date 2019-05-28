(function(global){

  var APP = global.APP;
  var title = "Null Undefined";

  var nullUndefinedFunc = function(){
    var code1 = {
      code: function(){
        var max = 1000000;
        var val;
        for(var i = 0; i < max; i++){
          var a = val;
        }
      },
      message: title + " undefined"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        var val = null;
        for(var i = 0; i < max; i++){
          var a = val;
        }
      },
      message: title + " null"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        var val = undefined;
        for(var i = 0; i < max; i++){
          var a = val;
        }
      },
      message: title + " undefined2"
    };

    APP.runCodes({codes:[code1, code2, code3]});
  };
  nullUndefinedFunc();
})(window);