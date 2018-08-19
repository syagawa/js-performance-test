(function(global){
  // loop expansion
  var loopExpansion = function(){
    var max = 100,
        i,
        j = 0;

    console.time("loop expansion before");
    while(i--){
      j++;
    }
    console.timeEnd("loop expansion before");

    console.time("loop expansion after");
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
    console.timeEnd("loop expansion after");
  };
  loopExpansion();
})(window);