(function(global){
  // dom direct or variable
  var domDirectOrVariable = function(){

    var str = "";
    var max = 1000;
    var i;
    var APP = global.APP;

    APP.timer.start();
    // console.time("dom direct or variable before");
    for(i = 0; i < max; i++){
      document.getElementById("div1").innerHTML += i + ", ";
    }
    // console.timeEnd("dom direct or variable before");
    // console.log("dom direct or variable before " + APP.timer.end() + "ms");
    var a = "dom direct or variable before " + APP.timer.end() + "ms";


    APP.timer.start();
    // console.time("dom direct or variable after");
    var str = "";
    for(i = 0; i < max; i++){
     
      str += i + ", ";
    }
    document.getElementById("div2").innerHTML = str;
    // console.timeEnd("dom direct or variable after");
    // console.log(APP.timer.end());
    // console.log("dom direct or variable after " + APP.timer.end() + "ms");

    var b = "dom direct or variable after " + APP.timer.end() + "ms";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    APP.timer.show([a,b]);

  };
  domDirectOrVariable();
})(window);