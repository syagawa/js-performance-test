(function(global){

  var APP = global.APP;
  var title = "new Object";

  var newObject = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var obj = new Object();
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var obj = {};
        }
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});
  };
  newObject();
})(window);