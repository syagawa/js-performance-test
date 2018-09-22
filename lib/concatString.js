(function(global){

  var APP = global.APP;
  var title = "concat string";

  var concatString = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = "aaaaaaaaaa";
          var b = "bbbbbbbbbb";
          var c = "cccccccccc";
          var d = "dddddddddd";
          var e = "eeeeeeeeee";

          var text = a + b + c + d + e;

        }
      },
      message: title + " + "
    };

    var code2 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = "aaaaaaaaaa";
          var b = "bbbbbbbbbb";
          var c = "cccccccccc";
          var d = "dddddddddd";
          var e = "eeeeeeeeee";

          var text = a.concat(b).concat(c).concat(d).concat(e);

        }
      },
      message: title + " concat "
    };

    var code3 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = "aaaaaaaaaa";
          var b = "bbbbbbbbbb";
          var c = "cccccccccc";
          var d = "dddddddddd";
          var e = "eeeeeeeeee";

          var text = `${a}${b}${c}${d}${e}`;

        }
      },
      message: title + " template literal "
    };

    var code4 = {
      code: function(){
        var max = 100000;
        for(var i = 0; i < max; i++){
          var a = "aaaaaaaaaa";
          var b = "bbbbbbbbbb";
          var c = "cccccccccc";
          var d = "dddddddddd";
          var e = "eeeeeeeeee";

          var text = a;
          text += b;
          text += c;
          text += d;
          text += e;

        }
      },
      message: title + " += "
    };




    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  concatString();
})(window);