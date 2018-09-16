(function(global){

  var APP = global.APP;

  var title ="jQuery dom create and add";

  var jQueryDomCreateAdd = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").append($("p").text(i));
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var el = document.createElement("p");
          el.textContent = i;
          document.getElementById("div2").appendChild(el);
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2],
      clean: clean
    });

  };
  jQueryDomCreateAdd();
})(window);