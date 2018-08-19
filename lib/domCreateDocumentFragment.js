(function(global){
  // dom createDocumentFragment
  var domCreateDocumentFragment = function(){
    var max = 10000;
    var i;

    console.time("dom createDocumentFragment before");
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      document.getElementById("div1").appendChild(p);
    }
    console.timeEnd("dom createDocumentFragment before");

    console.time("dom createDocumentFragment after");
    var docFlag = document.createDocumentFragment();
    for(i = 0; i < max; i++){
      var p = document.createElement("p");
      p.textContent = i + ",";
      docFlag.appendChild(p);
    }
    document.getElementById("div2").appendChild(docFlag);
    console.timeEnd("dom createDocumentFragment after");

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
  };
  domCreateDocumentFragment();
})(window);