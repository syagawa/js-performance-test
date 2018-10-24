(function(global){

  var APP = global.APP;

  var title = "timer";

  var nullDelete = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var arr = [];
          for(var ii = 0; ii < max; ii++){
            arr.push(ii);
            arr.push(ii * ii);
          }
        }
      },
      message: title + " not substitute null "
    };

    var code2 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var arr = [];
          for(var ii = 0; ii < max; ii++){
            arr.push(ii);
            arr.push(ii * ii);
          }
          arr = null;
        }
      },
      message: title + " substitute null "
    };

    var code3 = {
      code: function(){
        var max = 1000;
        var obj = {};
        for(var i = 0; i < max; i++){
          obj.arr = [];
          for(var ii = 0; ii < max; ii++){
            obj.arr.push(ii);
            obj.arr.push(ii * ii);
          }
        }
      },
      message: title + " not delete "
    };

   var code4 = {
      code: function(){
        var max = 1000;
        var obj = {};
        for(var i = 0; i < max; i++){
          obj.arr = [];
          for(var ii = 0; ii < max; ii++){
            obj.arr.push(ii);
            obj.arr.push(ii * ii);
          }
          delete obj.arr;
        }
      },
      message: title + " delete "
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  nullDelete();
})(window);