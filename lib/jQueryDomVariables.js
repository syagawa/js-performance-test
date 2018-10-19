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
      message: title + " not variables"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var $div = $("#div2");
        for(var i = 0; i < max; i++){
          $div.html( $div.html() + i + ", " );
        }
      },
      message: title + " not variables"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2],
      clean: clean
    });

  };
  jQueryDomVariables();
})(window);