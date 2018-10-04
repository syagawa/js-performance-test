(function(global){

  var APP = global.APP;

  var title ="jQuery dom class";

  var jQueryDomClass = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $(".div1")[0].innerHTML += i + ", ";
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $(".div2").html( $(".div2").html() + i + ", " );
        }
      },
      message: title + " jQuery"
    };


    var code3 = {
      code: function(){
        for(var i = 0; i < max; i++){
          var html = $(".div2").html();
          $(".div2").html( html + i + ", " );
        }
      },
      message: title + " jQuery"
    };

    var code4 = {
      code: function(){
        var $div = $(".div2");
        for(var i = 0; i < max; i++){
          var html = $div.html();
          $div.html( html + i + ", " );
        }
      },
      message: title + " jQuery"
    };

    var code5 = {
      code: function(){
        var $div = $(".div2");
        for(var i = 0; i < max; i++){
          $div.html( $div.html() + i + ", " );
        }
      },
      message: title + " jQuery"
    };


    var code6 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementsByClassName("div2")[0].innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS"
    };

    var code7 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.querySelectorAll(".div2")[0].innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS"
    };

    var code8 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.querySelector(".div2").innerHTML += i + ", ";
        }
      },
      message: title + " Pure JS"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2, code3, code4, code5, code6, code7, code8],
      clean:clean
    });

  };
  jQueryDomClass();
})(window);