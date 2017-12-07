$(document).ready(function () {
  
  displayUsers();   

});

function displayUsers() {
  
  for (i = 0; i < users.length; i++) {
                  if(window.location == "https://ccs.csivit.com/usertests/technical")
                  { 
                           document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/technical><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                 }
                  else if(window.location == "https://ccs.csivit.com/usertests/management")
                  { 
                           document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/management><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
                  else if(window.location == "https://ccs.csivit.com/usertests/design")
                  { 

       document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/design><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
                  else if(window.location == "https://ccs.csivit.com/usertests/advtechnical")
                  { 
       document.getElementById("user").innerHTML += "<tr><a href='/evaluate/'" + users[i].regno + "/advtechnical><td>" + users[i].regno + "</td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated +"</td></a></tr>"; 
 
                  }
          }

}
