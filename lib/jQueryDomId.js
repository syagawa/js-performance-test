(function(global){

  var APP = global.APP;

  var title ="jQuery dom id";

  var jQueryDomId = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1")[0].innerHTML += i + ", ";
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div2").html( $("#div2").html() + i + ", " );
        }
      },
      message: title + " before"
    };


    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var html = $("#div2").html();
          $("#div2").html( html + i + ", " );
        }
      },
      message: title + " after"
    };

    var code4 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").innerHTML += i + ", ";
        }
      },
      message: title + " after"
    };

    var code5 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.querySelector("#div2").innerHTML += i + ", ";
        }
      },
      message: title + " after"
    };


    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      
    };

    APP.runCodes([code1, code2, code3, code4, code5], clean);

  };
  jQueryDomId();
})(window);