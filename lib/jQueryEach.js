(function(global){

  var APP = global.APP;

  var title ="jQuery dom id";

  var jQueryDomId = function(){

    var prepare = function(){
      var max = 1000;
      var div1 = document.getElementById("div1");
      var div2 = document.getElementById("div2");
      for(var i = 0; i < max; i++){
        div1.innerHTML += "<p>" + i + "</p>";
        div2.innerHTML += "<p>" + i + "</p>";
      }
    };

    var code1 = {
      code: function(){
        $("#div1 p").each(function(index){
          $(this).text("each");
        });
      },
      message: title + " jQuery $().each"
    };

    var code2 = {
      code: function(){
        $.each($("#div1 p"), function(index, value){
          $(value).text("each");
        });
      },
      message: title + " jQuery $.each"
    };

    var code3 = {
      code: function(){
        var elms = document.getElementById("div1").getElementsByTagName("p");
        var len = elms.length;
        for(var i = 0; i < len; i++){
          elms[i].innerHTML = "each";
        }
      },
      message: title + " pure JS for"
    };

    var code4 = {
      code: function(){
        var elms = document.getElementById("div1").children;
        var len = elms.length;
        for(var i = 0; i < len; i++){
          elms[i].innerHTML = "each";
        }
      },
      message: title + " pure JS for"
    };

    var code5 = {
      code: function(){
        var elms = document.querySelectorAll("div1 p");
        var len = elms.length;
        for(var i = 0; i < len; i++){
          elms[i].innerHTML = "each";
        }
      },
      message: title + " pure JS for"
    };



    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      prepare: prepare,
      codes: [code1, code2, code3, code4, code5],
      clean: clean
    });

  };
  jQueryDomId();
})(window);