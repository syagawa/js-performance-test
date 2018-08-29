(function(global){

  var APP = global.APP;

  var title = "array length cache";
  var arrayLengthCache = function(){

    var arr = [],
        i,
        max = 1000;

    for(i = 0; i < max; i++){
      arr.push(i);
    }

    var code1 = {
      code: function(){
        var arr1 = [];
        for(var i = 0; i < arr.length; i++){
          arr1.push(Math.random());
        }
      },
      message: title + " before"
    };
 
    var code2 = {
      code: function(){
        var arr2 = [];
        var len = arr.length;
        for(var i = 0; i < len; i++){
          arr2.push(Math.random());
        }
      },
      message: title + " after"
    };

    APP.runCodes([code1, code2]);

  };
  arrayLengthCache();
})(window);