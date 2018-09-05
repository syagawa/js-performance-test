(function(global){
  // try catch

  var APP = global.APP;
  var title = "try catch";

  var tryCatch = function(){

    var code1 = {
      code: function(){
    var max = 100000;
        for(var i = 0; i < max; i++){
          (function(){
            try{
              var j = i;
            }catch(e){
              var er = e;
            }
          })();
        }

      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var j = i;
        }
      },
      message: title + " after"
    };

    APP.runCodes([code1, code2]);
  };
  tryCatch();
})(window);