(function(global){

  var APP = global.APP;
  var title = "function call";

  var functionCall = function(){

    var code1 = {
      code: function(){
        var func = function (n){
          return n * n;
        };
        var i = 100000;
        var sum = 0;
        while(i--){
          sum += func(i);
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var i = 100000;
        var sum = 0;
        while(i--){
          sum += i * i;
        }
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  functionCall();
})(window);