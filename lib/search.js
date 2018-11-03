(function(global){

  var APP = global.APP;

  var title = "timer";

  var search = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        var str = "abcdefghijklmnopqrstuvwxyz";
        for(var i = 0; i < max; i++){
          str.match(/z/);
        }
      },
      message: title + " String.match "
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var str = "abcdefghijklmnopqrstuvwxyz";
        for(var i = 0; i < max; i++){
          str.indexOf("z");
        }
      },
      message: title + " String.match "
    };


    APP.runCodes({codes:[code1, code2]});

  };
  search();
})(window);