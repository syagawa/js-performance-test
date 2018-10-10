(function(global){

  var APP = global.APP;

  var title = "array length cache";

  var arrayLengthCache = function(){

    var app = window.app = {};

    var code1 = {
      code: function(){
        app.arr = new Array(10000000);
        app.arr1 = [];
        for(var i = 0; i < app.arr.length; i++){
          app.arr1.push(i);
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        app.arr = new Array(10000000);
        app.arr2 = [];
        var len = app.arr.length;
        for(var i = 0; i < len; i++){
          app.arr2.push(i);
        }
      },
      message: title + " after"
    };

    var clean = function(){
      delete window.app.arr;
      delete window.app.arr1;
      delete window.app.arr2;
    };

    APP.runCodes({codes:[code1, code2], clean: clean});

  };
  arrayLengthCache();
})(window);