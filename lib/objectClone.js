(function(global){

  var APP = global.APP;
  var title = "object clone";

  var objectClone = function(){
    var code1 = {
      code: function(){
        var max = 100000;
        var obj = {
          a: "aaaaa",
          b: "bbbbb",
          c: "ccccc",
          d: "ddddd",
          e: "eeeee"
        };
        for(var i = 0; i < max; i++){
          var obj_clone = {};
          for(var key in obj){
            obj_clone[key] = obj[key];
          }
        }
      },
      message: title + " for in"
    };

    var code2 = {
      code: function(){
        var max = 100000;
        var obj = {
          a: "aaaaa",
          b: "bbbbb",
          c: "ccccc",
          d: "ddddd",
          e: "eeeee"
        };
        for(var i = 0; i < max; i++){
          var str = JSON.stringify(obj);
          var obj_clone = JSON.parse(str);
        }
      },
      message: title + " JSON.stringify & JSON.parse"
    };

    APP.runCodes({codes:[code1, code2]});
  };
  objectClone();
})(window);