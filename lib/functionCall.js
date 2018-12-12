(function(global){

  var APP = global.APP;
  var title = "function call";

  var functionCall = function(){

    var code1 = {
      code: function(){
        var i = 1000000;
        var sum = 0;
        var func = function (n){
          return n * n * n * Math.random();
        };
        while(i--){
          sum += func(i);
        }
      },
      message: title + " use function"
    };

    var code2 = {
      code: function(){
        var i = 1000000;
        var sum = 0;
        while(i--){
          sum += i * i * i * Math.random();
        }
      },
      message: title + " not use function"
    };

    var code3 = {
      code: function(){
        var i = 1000000;
        var sum = 0;
        var func = function (sum, n){
          return sum + ( n * n * n * Math.random() );
        };
        while(i--){
          sum = func(sum, i);
        }
      },
      message: title + " use function"
    };

    var code4 = {
      code: function(){
        var i = 1000000;
        var sum = 0;
        var func = function (sm, n){
          sum = sm + ( n * n * n * Math.random() );
        };
        while(i--){
          func(sum, i);
        }
      },
      message: title + " use function and closure"
    };


    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  functionCall();
})(window);