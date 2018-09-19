(function(global){

  var APP = global.APP;

  var title ="jQuery dom dataset";

  var jQueryDomDataset = function(){
    var max = 1000;

    var code1 = {
      code: function(){
        for(var i = 0; i < max; i++){
          $("#div1").data("test");
        }
      },
      message: title + " jQuery"
    };

    var code2 = {
      code: function(){
        for(var i = 0; i < max; i++){
          document.getElementById("div2").dataset.test;
        }
      },
      message: title + " jQuery"
    };

    var clean = function(){
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
    };

    APP.runCodes({
      codes: [code1, code2],
      clean:clean
    });

  };
  jQueryDomDataset();
})(window);