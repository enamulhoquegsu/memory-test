var newColorArray = [];
var optionArray = [];
var colorArray = ["red", "green", "orange", "blue", "purple"];
var option1, option2, option3, option4, option5;
var randomColor = "red";
var number=0;
const message = "Select 5 colors from the lists below";
// box is clicked here
$(".click-me").on("click", function() {
  $(this).empty();
  // suffling array
  randomArrayShuffle(colorArray);
  var setInterval_ID = setInterval(colorChanged, 1000);
  setTimeout(stop_interval, 5000);
  function stop_interval() {
    clearInterval(setInterval_ID);
  }
});

$(".option1").on("change", selectOptions);
$(".option2").on("change", selectOptions);
$(".option3").on("change", selectOptions);
$(".option4").on("change", selectOptions);
$(".option5").on("change", selectOptions);

function selectOptions() {
  var myClass = $(this).attr('class');
  switch (myClass) {
    case "form-select option1":
      option1 = $(this).find('option:selected').text();
      option1 = option1.toLowerCase();
      //optionArray.push(option1);
      console.log(option1);
      break;
    case "form-select option2":
      option2 = $(this).find('option:selected').text();
      option2 = option2.toLowerCase();
      //optionArray.push(option2);
      console.log(option2);
      break;
    case "form-select option3":
      option3 = $(this).find('option:selected').text();
      option3 = option3.toLowerCase();
      //optionArray.push(option3);
      console.log(option3);
      break;
    case "form-select option4":
      option4 = $(this).find('option:selected').text();
      option4 = option4.toLowerCase();
      //optionArray.push(option4);
      console.log(option4);
      break;
    case "form-select option5":
      option5 = $(this).find('option:selected').text();
      option5 = option5.toLowerCase();
      //optionArray.push(option5);
      console.log(option5);
      break;
    default:
  }

  // Showing Submit Button by removing the hide class from the submit button
  // first checking variable option1, option2 and so on have value in them
  if (option1 != null && option2 != null && option3 != null && option4 != null && option5 != null) {
    $(".hide").removeClass("hide");
  }

} // end selectedOption function

// Submit button
$(".submit").on("click", function() {
  optionArray.push(option1);
  optionArray.push(option2);
  optionArray.push(option3);
  optionArray.push(option4);
  optionArray.push(option5);

  // comparing both array whether they are equal
  var arrCompare = arraysEqual(newColorArray, optionArray);
  if (arrCompare) {
    $("#box").text("You got it");
  } else {
    $("#box").text("you are wrong");
  }

  for(var i = 0 ; i < optionArray.length; i++){
    $('.u'+(i+1)).css("background-color", optionArray[i]);

  }

  for(var i = 0 ; i < newColorArray.length; i++){
    $('.s'+(i+1)).css("background-color", newColorArray[i]);

  }
  // removing class to show the title...........
  $(".title-message").removeClass("title-message");

  // change Submit to Reset Button
  $(".submit").text("Reset");



}); //    End of submit button .................

$(".reset").on("click", function(){
  $("#click").addClass("click-me");
  console.log("not working");

});


function colorChanged() {
  $("#box").css("background-color", colorArray[number]);
  $("#box").addClass("pressed");
  // remove pressed class after 100 milisecond to create shaking affect......
  setTimeout(function(){
    $("#box").removeClass("pressed");
  },100);

  newColorArray.push(colorArray[number]);

  console.log(number++);

  // making sure all the colors are shown first .......................................................
  if (newColorArray.length === 5) {

    // remove disable attribute so option can be selected. ...............................................
    $(".form-select").removeAttr("disabled");

    // click-me class removed so no one can click anymore ...................................................
    $(".click-me").removeAttr("click-me");
    setTimeout(function() {
      $("#box").text(message).fadeIn(500);
      $("#box").css("background-color", "black");
    }, 1000);

  }
}
// creating function to compare them whether they are equal ....................................................
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}

// suffle array -------------------------------------------------------------------------------------------
function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
