(function(global){

  var APP = global.APP;

  var title ="jQuery dom parent";

  var jQueryDomCihldren = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#playground").children();
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#playground").find("*");
        }
      },
      message: title + " jQuery"
    };

    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("playground").children;
        }
      },
      message: title + " Pure JS"
    };

    var code4 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.querySelectorAll("#playground")[0].children;
        }
      },
      message: title + " Pure JS"
    };

    var code5 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.querySelector("#playground").children;
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4, code5],
      clean: clean
    });

  };
  jQueryDomCihldren();
})(window);