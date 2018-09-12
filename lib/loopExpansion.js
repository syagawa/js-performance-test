(function(global){

  var APP = global.APP;
  var title = "loop expansion";

  var loopExpansion = function(){

    var code1 = {
      code: function(){
        var max = 100,
            j = 0;
        while(j < max){
          j++;
        }
      },
      message: title + " before"
    };

    var code2 = {
      code: function(){
        var j = 0;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
        j++; j++; j++; j++; j++; j++; j++; j++; j++; j++;
      },
      message: title + " after"
    };

    APP.runCodes({codes:[code1, code2]});
  };
  loopExpansion();
})(window);