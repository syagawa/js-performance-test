(function(global){

  var APP = global.APP;
  var title = "dom clonenode";

  var domCloneNode = function(){
    var code1 = {
      code: function(){
        var max = 10000;
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          document.getElementById("div1").appendChild(p);
        }
      },
      message: title + " not use cloneNode"
    };

    var code2 = {
      code: function(){
        var max = 10000;
        var source = document.getElementById("div2");
        var clone = source.cloneNode(true);
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          clone.appendChild(p);
        }
        document.getElementById("div2").parentNode.replaceChild(clone, source);
      },
      message: title + " use cloneNode"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2], clean: clean});

  };
  domCloneNode();
})(window);