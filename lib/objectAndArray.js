(function(global){

  var APP = global.APP;
  var title = "object and array";

  var objectAndArray = function(){
    var code1 = {
      code: function(){
        var max = 100000;
        var obj = {};
        for(var i = 0; i < max; i++){
          obj[i] = i;
        }
      },
      message: title + " object"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var arr = [];
        for(var i = 0; i < max; i++){
          arr[i] = i;
        }
      },
      message: title + " array"
    };

    var prepare = {
      code: function(){
        var max = 100000;
        global.arr = [];
        global.obj = {};
        for(var i = 0; i < max; i++){
          global.arr[i] = i;
          global.obj[i] = i;
        }
      },
      message: title + " prepare"
    };

    var code3 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          global.obj[i];
        }
      },
      message: title + " prepare"
    };

    var code4 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          global.arr[i];
        }
      },
      message: title + " prepare"
    };


    APP.runCodes({codes:[code1, code2, prepare, code3, code4]});
  };
  objectAndArray();
})(window);