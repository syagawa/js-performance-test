(function(global){

  var APP = global.APP;

  var title = "increment";

  var arrayLengthCache = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        var a = 0;
        for(var i = 0; i < max; i++){
          a++;
        }
      },
      message: title + " ++, "
    } ;

    var code2 = {
      code: function(){
        var max = 1000000;
        var a = 0;
        for(var i = 0; i < max; i++){
          a = a + 1;
        }
      },
      message: title + " a + 1, "
    } ;

    var code3 = {
      code: function(){
        var max = 1000000;
        var a = 0;
        for(var i = 0; i < max; i++){
          a = (a + 1);
        }
      },
      message: title + " (a + 1), "
    };

    var code4 = {
      code: function(){
        var max = 1000000;
        var a = 0;
        for(var i = 0; i < max; i++){
          a = a + 1 | 0;
        }
      },
      message: title + " a + 1 | 0, "
    };

    var code5 = {
      code: function(){
        var max = 1000000;
        var a = 0;
        for(var i = 0; i < max; i++){
          a = (a + 1) | 0;
        }
      },
      message: title + " (a + 1) | 0, "
    };


    APP.runCodes({codes:[code1, code2, code3, code4, code5]});

  };
  arrayLengthCache();
})(window);