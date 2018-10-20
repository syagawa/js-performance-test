(function(global){

  var APP = global.APP;

  var title ="jQuery dom variables";

  var jQueryDomVariables = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          $("#div1").html( $("#div1").html() + i + ", " );
        }
      },
      message: title + " jQuery not variables"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var $div = $("#div1");
        for(var i = 0; i < max; i++){
          $div.html( $div.html() + i + ", " );
        }
      },
      message: title + " jQuery variables"
    };

    var code3 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementById("div2").innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS not variables"
    };


    var code4 = {
      code: function(){
        var max = 1000;
        var div2 = document.getElementById("div2");
        for(var i = 0; i < max; i++){
          div2.innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS variables"
    };


    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4],
      clean: clean
    });

  };
  jQueryDomVariables();
})(window);