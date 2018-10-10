(function(global){

  var APP = global.APP;
  var title = "function call";

  var functionCall = function(){

    var code1 = {
      code: function(){
        var func = function (n){
          return n * n * n * Math.random();
        };
        var i = 10000000;
        var sum = 0;
        while(i--){
          sum += func(i);
        }
      },
      message: title + " use function"
    };

    var code2 = {
      code: function(){
        var i = 10000000;
        var sum = 0;
        while(i--){
          sum += i * i * i * Math.random();
        }
      },
      message: title + " not use function"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  functionCall();
})(window);