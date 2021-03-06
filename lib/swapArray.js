(function(global){

  var APP = global.APP;
  var title = "swap array";

  var swapArray = function(){
    var code1 = {
      code: function(){
        var max = 1001;
        var arr = [1,2,3,4,5];
        var a = 0;
        var b = arr.length -1;
        for(var i = 0; i < max; i++){
          var t = arr.splice(a,1,arr[b]);
          arr.splice(b, 1, t[0]);
        }
      },
      message: title + " splice"
    };

    var code2 = {
      code: function(){
        var max = 1001;
        var arr = [1,2,3,4,5];
        var a = 0;
        var b = arr.length -1;
        for(var i = 0; i < max; i++){
          var t = arr[a];
          arr[a] = arr[b];
          arr[b] = t;
        }
      },
      message: title + " 3 line"
    };

    var code3 = {
      code: function(){
        var max = 1001;
        var arr = [1,2,3,4,5];
        var a = 0;
        var b = arr.length -1;
        for(var i = 0; i < max; i++){
          arr[a]=[arr[b],arr[b]=arr[a]][0];
        }
      },
      message: title + " 1 line"
    };

    var code4 = {
      code: function(){
        let max = 1001;
        let arr = [1,2,3,4,5];
        let a = 0;
        let b = arr.length -1;
        for(let i = 0; i < max; i++){
          let t = arr[a];
          arr[a] = arr[b];
          arr[b] = t;
        }
      },
      message: title + " 3 line let"
    };

    var code5 = {
      code: function(){
        let max = 1001;
        let arr = [1,2,3,4,5];
        let a = 0;
        let b = arr.length -1;
        for(let i = 0; i < max; i++){
          arr[a]=[arr[b],arr[b]=arr[a]][0];
        }
      },
      message: title + " 1 line let"
    };

    APP.runCodes({codes:[code1, code2, code3, code4, code5]});
  };
  swapArray();
})(window);