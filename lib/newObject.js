(function(global){
  // new Object
  var newObject = function(){
    var max = 1000,
        i;


    APP.timer.start();
    // console.time("new Object or Literal before");
    for(i = 0; i < max; i++){
      var obj = new Object();
    }
    // console.timeEnd("new Object or Literal before");
    var a = "new Object or Literal before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("new Object or Literal after");
    for(i = 0; i < max; i++){
      var obj = {};
    }
    // console.timeEnd("new Object or Literal after");
    var b = "new Object or Literal before " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);

  };
  newObject();
})(window);