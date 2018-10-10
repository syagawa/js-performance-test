(function(global){

  var APP = global.APP;
  var title = "dom create document fragment";

  var domCreateDocumentFragment = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          document.getElementById("div1").appendChild(p);
        }
      },
      message: title + " not use DocumentFragment"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var flagment = document.createDocumentFragment();
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          flagment.appendChild(p);
        }
        document.getElementById("div2").appendChild(flagment);
      },
      message: title + " use DocumentFragment"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2], clean: clean});
  };
  domCreateDocumentFragment();
})(window);