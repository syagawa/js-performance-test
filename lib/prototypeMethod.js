(function(global){

  var APP = global.APP;

  var title ="prototype method";

  var prototypeMethod = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var Func = function(){
          };
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
        for(var i = 0; i < max; i++){
          var Func = function(){
            this.say = function(){
              console.log("Hi!");
            };
          };
          var f = new Func();
          f.say();
        }
      },
      message: title + " constructor method"
    };

    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var Func = function(){
          };
          Func.prototype.say = function(){
            console.log("Hi!");
          };

          var f = new Func();
          f.say();
        }
      },
      message: title + " prototype method"
    };


    APP.runCodes([code1, code2, code3]);

  };
  prototypeMethod();
})(window);