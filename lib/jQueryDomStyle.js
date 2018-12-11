(function(global){

  var APP = global.APP;

  var title ="jQuery dom style";

  var jQueryDomStyle = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").css("color", "red");
          $("#div1").css("font-size", "14px");
        }
      },
      message: title + " jQuery Style run order"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").css({"color": "red", "font-size": "14px"});
        }
      },
      message: title + " jQuery Style run set"
    };

    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").style.color = "red";
          document.getElementById("div2").style.fontSize = "14px";
        }
      },
      message: title + " Pure JS run order"
    };

    var code4 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").setAttribute("style", "color: red; font-size: 14px;");
        }
      },
      message: title + " Pure JS run set"
    };

    var clean = function(){
      document.getElementById("div1").style = "";
      document.getElementById("div2").style = "";
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4],
      clean: clean
    });

  };
  jQueryDomStyle();
})(window);