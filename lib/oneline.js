(function(global){

  var APP = global.APP;
  var title = "oneline";

  var oneline = function(){

    var code1 = {
      code: function(){
        var max = 1000000;
        for(var i = 0; i < max; i++){
          var aaaaaaaaaa = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
          var bbbbbbbbbb = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
          var cccccccccc = "ccccccccccccccccccccccccccccccccc";
          var dddddddddd = "ddddddddddddddddddddddddddddddddd";
          var eeeeeeeeee = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
          var ffffffffff = "fffffffffffffffffffffffffffffffff";
          var gggggggggg = "ggggggggggggggggggggggggggggggggg";
          var hhhhhhhhhh = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
          var iiiiiiiiii = "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
          var jjjjjjjjjj = "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
          var arr = [aaaaaaaaaa, bbbbbbbbbb, cccccccccc, dddddddddd, eeeeeeeeee, ffffffffff, gggggggggg, hhhhhhhhhh, iiiiiiiiii, jjjjjjjjjj];
        }
      },
      message: title + " for in"
    };

    var code2 = {
      code: function(){
        var max = 1000000;for(var i = 0; i < max; i++){var aaaaaaaaaa = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";var bbbbbbbbbb="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";var cccccccccc="ccccccccccccccccccccccccccccccccc";var dddddddddd="ddddddddddddddddddddddddddddddddd";var eeeeeeeeee="eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";var ffffffffff="fffffffffffffffffffffffffffffffff";var gggggggggg="ggggggggggggggggggggggggggggggggg";var hhhhhhhhhh="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";var iiiiiiiiii="iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";var jjjjjjjjjj="jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";var arr=[aaaaaaaaaa,bbbbbbbbbb,cccccccccc,dddddddddd,eeeeeeeeee,ffffffffff,gggggggggg,hhhhhhhhhh,iiiiiiiiii,jjjjjjjjjj];}
      },
      message: title + " for in"
    };

    APP.runCodes({codes:[code1, code2]});
  };
  oneline();
})(window);