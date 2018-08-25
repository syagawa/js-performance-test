(function(global){
  // loop expansion
  var loopExpansion = function(){
    var max = 100,
        i,
        j = 0;

    APP.timer.start();
    // console.time("loop expansion before");
    while(i--){
      j++;
    }
    // console.timeEnd("loop expansion before");
    var a = "loop expansion before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("loop expansion after");
    num = 0;
    j = 0;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
    // console.timeEnd("loop expansion after");
    var b = "loop expansion after " + APP.timer.end() + "ms";
    APP.timer.show([a,b]);
  };
  loopExpansion();
})(window);