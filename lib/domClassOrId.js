(function(global){
  // dom class or id
  var domClassOrId = function(){
    var max = 1000;
    var i;

    console.time("dom class or id before");
    for(i = 0; i < max; i++){
      document.getElementsByClassName("div1")[0].innerHTML += i + ", ";
    }
    console.timeEnd("dom class or id before");

    console.time("dom class or id after");
    for(i = 0; i < max; i++){
      document.getElementById("div2").innerHTML += i + ", ";
    }
    console.timeEnd("dom class or id after");

    document.getElementsByClassName("div1")[0].innerHTML = "";
    document.getElementById("div2").innerHTML = "";

  };
  domClassOrId();
})(window);