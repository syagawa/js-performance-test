(function(global){

  var APP = global.APP;
  var title = "dom direct or variable";

  var domDirectOrVariable = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementById("div1").innerHTML += i + ", ";
        }
      },
      message: title + " direct"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var str = "";
        for(var i = 0; i < max; i++){
          str += i + ", ";
        }
        document.getElementById("div2").innerHTML = str;
      },
      message: title + " variable"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2], clean: clean});

  };
  domDirectOrVariable();
})(window);