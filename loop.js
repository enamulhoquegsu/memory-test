// var i = 1;                  //  set your counter to 1
//
// function myLoop() {         //  create a loop function
//   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
//     console.log('hello');
//     $(".result").text("Hello world!");
//     i++;                    //  increment the counter
//     if (i < 10) {           //  if the counter < 10, call the loop function
//       myLoop();             //  ..  again which will trigger another
//     }                       //  ..  setTimeout()
//   }, 3000)
// }
//
// myLoop();
setInterval(
function () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log("#"+randomColor);
},2000);
