(function(global){

  var APP = global.APP;
  var title = "dom style";

  var domStyle = function(){

    var prepare = function(){
      document.getElementById("div1").style.padding = "15px;";
      document.getElementById("div2").style.padding = "15px;";
    };

    var code1 = {
      code: function(){
        var max = 1000;
        for(var i = 0; i < max; i++){
          var padding = document.getElementById("div1").style.padding;
          var margin = document.getElementById("div1").style.margin;
        }

      },
      message: title + " direct"
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
      message: title + " variable"
    };

    var clean = function(){
      document.getElementById("div1").style = "";
      document.getElementById("div2").style = "";
    };

    APP.runCodes({
      codes:[code1, code2],
      clean: clean,
      prepare: prepare
    });

  };
  domStyle();
})(window);