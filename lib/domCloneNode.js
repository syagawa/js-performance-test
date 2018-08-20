(function(global){
  // dom clonenode
  var domCloneNode = function(){

    var max = 10000;
    var i;

    console.time("dom clonenode before");
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      document.getElementById("div1").appendChild(p);
    }
    console.timeEnd("dom clonenode before");

    console.time("dom clonenode after");
    var clone = document.getElementById("div2").cloneNode(true);
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      clone.appendChild(p);
    }
    document.getElementById("div2").parentNode.appendChild(clone);
    console.timeEnd("dom clonenode after");

    document.getElementsByClassName("playground")[0].removeChild(clone);
    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";

  };
  domCloneNode();
})(window);