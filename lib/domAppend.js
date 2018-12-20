(function(global){

  var APP = global.APP;
  var title = "dom clonenode";

  var domAppend = function(){
    var code1 = {
      code: function(){
        var max = 10000;
        var parent = document.getElementById("div1");
        for(var i = 0; i < max; i++){
          var elm = document.createElement("p");
          elm.textContent = "abcedfg";
          parent.append(elm);
        }
      },
      message: title + " dom append"
    };

    var code2 = {
      code: function(){
        var max = 10000;
        var parent = document.getElementById("div1");
        var first = document.createElement("p");
        first.textContent = "abcedfg";
        parent.append(first);
        for(var i = 0; i < max; i++){
          var elm = document.createElement("p");
          elm.textContent = "abcedfg";
          parent.insertBefore(elm, first);
        }
      },
      message: title + " dom insetBefore"
    };

    var code3 = {
      code: function(){
        var max = 10000;
        var parent = document.getElementById("div1");
        for(var i = 0; i < max; i++){
          var elm = document.createElement("p");
          elm.textContent = "abcedfg";
          parent.appendChild(elm);
        }
      },
      message: title + " dom appendChild"
    };


    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({codes:[code1, code2, code3], clean: clean});

  };
  domAppend();
})(window);