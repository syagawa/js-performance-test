(function(global){

  var APP = global.APP;
  var title = "regexp";

  var regexpFunc = function(){
    var code1 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /[0-9]/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " RegExp not global"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /[0-9]/g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " RegExp global"
    };

    var code3 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /5/g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " RegExp global one char"
    };

    var code4 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /5|6/g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " RegExp global or"
    };


    APP.runCodes({codes:[code1, code2, code3, code4]});
  };
  regexpFunc();
})(window);