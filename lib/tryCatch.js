(function(global){
  // try catch
  var tryCatch = function(){
    var max = 1000,
        i;

    APP.timer.start();
    // console.time("try catch before");
    for(i = 0; i < max; i++){
      (function(){
        try{
          var j = i;
        }catch(e){
          
        }
      })();
    }
    // console.timeEnd("try catch before");
    var a = "try catch before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("try catch after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    // console.timeEnd("try catch after");
    var b = "try catch after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);
  };
  tryCatch();
})(window);