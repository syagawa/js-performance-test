(function(global){

  var APP = global.APP;

  var title ="jQuery dom html text";

  var jQueryDomHtmlText = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").text( $("#div1").text() + i + ", " );
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").contentText += i + ", ";
        }
      },
      message: title + " jQuery"
    };

    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").html( $("#div1").html() + i + ", " );
        }
      },
      message: title + " jQuery"
    };

    var code4 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      
    };

    APP.runCodes([code1, code2, code3, code4], clean);

  };
  jQueryDomHtmlText();
})(window);