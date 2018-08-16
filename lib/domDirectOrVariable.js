(function(global){
  // // dom direct or variable
  var domDirectOrVariable = function(){

    var str = "";
    var max = 1000;
    var i;

    console.time("dom direct or variable before");
    for(i = 0; i < max; i++){
      document.getElementById("div1").innerHTML += i + ", ";
    }
    console.timeEnd("dom direct or variable before");

    console.time("dom direct or variable after");
    var str = "";
    for(i = 0; i < max; i++){
      str += i + ", ";
    }

    document.getElementById("div2").innerHTML = str;
    console.timeEnd("dom direct or variable after");
  };
  domDirectOrVariable();
})(window);