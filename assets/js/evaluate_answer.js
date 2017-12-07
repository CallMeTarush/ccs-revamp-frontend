$(document).ready(function () {
  init();
});


function init() {
  $("#q-no").html("1");
  getImage();
  getQuestionBody();
  document.getElementById("answer").innerHTML = questions[ques_counter].answer;
}

function nextQuestion() {

  incrementValue();


  if(getCounterValue == 11) {
      if(window.location == "https://ccs.csivit.com/evaluate/" + data.user.regno + "/management")
      {
        $.get("/markevaluated/" + data.regno + "/management", function(data, status){
          alert("done");
          window.location = "/";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" + data.user.regno + "/design")
      {
        $.get("/markevaluated/" + data.regno + "/design", function(data, status){
          alert("done");
          window.location = "/";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" + data.regno + "/technical")
      {
        $.get("/markevaluated/" + data.regno + "/technical", function(data, status){
          alert("done");
          window.location = "/";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" + data.regno + "/advtechnical")
      {
        $.get("/markevaluated/" + data.regno + "/advtechnical", function(data, status){
          alert("done");
          window.location = "/";
        });
      }

  }

  if(getCounterValue() == (questions.length - 1) ) {
    document.getElementById("changeToSubmit").innerHTML = "Submit";
  }


  $("#q-no").html(getCounterValue() + 1);
  getQuestionBody();
  getImage();
  document.getElementById("answer").innerHTML = questions[ques_counter].answer;
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
  
  if(questions[ques_counter].imagePath == undefined) {
    document.getElementById("question_img").style.display= "none";
  }
  else {

    document.getElementById("question_img").style.display= "block";
  document.getElementById("question_img").src= "/images/" + questions[ques_counter].imagePath;  
  }
}

function getQuestionBody()
{
  document.getElementById("question_body").innerHTML = questions[ques_counter].body;
}
