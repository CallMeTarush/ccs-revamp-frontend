$(document).ready(function () {
  run_clock('clockdiv',deadline);
  var currentLocation = window.location;
  if(window.location == "https://ccs.csivit.com/startexam/management")
  {
    document.getElementById('categoryName').innerHTML = "Management";
  }
  if(window.location == "https://ccs.csivit.com/startexam/design")
  {
    document.getElementById('categoryName').innerHTML = "Design";
  }
  if(window.location == "https://ccs.csivit.com/startexam/technical")
  {
    document.getElementById('categoryName').innerHTML = "Technical";
  }
  if(window.location == "https://ccs.csivit.com/startexam/advtechnical")
  {
    document.getElementById('categoryName').innerHTML = "Advanced Technical";
  }
  init();
  window.onblur = function () {
    ++left_page;
    if(left_page==1) {
      alert("You have left the page once! If you do this again Your test will be submitted and considered as attempted.");
    }
    if(left_page==2) {
      postAnswer();
      window.location = "/dashboard";

    }
  }
});
//Do it. (if you can)



function init() {
  $("#q-no").html("1");
  getImage();
  getQuestionBody();
}

function nextQuestion() {
  incrementValue();
  document.getElementById("answer").value = "";

  if(getCounterValue() == (questions.length - 1) ) {
    document.getElementById("changeToSubmit").innerHTML = "Submit";
  }
  if(getCounterValue() == questions.length) {
    window.location = "/dashboard";
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
  console.log(questions[ques_counter].imagepath);
  if(questions[ques_counter].imagepath == undefined) {
     document.getElementById("question_img").style.display = "none";
  }
  else {
    $("#question_img").attr("src","ccs.csivit.com/images/" + questions[ques_counter].imagepath);
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


var time_in_minutes = 20;
if(window.location == "https://ccs.csivit.com/startexam/management")
{
  time_in_minutes = 30;
}
else if(window.location == "https://ccs.csivit.com/startexam/design")
{
  time_in_minutes = 20;
}
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
    clock.innerHTML = t.minutes+' : '+t.seconds;
    if(t.total<=0){ clearInterval(timeinterval); }
  }
  update_clock(); // run function once at first to avoid delay
  var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);



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

