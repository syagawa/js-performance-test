(function(global){

  var APP = global.APP;

  var title ="Set";

  var mapSet = function(){

    var code1 = {
      code: function(){
        var max = 100000;
        var set = new Set();
        set.add(["0", "1", "2", "3", "4"]);
        var size;
        for(var i = 0; i < max; i++){
          size = set.size;
        }
      },
      message: title + " Set.size"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var set = Object.create(null);
        set["0"] = "0";
        set["1"] = "1";
        set["2"] = "2";
        set["3"] = "3";
        set["4"] = "4";
        for(var i = 0; i < max; i++){
          var count = 0;
          for(var key in set){
            count++;
          }
        }
      },
      message: title + " Object create null length"
    };


    var code3 = {
      code: function(){
        var max = 100000;
        var set = {
          "0": "0",
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4"
        };
        for(var i = 0; i < max; i++){
          var count = 0;
          for(var key in set){
            if(set.hasOwnProperty(key)){
              count++;
            }
          }
        }
      },
      message: title + " Object length"
    };


    APP.runCodes({
      codes: [code1, code2, code3]
    });

  };
  mapSet();
})(window);