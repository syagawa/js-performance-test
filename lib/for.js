(function(global){

  var APP = global.APP;
  var title = "";

  var funcFor = function(){

    var arr;
    var max = 100000;

    var prepare = function(){
      arr = [];
      for(var i = 0; i < max; i++){
        arr.push(i);
      }
    };


    var code1 = {
      code: function(){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
          sum += i;
        }
      },
      message: title + "for"
    };

    var code2 = {
      code: function(){
        var sum = 0;
        for(var a of arr){
          sum += a;
        }
      },
      message: title + "for of"
    };

    var code3 = {
      code: function(){
        var sum = 0;
        arr.forEach(function(a){
          sum += a;
        });
      },
      message: title + "forEach"
    };

    var code4 = {
      code: function(){
        var sum = 0;
        var func = function(a){
          sum += a;
        };
        arr.forEach(func);
      },
      message: title + "forEach defined function"
    };

    var code5 = {
      code: function(){
        var sum = 0;
        arr.forEach((a)=>{
          sum += a;
        });
      },
      message: title + "forEach arrow"
    };

    var code6 = {
      code: function(){
        var sum = 0;
        arr.map(function(a){
          sum += a;
        });
      },
      message: title + "map"
    };

    var code7 = {
      code: function(){
        var sum = 0;
        var func = function(a){
          sum += a;
        };
        arr.map(func);
      },
      message: title + "map defined function"
    };

    var code8 = {
      code: function(){
        var sum = 0;
        arr.map((a)=>{
          sum += a;
        });
      },
      message: title + "map arrow"
    };

    var code9 = {
      code: function(){
        var sum = 0;
        arr.reduce(function(sum, a){
          return sum + a;
        });
      },
      message: title + "reduce"
    };

    var code10 = {
      code: function(){
        var sum = 0;
        var func = function(sum, a){
          return sum + a;
        };
        arr.reduce(func);
      },
      message: title + "reduce defined function"
    };


    var code11 = {
      code: function(){
        var sum = 0;
        arr.reduce((sum, a)=>{
          return sum + a;
        });
      },
      message: title + "reduce arrow"
    };


    APP.runCodes({prepare: prepare, codes:[code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11]});

  };
  funcFor();
})(window);