(function(global){

  var APP = global.APP;
  var title = "function scope";

  var functionScope = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          (function(){
            var j = i;
          })();
        }
      },
      message: title + " function"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var j = i;
        }
      },
      message: title + " not use function"
    };

    var code3 = {
      code: function(){
        window.scope0 = 0;
        var obj = {
          func: function(){
            var max = 100000;
            for(var i = 0; i < max; i++){
              window.scope0 += i;
            }
          }
        };
        obj.func();
      },
      message: title + " scope0"
    };


    var code4 = {
      code: function(){
        var scope1 = 0;
        var obj = {
          func: function(){
            var max = 100000;
            for(var i = 0; i < max; i++){
              scope1 += i;
            }
          }
        };
        obj.func();
      },
      message: title + " scope1"
    };

    var code5 = {
      code: function(){
        var obj = {
          scope2: 0,
          func: function(){
            var max = 100000;
            for(var i = 0; i < max; i++){
              this.scope2 += i;
            }
          }
        };
        obj.func();
      },
      message: title + " scope2"
    };

    var code6 = {
      code: function(){
        var obj = {
          func: function(){
            var scope3 = 0;
            var max = 100000;
            for(var i = 0; i < max; i++){
              this.scope3 += i;
            }
          }
        };
        obj.func();
      },
      message: title + " scope3"
    };



    APP.runCodes({codes:[code1, code2, code3, code4, code5, code6]});

  };
  functionScope();
})(window);