(function(global){

  var APP = global.APP;

  var title = "array length cache";

  var arrayLengthCache = function(){

    var code1 = {
      code: function(){
        var arr = new Array(10000000);
        var arr1 = [];
        for(var i = 0; i < arr.length; i++){
          arr1.push(i);
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var arr = new Array(10000000);
        var arr1 = [];
        var len = arr.length;
        for(var i = 0; i < len; i++){
          arr1.push(i);
        }
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});

  };
  arrayLengthCache();
})(window);