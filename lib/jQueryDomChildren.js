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
          document.getElementById("playground").childNodes;
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
  jQueryDomCihldren();
})(window);