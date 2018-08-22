(function(global){

  // array length cash
  var arrayLengthCash = function(){
    var arr = [],
        i,
        max = 1000,
        APP = global.APP;

    for(i = 0; i < max; i++){
      arr.push(i);
    }


    APP.timer.start();
    // console.time("array length cach before");
    var arr1 = [];
    for(i = 0; i < arr.length; i++){
      arr1.push(Math.random());
    }
    console.timeEnd("array length cach before");
    console.log("array length cach before " + APP.timer.end() + "ms");

    APP.timer.start();
    // console.time("array length cach after");
    var arr2 = [];
    var len = arr.length;
    for(i = 0; i < len; i++){
      arr2.push(Math.random());
    }
    // console.timeEnd("array length cach after");
    console.log("array length cach after " + APP.timer.end() + "ms");

  };
  arrayLengthCash();
})(window);