(function(global){

  document.getElementById("load_btn").addEventListener("click", function(e){
    var script = document.createElement("script");

    var src = document.getElementById("select_src").value;
    script.src = "./lib/" + src;
    document.getElementById("js_src").appendChild(script);

    script.remove();


  });

})(window);