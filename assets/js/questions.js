$(document).ready(function () {
  init();
}
);
function init() {
  $("#q-no").html("1");
  getImage();
  getQuestionBody();
}

function nextQuestion() {
  incrementValue();
  if(getCounterValue() == 9) {
    document.getElementById("changeToSubmit").innerHTML = "Submit";
  }
  if(getCounterValue() == 10) {
    window.location = "https://ccs.csivit.com/dashboard";
  }
  $("#q-no").html(getCounterValue() + 1);
  getQuestionBody();
  getImage();
}

function getCounterValue() {
  return(ques_counter);
}

function incrementValue()
{
  ++ques_counter;
}

function getImage()
{  
  document.getElementById("question_img").src= "ccs.csivit.com/images" + questions[ques_counter].imagepath;
}

function getQuestionBody()
{
  document.getElementById("question_body").innerHTML = questions[ques_counter].body;
}

function postAnswer() {
  var answerobj = new Object();

  answerobj.answer = $('#answer').val();
  answerobj.testId = data.testId;
  answerobj.questionId = questions[ques_counter]._id; 

  $.ajax({

          url: 'https://ccs.csivit.com/answer',

          type: 'POST',

          dataType: 'json',

          data: answerobj,

          success: function (data, textStatus, xhr) {
            console.log("Posted!");
            nextQuestion();
          },
          error: function (xhr, textStatus, errorThrown) {
          
              console.log('Error in Operation');
          
          }
  });
}

//Background
 var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

