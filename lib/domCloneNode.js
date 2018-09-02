(function(global){
  
  var APP = global.APP;

  var title = "dom clonenode";

  var domCloneNode = function(){

    var max = 10000;

    var code1 = {
      code: function(){
        for(i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          document.getElementById("div1").appendChild(p);
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var source = document.getElementById("div2");
        var clone = source.cloneNode(true);
        for(i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          clone.appendChild(p);
        }
        document.getElementById("div2").parentNode.replaceChild(clone, source);
      },
      message: title + " after"
    };

    var clean = {
      code: function(){
        document.getElementById("div1").innerHTML = "";
        document.getElementById("div2").innerHTML = "";
      },
      message: "clean code"
    };

    APP.runCodes([code1, code2, clean]);

  };
  domCloneNode();
})(window);