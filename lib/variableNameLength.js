(function(global){

  var APP = global.APP;
  var title = "variable name length";

  var variableNameLength = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var a = i;
        }
      },
      message: title + " short"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12 = i;
        }
      },
      message: title + " long"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        var b = function(num){
          var c = num;
        };
        for(var i = 0; i < max; i++){
          b(i);
        }
      },
      message: title + " short"
    };

    var code4 = {
      code: function(){
        var max = 1000000;
        var variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12 = function(num){
          var c = num;
        };
        for(var i = 0; i < max; i++){
          variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12variable12(i);
        }
      },
      message: title + " short"
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});
  };
  variableNameLength();
})(window);