(function(global){

  // array length cash
  var arrayLengthCache = function(){
    var arr = [],
        i,
        max = 1000,
        APP = global.APP;

    for(i = 0; i < max; i++){
      arr.push(i);
    }

    APP.timer.start();
    // console.time("array length cache before");
    var arr1 = [];
    for(i = 0; i < arr.length; i++){
      arr1.push(Math.random());
    }
    // console.timeEnd("array length cache before");
    var a = "array length cache before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("array length cache after");
    var arr2 = [];
    var len = arr.length;
    for(i = 0; i < len; i++){
      arr2.push(Math.random());
    }
    // console.timeEnd("array length cache after");
    var b = "array length cache after " + APP.timer.end() + "ms";

    APP.timer.show([a,b]);

  };
  arrayLengthCache();
})(window);