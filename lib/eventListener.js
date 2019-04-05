(function(global){

  var APP = global.APP;
  var title = "Event Listner";

  var eventlistener = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var elm = document.createElement("button");
          elm.addEventListener("click", function(e){
            console.log(e);
          });
        }
      },
      message: title + " with anonymous function"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var handler = function(e){
          console.log(e);
        };
        for(var i = 0; i < max; i++){
          var elm = document.createElement("button");
          elm.addEventListener("click", handler);
        }
      },
      message: title + " with handler"
    };

    var code3 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var elm = document.createElement("button");
          document.getElementById("div1").append(elm);
          elm.addEventListener("click", function(e){
            console.log(e);
          });

        }
      },
      message: title + " with anonymous function and add element"
    };

    var code4 = {
      code: function(){
        var max = 100000;
        var handler = function(e){
          console.log(e);
        };
        for(var i = 0; i < max; i++){
          var elm = document.createElement("button");
          document.getElementById("div1").append(elm);
          elm.addEventListener("click", handler);
        }
      },
      message: title + " with handler and add element"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2, code3, code4], clean: clean});
  };
  eventlistener();
})(window);