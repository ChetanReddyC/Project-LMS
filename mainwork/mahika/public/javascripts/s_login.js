function myFunction() {
    var x = document.getElementById("if1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  // function validateCredentials() {
  //   let email = document.getElementById("if").value;
  //   let password = document.getElementById("if1").value;
  
  //   if (email === "email" && password === "1050002526") {
  //     window.location.replace("studentdashboard.html");
  //   } else {
  //     alert("Invalid credentials!");
  //   }
  // }
  