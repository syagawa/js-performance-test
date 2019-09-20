(function(global){

  var APP = global.APP;
  var title = "json parse";

  var jsonParse = function(){
    var code1 = {
      code: function(){
        var max = 10000;
        var obj= {};
        for(var i = 0; i < max; i++){
          var txt = JSON.stringify(obj);
        }
      },
      message: title + " obj => text1"
    };

    var code2 = {
      code: function(){
        var max = 10000;
        var obj= {
          a: "a",
          b: "b",
          c: {
            d: {
              e:{
                f: "f",
                g: [1,2,3,4,5,6,7,8,9,10]
              }
            }
          }
        };
        for(var i = 0; i < max; i++){
          var txt = JSON.stringify(obj);
        }
      },
      message: title + " obj => text2"
    };


    var code3 = {
      code: function(){
        var max = 10000;
        var txt= '{}';
        for(var i = 0; i < max; i++){
          var obj = JSON.parse(txt);
        }
      },
      message: title + " text => obj1"
    };


    var code4 = {
      code: function(){
        var max = 10000;
        var txt= '{"a":"a","b":"b","c":{"d":{"e":{"f":"f","g":[1,2,3,4,5,6,7,8,9,10]}}}}';
        for(var i = 0; i < max; i++){
          var obj = JSON.parse(txt);
        }
      },
      message: title + " text => obj2"
    };


    APP.runCodes({codes:[code1, code2, code3, code4]});
  };
  jsonParse();
})(window);