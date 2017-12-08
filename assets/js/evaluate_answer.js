$(document).ready(function () {
  init();
});


function init() {
  $("#q-no").html("1");
  getImage();
  getQuestionBody();
  document.getElementById("answercheck").innerHTML = questions[ques_counter].answer;
}

function nextQuestion() {

  incrementValue();
  
  if(getCounterValue() == 11) {
      document.getElementById("question_body").innerHTML = "Wait na";
      document.getElementById("answercheck").innerHTML = "I wish i got paid for this";      

      
      if(window.location == "https://ccs.csivit.com/evaluate/" + regno + "/management")
      {

        $.get("/markevaluated/" +  regno + "/management", function(data, status){
          alert("done");
          window.location = "/usertests/management";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" +  regno + "/design")
      {
        $.get("/markevaluated/" +  regno  + "/design", function(data, status){
          alert("done");
          window.location = "/usertests/design";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" +  regno  + "/technical")
      {
        $.get("/markevaluated/" +  regno  + "/technical", function(data, status){
          alert("done");
          window.location = "/usertests/technical";
        });
      }
      if(window.location == "https://ccs.csivit.com/evaluate/" +  regno + "/advtechnical")
      {
        $.get("/markevaluated/" + regno  + "/advtechnical", function(data, status){
          alert("done");
          window.location = "/usertests/advtechnical";
        });
      }

  }

  if(getCounterValue() == (questions.length - 1) ) {
    document.getElementById("changeToSubmit").innerHTML = "Submit";
  }


  $("#q-no").html(getCounterValue() + 1);
  getQuestionBody();
  getImage();
  if(ques_counter == 11)
  {
      document.getElementById("answercheck").innerHTML = "I wish i got paid for this";      
  }
  else {
    document.getElementById("answercheck").innerHTML = questions[ques_counter].answer;
  }
}

function getCounterValue() {
  return(ques_counter);
}

function incrementValue()
{
  if(ques_counter==11) {
    ;
  }
  else {
    ++ques_counter;
  } 
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
  if(ques_counter == 11) {
    document.getElementById("question_body").innerHTML = "Wait na";
  }
  else {
    document.getElementById("question_body").innerHTML = questions[ques_counter].body;
  }
}
