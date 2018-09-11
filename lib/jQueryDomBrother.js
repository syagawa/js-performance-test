(function(global){

  var APP = global.APP;

  var title ="jQuery dom brother";

  var jQueryDomBrother = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $($("#playground").children()[0]).next();
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("playground").children[0].nextElementSibling;
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      
    };

    APP.runCodes([code1, code2], clean);

  };
  jQueryDomBrother();
})(window);