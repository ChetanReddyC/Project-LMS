<!DOCTYPE html>
<html>
<head>
  <title>Toggle Divs Example</title>
  <style>
    .toggleable-div {
      display: block;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <button id="toggleButton">Toggle Divs</button>

  <div class="toggleable-div">Div 1</div>
  <div class="toggleable-div">Div 2</div>
  <div class="toggleable-div">Div 3</div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
      toggleButton.addEventListener("click", toggleDivs);

      function toggleDivs() {
        var divs = document.getElementsByClassName("toggleable-div");
        for (var i = 0; i < divs.length; i++) {
          var div = divs[i];
          if (window.getComputedStyle(div).display === "none") {
            div.style.display = "block";
          } else {
            div.style.display = "none";
          }
        }
      }
    });
  </script>
</body>
</html>
