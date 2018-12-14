(function(global){

  var APP = global.APP;

  var title = "array includes";

  var arrayIncludes = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        var arr = ["1","2","3","4","5","6","7","8","9","10"];
        var key = "10";
        for(var i = 0; i < max; i++){
          arr.includes(key);
        }
      },
      message: title + " includes"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        var arr = ["1","2","3","4","5","6","7","8","9","10"];
        var key = "10";
        for(var i = 0; i < max; i++){
          arr.indexOf(key);
        }
      },
      message: title + " indexOf"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        var arr = [
          {num: "1"},
          {num: "2"},
          {num: "3"},
          {num: "4"},
          {num: "5"},
          {num: "6"},
          {num: "7"},
          {num: "8"},
          {num: "9"},
          {num: "10"}
        ];
        var key = "10";
        for(var i = 0; i < max; i++){
          for(var j = 0; j < arr.length; j++){
            arr[j].num === key;
          }
        }
      },
      message: title + " indexOf"
    };

    APP.runCodes({codes:[code1, code2, code3]});

  };
  arrayIncludes();
})(window);