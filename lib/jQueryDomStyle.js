(function(global){

  var APP = global.APP;

  var title ="jQuery dom style";

  var jQueryDomStyle = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").css("color", "red");
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").style.color = "red";
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").style = "";
      document.getElementById("div2").style = "";
      
    };

    APP.runCodes({
      codes: [code1, code2],
      clean: clean
    });

  };
  jQueryDomStyle();
})(window);