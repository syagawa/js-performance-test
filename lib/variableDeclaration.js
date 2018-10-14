(function(global){

  var APP = global.APP;
  var title = "variable declaration";

  var variableDeclaration = function(){

    var prepare = function(){
      delete window.obj;
    };

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var a = i + "";
        }
      },
      message: title + " var"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          let a = i + "";
        }
      },
      message: title + " let"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          const a = i + "";
        }
      },
      message: title + " const"
    };

    var code4 = {
      code: function(){
        var max = 1000000;
        window.obj = {};
        var obj = window.obj;
        for(var i = 0; i < max; i++){
          obj[i] = i + "";
        }
      },
      message: title + " global"
    };


    APP.runCodes({prepare: prepare, codes:[code1, code2, code3, code4]});
  };
  variableDeclaration();
})(window);