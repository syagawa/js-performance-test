(function(global){

  var APP = global.APP;
  var title = "boolean";

  var decideBoolean = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = true;
          if(a){
            a = true;
          }
        }
      },
      message: title + " if(a){} "
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = true;
          if(a === true){
            a = true;
          }
        }
      },
      message: title + " if(a === true){} "
    };

    var code3 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = true;
          if(!a){
            a = true;
          }
        }
      },
      message: title + " if(!a){} "
    };

    var code4 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = true;
          if(a === false){
            a = true;
          }
        }
      },
      message: title + " if(a === false){} "
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  decideBoolean();
})(window);