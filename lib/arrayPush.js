(function(global){

  var APP = global.APP;

  var title = "array push";

  var arrayPush = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        var arr = [];
        for(var i = 0; i < max; i++){
          arr.push(i);
        }
      },
      message: title + " push"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var arr = [];
        for(var i = 0; i < max; i++){
          arr.unshift(i);
        }
      },
      message: title + " unshift"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  arrayPush();
})(window);