(function(global){

  var APP = global.APP;
  var title ="prototype method";

  var prototypeMethod = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        var Func = function(){
        };
        for(var i = 0; i < max; i++){
          var f = new Func();
          f.say = function(){
            console.log("Hi!");
          };
          f.say();
        }
      },
      message: title + " instance method"
    };

    var code2 = {
      code: function(){
        var Func = function(){
          this.say = function(){
            console.log("Hi!");
          };
        };
        for(var i = 0; i < max; i++){
          var f = new Func();
          f.say();
        }
      },
      message: title + " constructor method"
    };

    var code3 = {
      code: function(){
        var Func = function(){
        };
        Func.prototype.say = function(){
          console.log("Hi!");
        };
        for(var i = 0; i < max; i++){
          var f = new Func();
          f.say();
        }
      },
      message: title + " prototype method"
    };

    var code4 = {
      code: function(){
        class Func {
          say(){
            console.log("Hi!");
          }
        };
        for(var i = 0; i < max; i++){
          var f = new Func();
          f.say();
        }
      },
      message: title + " class method"
    };


    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  prototypeMethod();
})(window);