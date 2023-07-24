var loadFile2 = function(event) {
  var output2 = document.getElementById('output2');
  output2.src = URL.createObjectURL(event.target.files[0]);
  output2.onload = function() {
    URL.revokeObjectURL(output2.src) // free memory
  }
};
var loadFile1 = function(event) {
  var output1 = document.getElementById('output1');
  output1.src = URL.createObjectURL(event.target.files[0]);
  output1.onload = function() {
    URL.revokeObjectURL(output1.src) // free memory
  }
};

var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};