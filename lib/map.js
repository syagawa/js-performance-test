(function(global){

  var APP = global.APP;

  var title ="Map";

  var mapFunc = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        var map = new Map();
        map.set("0", "0");
        map.set("1", "1");
        map.set("2", "2");
        map.set("3", "3");
        map.set("4", "4");
        var size;
        for(var i = 0; i < max; i++){
          size = map.size;
        }
      },
      message: title + " Map.size"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var map = Object.create(null);
        map["0"] = "0";
        map["1"] = "1";
        map["2"] = "2";
        map["3"] = "3";
        map["4"] = "4";
        for(var i = 0; i < max; i++){
          var count = 0;
          for(var key in map){
            count++;
          }
        }
      },
      message: title + " Object create null length"
    };


    var code3 = {
      code: function(){
        var max = 100000;
        var map = {
          "0": "0",
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4"
        };
        for(var i = 0; i < max; i++){
          var count = 0;
          for(var key in map){
            if(map.hasOwnProperty(key)){
              count++;
            }
          }
        }
        console.log(count);
      },
      message: title + " Object length"
    };


    APP.runCodes({
      codes: [code1, code2, code3]
    });

  };
  mapFunc();
})(window);