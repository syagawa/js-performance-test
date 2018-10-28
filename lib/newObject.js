(function(global){

  var APP = global.APP;
  var title = "new Object";

  var newObject = function(){

    var prepareCode = {
      code: function(){
        global.testObj = function(){
          var test = "test";
          this.test = test;
        };
      },
      message: "prepare global function"
    };

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var obj = new Object();
        }
      },
      message: title + " new Object"
    };

    var code2 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var obj = {};
        }
      },
      message: title + " object literal"
    };

    var code3 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var test = global.testObj();
        }
      },
      message: title + " function testObj"
    };

    var code4 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var obj = new global.testObj();
          obj.test;
        }
      },
      message: title + " new testObj"
    };


    APP.runCodes({codes:[prepareCode, code1, code2, code3, code4]});
  };
  newObject();
})(window);