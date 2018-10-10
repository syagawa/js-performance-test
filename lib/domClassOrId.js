(function(global){

  var APP = global.APP;

  var title ="dom class or id";

  var domClassOrId = function(){
    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementsByClassName("div1")[0].innerHTML += i + ", ";
        }
      },
      message: title + " class"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementById("div2").innerHTML += i + ", ";
        }
      },
      message: title + " id"
    };

    var clean = function(){
      document.getElementsByClassName("div1")[0].innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2], clean: clean});

  };
  domClassOrId();
})(window);