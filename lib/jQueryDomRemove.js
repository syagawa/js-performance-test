(function(global){

  var APP = global.APP;

  var title ="jQuery dom brother";

  var jQueryDomRemove = function(){
    var max = 1000;

    var prepare = function(){
      for(var i = 0; i < max; i++){
        var p = document.createElement("p");
        p.textContent = "" + i;
        document.getElementById("div1").appendChild(p);
        document.getElementById("div2").appendChild(p);
      }
    };

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").children().first().remove();
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var el = document.getElementById("div2");
          el.removeChild(el.children[0]);
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      
    };

    APP.runCodes({
      prepare: prepare,
      codes: [code1, code2],
      clean: clean
    });

  };
  jQueryDomRemove();
})(window);