(function(global){

  var APP = global.APP;

  var title ="jQuery dom attribute";

  var jQueryDomAttribute = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          $("#div1").attr("class");
        }
      },
      message: title + " get jQuery"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementById("div2").getAttribute("class");
        }
      },
      message: title + " get Pure JS"
    };

    var code3 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          $("div1").attr("class", "jquery");
        }
      },
      message: title + " set jQuery"
    };

    var code4 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          document.getElementById("div2").setAttribute("class", "purejs");
        }
      },
      message: title + " set Pure JS"
    };

    var code5 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          $("div1").addClass("jquery");
        }
      },
      message: title + " addClass jQuery"
    };

    var code6 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          $("div1").removeClass("jquery");
        }
      },
      message: title + " removeClass jQuery"
    };


    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div1").setAttribute("class", "div1");
      document.getElementById("div2").innerHTML = "";
      document.getElementById("div2").setAttribute("class", "div2");
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4, code5, code6],
      clean: clean
    });

  };
  jQueryDomAttribute();
})(window);