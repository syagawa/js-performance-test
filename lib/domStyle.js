(function(global){
  // dom style
  var domStyle = function(){
    var i,
        max = 1000;
    console.time("dom style before");
    for(i = 0; i < max; i++){
      var padding = document.getElementById("div1").style.padding;
      var margin = document.getElementById("div1").style.margin;
    }
    console.timeEnd("dom style before");

    console.time("dom style after");
    for(i = 0; i < max; i++){
      var style = document.getElementById("div2").style;
      var padding = style.padding;
      var margin = style.margin;
    }
    console.timeEnd("dom style after");

    document.getElementById("div1").style = "";
    document.getElementById("div1").style = "";

  };
  domStyle();
})(window);