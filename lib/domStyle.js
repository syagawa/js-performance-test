(function(global){

  var APP = global.APP;
  var title = "dom style";

  var domStyle = function(){
    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var padding = document.getElementById("div1").style.padding;
          var margin = document.getElementById("div1").style.margin;
        }

      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var style = document.getElementById("div2").style;
          var padding = style.padding;
          var margin = style.margin;
        }
      },
      message: title + " after"
    };

    var clean = {
      code: function(){
        document.getElementById("div1").style = "";
        document.getElementById("div2").style = "";
      },
      message: "clean code"
    };

    APP.runCodes({codes:[code1, code2, clean]});

  };
  domStyle();
})(window);