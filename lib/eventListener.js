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

    APP.runCodes({codes:[code1, code2]});
  };
  eventlistener();
})(window);