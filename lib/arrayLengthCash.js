(function(global){
  // array length cash
  var arrayLengthCash = function(){
    var arr = [],
        i,
        max = 1000;

    for(i = 0; i < max; i++){
      arr.push(i);
    }

    console.time("array length cach before");
    var arr1 = [];
    for(i = 0; i < arr.length; i++){
      arr1.push(Math.random());
    }
    console.timeEnd("array length cach before");

    console.time("array length cach after");
    var arr2 = [];
    var len = arr.length;
    for(i = 0; i < len; i++){
      arr2.push(Math.random());
    }
    console.timeEnd("array length cach after");
  };
  arrayLengthCash();
})(window);