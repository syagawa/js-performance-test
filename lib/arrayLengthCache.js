(function(global){

  var APP = global.APP;

  var title = "array length cache";

  var arrayLengthCache = function(){

    var code1 = {
      code: function(){
        var arr = new Array(1000000);
        var arr1 = [];
        for(var ii = 0; ii < arr.length; ii++){
          arr1.push(Math.random());
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var arr = new Array(1000000);
        var arr2 = [];
        var len = arr.length;
        for(var ii = 0; ii < len; ii++){
          arr2.push(Math.random());
        }
      },
      message: title + " after"
    };

    APP.runCodes([code1, code2]);

  };
  arrayLengthCache();
})(window);