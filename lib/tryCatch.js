(function(global){
  // try catch

  var APP = global.APP;
  var title = "try catch";

  var tryCatch = function(){

    var code1 = {
      code: function(){
        var max = 1000;
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
      message: title + " try catch not throw"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          (function(){
            try{
              throw new Error("error");
            }catch(e){
              var er = e;
            }
          })();
        }

      },
      message: title + " try catch throw Error"
    };

    var code3 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          (function(){
            try{
              throw "error";
            }catch(e){
              var er = e;
            }
          })();
        }

      },
      message: title + " try catch throw String"
    };

    var code4 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          (function(){
            try{
              throw {};
            }catch(e){
              var er = e;
            }
          })();
        }

      },
      message: title + " try catch throw Object"
    };

    var code5 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          (function(){
            try{
              throw [];
            }catch(e){
              var er = e;
            }
          })();
        }

      },
      message: title + " try catch throw Array"
    };

    var code6 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var j = i;
        }
      },
      message: title + " no try catch"
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4, code5, code6]
    });
  };
  tryCatch();
})(window);