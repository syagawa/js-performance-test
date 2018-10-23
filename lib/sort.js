(function(global){

  var APP = global.APP;

  var title = "sort";

  var sortFunc = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        var arr = [1,2,3,4,5];
        for(var i = 0; i < max; i++){
          arr.sort();
        }
      },
      message: title + " not rearrange "
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var arr = [5,3,1,2,4];
        for(var i = 0; i < max; i++){
          arr.sort();
        }
      },
      message: title + " rearrange "
    };

    var code3 = {
      code: function(){
        var max = 1000;
        var arr = [1,2,3,4,5];
        for(var i = 0; i < max; i++){
          arr.sort(function(first, second){
            return first - second;
          });
        }
      },
      message: title + " not rearrange function"
    };

    var code4 = {
      code: function(){
        var max = 1000;
        var arr = [5,3,1,2,4];
        for(var i = 0; i < max; i++){
          arr.sort(function(first, second){
            return first - second;
          });
        }
      },
      message: title + " rearrange function"
    };

    APP.runCodes({codes:[code1, code2, code3, code4]});

  };
  sortFunc();
})(window);