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

    var code3 = {
      code: function(){
        var max = 100000;
        var arr = [];
        for(var i = 0; i < max; i++){
          arr[i] = i;
        }
      },
      message: title + " array"
    };

    APP.runCodes({codes:[code1, code2]});
  };
  objectAndArray();
})(window);