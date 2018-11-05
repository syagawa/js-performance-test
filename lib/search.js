(function(global){

  var APP = global.APP;

  var title = "timer";

  var search = function(){

    var code1 = {
      code: function(){
        var max = 1000;
        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        for(var i = 0; i < max; i++){
          str.match(/laborum/);
        }
      },
      message: title + " String.match "
    };

    var code2 = {
      code: function(){
        var max = 1000;
        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        for(var i = 0; i < max; i++){
          str.indexOf("laborum");
        }
      },
      message: title + " String.indexOf "
    };

    var code3 = {
      code: function(){
        var max = 1000;
        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        for(var i = 0; i < max; i++){
          str.lastIndexOf("laborum");
        }
      },
      message: title + " String.lastIndexOf "
    };

    var code4 = {
      code: function(){
        var max = 1000;
        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        for(var i = 0; i < max; i++){
          str.search(/laborum/);
        }
      },
      message: title + " String.search "
    };

    var code5 = {
      code: function(){
        var max = 1000;
        var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        for(var i = 0; i < max; i++){
          /laborum/.test(str);
        }
      },
      message: title + " RegExp.test(String) "
    };


    APP.runCodes({codes:[code1, code2, code3, code4, code5]});

  };
  search();
})(window);