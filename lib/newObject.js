(function(global){
  // new Object
  var newObject = function(){
    var max = 1000,
        i;
    console.time("new Object or Literal before");
    for(i = 0; i < max; i++){
      var obj = new Object();
    }
    console.timeEnd("new Object or Literal before");

    console.time("new Object or Literal after");
    for(i = 0; i < max; i++){
      var obj = {};
    }
    console.timeEnd("new Object or Literal after");
  };
  newObject();
})(window);