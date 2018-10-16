(function(global){

  var APP = global.APP;

  var title = "timer";

  var timerFunc = function(){

    var code1 = {
      code: function(){
        var max = 10000;
        var func = function(){
          var a = Math.random() * max * Math.random();
        };
        for(var i = 0; i < max; i++){
          func();
        }
      },
      message: title + " no timer "
    };

    var code2 = {
      code: function(){
        var max = 10000;
        var func = function(){
          var a = Math.random() * max * Math.random();
        };
        for(var i = 0; i < max; i++){
          setInterval(func,0);
        }
      },
      message: title + " setInterval "
    };

    var code3 = {
      code: function(){
        var max = 10000;
        var func = function(){
          var a = Math.random() * max * Math.random();
        };
        for(var i = 0; i < max; i++){
          setTimeout(func,0);
        }
      },
      message: title + " setTimeout "
    };


    APP.runCodes({codes:[code1, code2, code3]});

  };
  timerFunc();
})(window);