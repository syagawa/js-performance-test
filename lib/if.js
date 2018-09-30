(function(global){

  var APP = global.APP;
  var title = "if";

  var funcIf = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        var a = 1;
        var b = "1";
        for(var i = 0; i < max; i++){
          if(a == b){
          }
        }
      },
      message: title + " 1 == '1'"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var a = 1;
        var b = 1;
        for(var i = 0; i < max; i++){
          if(a == b){
          }
        }
      },
      message: title + " 1 == 1"
    };

    var code3 = {
      code: function(){
        var max = 100000;
        var a = 1;
        var b = "1";
        for(var i = 0; i < max; i++){
          if(a === b){
          }
        }
      },
      message: title + " 1 === '1'"
    };

    var code4 = {
      code: function(){
        var max = 100000;
        var a = 1;
        var b = 1;
        for(var i = 0; i < max; i++){
          if(a === b){
          }
        }
      },
      message: title + " 1 === 1"
    };



    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  funcIf();
})(window);