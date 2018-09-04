(function(global){

  var APP = global.APP;

  var title ="prototype chain";

  var prototypeChain = function(){
    var max = 10000;

    var makeChain = function(con, len){
      if(!len){
        len = 1;
      }
      if(len === 0){
        len = 1;
      }
      var f = con;
      for(var i = 0; i < len; i++){
        var ff = function(val){
          this.val = val;
        };
        ff.prototype = Object.create(f.prototype);
        f = ff;
      }
      return f;
    };

    var Func = function(val){
      this.val = val;
    };
    Func.prototype.say =  function(){
      console.log("Hi! " + this.val);
    };

    var Func20 = makeChain(Func, 20);
    var Func1000 = makeChain(Func, 1000);

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var f = new Func(i);
          f.say();
        }
      },
      message: title + " prototype chain 1"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var f = new Func20(i);
          f.say();
        }
      },
      message: title + " prototype chain 2"
    };

    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var f = new Func1000(i);
          f.say();
        }
      },
      message: title + " prototype chain 3"
    };


    APP.runCodes([code1, code2, code3]);

  };
  prototypeChain();
})(window);