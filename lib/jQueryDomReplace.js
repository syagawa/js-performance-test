(function(global){

  var APP = global.APP;

  var title ="jQuery dom replace";

  var jQueryDomReplace = function(){
    var max = 1000;

    var prepare = function(){
      var p = document.createElement("p");
      p.textContent = "abcdefg";
      document.getElementById("div1").appendChild(p);
      document.getElementById("div2").appendChild(p);
    };

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var p = $("p").text("hijklmn");
          $("#div1 p").replaceWith(p);
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var old_el = document.getElementById("div2").children[0];
          var new_el = document.createElement("p");
          new_el.textContent = "hijklmn";
          document.getElementById("div2").replaceChild(new_el, old_el);
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
  jQueryDomReplace();
})(window);