$(document).ready(function () {
  run_clock('clockdiv',deadline);
  init();
});

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
  if(questions[ques_counter].imagepath == "") {
     document.getElementById("question_img").style.display = "none";
  }
  else {
    document.getElementById("question_img").src= "ccs.csivit.com/images" + questions[ques_counter].imagepath;
  }
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
// 10 minutes from now
var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
  var clock = document.getElementById(id);
  function update_clock(){
    var t = time_remaining(endtime);
    clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
    
    if(t.total == 0){ 
      postAnswer();
      window.location = "ccs.csivit.com/dashboard";
    }
    
    if(t.minutes>=10 && t.seconds>0) {
      postAnswer();
      window.location = "ccs.csivit.com/dashboard";
    }

    if(t.minutes < 0 && t.seconds>0) {
      postAnswer();
      window.location = "ccs.csivit.com/dashboard";
    }
  }
  update_clock(); // run function once at first to avoid delay
  var timeinterval = setInterval(update_clock,1000);
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

