(function(global){
  // dom class or id
  var domClassOrId = function(){
    var max = 1000;
    var i;

    APP.timer.start();
    // console.time("dom class or id before");
    for(i = 0; i < max; i++){
      document.getElementsByClassName("div1")[0].innerHTML += i + ", ";
    }
    // console.timeEnd("dom class or id before");
    var a = "dom class or id before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("dom class or id after");
    for(i = 0; i < max; i++){
      document.getElementById("div2").innerHTML += i + ", ";
    }
    // console.timeEnd("dom class or id after");
    var b = "dom class or id after " + APP.timer.end() + "ms";


    document.getElementsByClassName("div1")[0].innerHTML = "";
    document.getElementById("div2").innerHTML = "";

    APP.timer.show([a,b]);

  };
  domClassOrId();
})(window);