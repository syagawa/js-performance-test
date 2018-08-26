(function(global){

  var APP = global.APP;

  var title = "array length cache";
  var arrayLengthCache = function(){

    APP.timer.hide();

    var arr = [],
        i,
        max = 1000;

    for(i = 0; i < max; i++){
      arr.push(i);
    }

    var code1 = APP.runCode(function(){
      var arr1 = [];
      for(i = 0; i < arr.length; i++){
        arr1.push(Math.random());
      }
    }, title + "before");
 
    var code2 = APP.runCode(function(){
      var arr2 = [];
      var len = arr.length;
      for(i = 0; i < len; i++){
        arr2.push(Math.random());
      }
    }, title + "after");


    APP.timer.show([code1, code2]);



  };
  arrayLengthCache();
})(window);