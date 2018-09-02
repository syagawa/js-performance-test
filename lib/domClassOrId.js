(function(global){

  var APP = global.APP;

  var title ="dom class or id";

  var domClassOrId = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementsByClassName("div1")[0].innerHTML += i + ", ";
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").innerHTML += i + ", ";
        }
      },
      message: title + " after"
    };

    var clean = {
      code: function(){
        document.getElementsByClassName("div1")[0].innerHTML = "";
        document.getElementById("div2").innerHTML = "";
      },
      message: "clean code"
    };

    APP.runCodes([code1, code2, clean]);

  };
  domClassOrId();
})(window);