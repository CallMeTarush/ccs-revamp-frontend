$(document).ready(function() {

    displayUsers();

});

function displayUsers() {

    for (i = 0; i < users.length; i++) {
        
        else {
          if (window.location == "https://ccs.csivit.com/usertests/technical") {
                document.getElementById("user").innerHTML += "<tr><td>" + i + "</td><td><a href='/evaluate/" + users[i].regno + "/technical'>" + users[i].regno + "</a></td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated + "</td></tr>";

          }
          else if (window.location == "https://ccs.csivit.com/usertests/management") {
              document.getElementById("user").innerHTML += "<tr><td>" + i + "</td><td><a href='/evaluate/" + users[i].regno + "/management'>" + users[i].regno + "</a></td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated + "</td></tr>";

          } else if (window.location == "https://ccs.csivit.com/usertests/design") {

              document.getElementById("user").innerHTML += "<tr><td>" + i + "</td><td><a href='/evaluate/" + users[i].regno + "/design'>" + users[i].regno + "</a></td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated + "</td></tr>";

          } else if (window.location == "https://ccs.csivit.com/usertests/advtechnical") {
              document.getElementById("user").innerHTML += "<tr><td>" + i + "</td><td><a href='/evaluate/" + users[i].regno + "/advtechnical'>" + users[i].regno + "</a></td><td>" + users[i].name + "</td><td>" + users[i].phone + "</td><td>" + users[i].isEvaluated + "</td></tr>";

          }
        }
    }

}