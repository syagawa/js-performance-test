(function(global){

  var APP = global.APP;

  var title = "timer";

  var timerFunc = function(){

    var code1 = {
      code: function(){
        var max = 10;
        var num = 0;
        var func = function(i){
          num += i;
          if(i === max - 1){
            console.log("end code1 ", num);
          }
        };
        for(var i = 0; i < max; i++){
          func(i);
        }
      },
      message: title + " no timer "
    };

    var code2 = {
      code: function(){
        var max = 10;
        var num = 0;
        var counter = 0;
        var id = "";
        var func = function(){
          num += counter;
          if(counter === max - 1){
            clearInterval(id);
            console.log("end code2 ", num);
          }
          counter++;
        };
        id = setInterval(func, 0);
       },
      message: title + " setInterval "
    };

    var code3 = {
      code: function(){
        var max = 10;
        var num = 0;
        var func = function(i){
          return function(){
            num += i;
            if(i === max - 1){
              console.log("end code3 ", num);
            }
          };
        };
        for(var i = 0; i < max; i++){
          setTimeout(func(i),0);
        }
      },
      message: title + " setTimeout "
    };

    APP.runCodes({codes:[code1, code2, code3]});

  };
  timerFunc();
})(window);