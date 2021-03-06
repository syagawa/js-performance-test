(function(global){

  var APP = global.APP;
  var title = "Regexp";

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
      message: title + " not global"
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
      message: title + " global"
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
      message: title + " global one char"
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
      message: title + " global or"
    };

    var code5 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /([0-9])/g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " captcha"
    };

    var code6 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /(?:[0-9])/g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " not captcha"
    };

    var code7 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /./;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " . "
    };

    var code8 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /./g;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " . global"
    };

    var code9 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /.*/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " .* "
    };

    var code10 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /.+/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " .+ "
    };

    var code11 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /.+?/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " .+? "
    };

    var code12 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /(?=[0-9])[0-9]/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " (?=[0-9])[0-9] "
    };

    var code13 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /(?![a-z])[0-9]/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " (?![a-z])[0-9] "
    };

    var code14 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = new RegExp("[0-9]");
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " RegExp constructor "
    };

    var code15 = {
      code: function(){
        var max = 100000;
        var str = "1234567890";
        var reg = /(?![a-z])(?![A-Z])(?![a-z])(?![A-Z])(?![a-z])(?![A-Z])(?![a-z])(?![A-Z])(?![a-z])[0-9]/;
        for(var i = 0; i < max; i++){
          var res = str.match(reg);
        }
      },
      message: title + " (?![a-z])(?![A-Z])[0-9] "
    };


    APP.runCodes({codes:[code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14, code15]});
  };
  regexpFunc();
})(window);