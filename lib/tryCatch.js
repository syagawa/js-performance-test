(function(global){
  // try catch
  var tryCatch = function(){
    var max = 1000,
        i;
    console.time("try catch before");
    for(i = 0; i < max; i++){
      (function(){
        try{
          var j = i;
        }catch(e){
          
        }
      })();
    }
    console.timeEnd("try catch before");

    console.time("try catch after");
    for(i = 0; i < max; i++){
      var j = i;
    }
    console.timeEnd("try catch after");
  };
  tryCatch();
})(window);