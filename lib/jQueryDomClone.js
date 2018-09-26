(function(global){

  var APP = global.APP;

  var title ="jQuery dom clone";

  var jQueryDomClone = function(){

    var click_event = function(e){
      console.log(e);
    };

    var prepare = function(){
      var max = 100;
      for(var i = 0; i < max; i++){
        document.getElementById("div1").innerHTML += "<p>" + i + "</p>";
        document.getElementById("div2").innerHTML += "<p>" + i + "</p>";
      }
      document.getElementById("div1").addEventListener("click", click_event);
      document.getElementById("div2").addEventListener("click", click_event);
    };

    var code1 = {
      code: function(){
        var max = 100;
        for(var i = 0; i < max; i++){
          var clone = $("#div1").clone(true);
        }
      },
      message: title + " jQuery clone true"
    };

    var code2 = {
      code: function(){
        var max = 100;
        for(var i = 0; i < max; i++){
          var clone = document.getElementById("div2").cloneNode(true);
        }
      },
      message: title + " Pure JS cloneNode true"
    };

    var code3 = {
      code: function(){
        var max = 100;
        for(var i = 0; i < max; i++){
          var clone = $("#div1").clone(false);
        }
      },
      message: title + " jQuery clone false"
    };

    var code4 = {
      code: function(){
        var max = 100;
        for(var i = 0; i < max; i++){
          var clone = document.getElementById("div2").cloneNode(false);
        }
      },
      message: title + " Pure JS cloneNode false"
    };


    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      document.getElementById("div1").removeEventListener("click", click_event);
      document.getElementById("div2").removeEventListener("click", click_event);
    };

    APP.runCodes({
      prepare: prepare,
      codes: [code1, code2, code3, code4],
      clean: clean
    });

  };
  jQueryDomClone();
})(window);