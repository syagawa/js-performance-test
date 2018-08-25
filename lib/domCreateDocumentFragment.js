(function(global){
  // dom createDocumentFragment
  var domCreateDocumentFragment = function(){
    var max = 10000;
    var i;

    APP.timer.start();
    // console.time("dom createDocumentFragment before");
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      document.getElementById("div1").appendChild(p);
    }
    // console.timeEnd("dom createDocumentFragment before");
    var a = "dom createDocumentFragment before " + APP.timer.end() + "ms";

    APP.timer.start();
    // console.time("dom createDocumentFragment after");
    var docFlag = document.createDocumentFragment();
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      docFlag.appendChild(p);
    }
    document.getElementById("div2").appendChild(docFlag);
    // console.timeEnd("dom createDocumentFragment after");
    var b = "dom createDocumentFragment after " + APP.timer.end() + "ms";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    APP.timer.show([a,b]);
  };
  domCreateDocumentFragment();
})(window);