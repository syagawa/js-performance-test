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
      message: title + " before"
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
      message: title + " after"
    };

    var clean = {
      code: function(){
        document.getElementById("div1").innerHTML = "";
        document.getElementById("div2").innerHTML = "";
      },
      message: "clean code"
    };

    APP.runCodes([code1, code2, clean]);

  };
  domDirectOrVariable();
})(window);