(function(global){
  // dom style
  var domStyle = function(){
    var i,
        max = 1000;

    APP.timer.start();
    // console.time("dom style before");
    for(i = 0; i < max; i++){
      var padding = document.getElementById("div1").style.padding;
      var margin = document.getElementById("div1").style.margin;
    }
    // console.timeEnd("dom style before");
    var a = "dom style before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("dom style after");
    for(i = 0; i < max; i++){
      var style = document.getElementById("div2").style;
      var padding = style.padding;
      var margin = style.margin;
    }
    // console.timeEnd("dom style after");
    var b = "dom style after " + APP.timer.end() + "ms";

    document.getElementById("div1").style = "";
    document.getElementById("div1").style = "";
    APP.timer.show([a,b]);

  };
  domStyle();
})(window);