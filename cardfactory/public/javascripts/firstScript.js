//firstScript.js
define(['./bower_components/jquery/dist/jquery', './secondScript'],function($, secondScript){
  console.log('Color from secondScript', secondScript.color);
  return {
    hello: function () {
      console.log($);
      console.log('TEST!');
      console.log('Hello from firstScript');
      console.log('DDD');
      console.log('DDD');
    }
  }
});