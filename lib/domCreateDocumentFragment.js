(function(global){

  var APP = global.APP;
  var title = "dom create document fragment";

  var domCreateDocumentFragment = function(){

    var code1 = {
      code: function(){
        var max = 10000;
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          document.getElementById("div1").appendChild(p);
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var max = 10000;
        var docFlag = document.createDocumentFragment();
        for(var i = 0; i < max; i++){
          var p = document.createElement("p");
          p.textContent = i + ",";
          docFlag.appendChild(p);
        }
        document.getElementById("div2").appendChild(docFlag);
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
  domCreateDocumentFragment();
})(window);