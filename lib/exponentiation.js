(function(global){

  var APP = global.APP;
  var title = "new Object";

  var exponentiation = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var res = 5 * 5 * 5 * 5 * 5;
        }
      },
      message: title + " x * x "
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var res = Math.pow(5, 5);
        }
      },
      message: title + " Math.pow "
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var res = 5 ** 5;
        }
      },
      message: title + " ** "
    };



    APP.runCodes({codes:[code1, code2, code3]});
  };
  exponentiation();
})(window);