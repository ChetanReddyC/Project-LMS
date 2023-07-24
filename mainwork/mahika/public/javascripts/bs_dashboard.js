function toggleGoLiveDivs() {
  removeClasses();

  let one = document.getElementById("one");
  let two = document.getElementById("two");
  

  one.classList.add("show");
  two.classList.add("show");
  
  for (var i = 0; i < books.length; i++) {
    var div = books[i];
    div.classList.remove("show");
  }
  for (var i = 0; i < videos.length; i++) {
    var div = videos[i];
    div.classList.remove("show");
  }
  for (var i = 0; i < scores.length; i++) {
    var div = scores[i];
    div.classList.remove("show");
  }

}

function toggleSchedulesDivs() {
  removeClasses();

  let timetable = document.getElementById("timetable");
  let calender = document.getElementById("calender");

  timetable.classList.add("show");
  calender.classList.add("show");
  
  for (var i = 0; i < books.length; i++) {
    var div = books[i];
    div.classList.remove("show");
  }

  for (var i = 0; i < videos.length; i++) {
    var div = videos[i];
    div.classList.remove("show");
  }
  for (var i = 0; i < scores.length; i++) {
    var div = scores[i];
    div.classList.remove("show");
  }
}

function toggleCoursesDivs() {
  removeClasses();

  let videocourses = document.getElementById("videocourses");
  let mylibrary = document.getElementById("mylibrary");
  let writenotes = document.getElementById("writenotes");
  let expand = document.getElementById("expand");
  let close = document.getElementById("close");
  let expandlibrary = document.getElementById("expandlibrary");
  let closelibrary = document.getElementById("closelibrary");

  videocourses.classList.add("show");
  writenotes.classList.add("show");
  mylibrary.classList.add("show");

  for (var i = 0; i < books.length; i++) {
    var div = books[i];
    div.classList.add("show");

    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "flex";
    }
  }

  for (var i = 0; i < videos.length; i++) {
    var div = videos[i];
    div.classList.add("show");

    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "flex";
    }
  }
  for (var i = 0; i < scores.length; i++) {
    var div = scores[i];
    div.classList.remove("show");
  }

  videocourses.classList.remove("fullview");
  mylibrary.classList.remove("fullview");
  expand.style.visibility = "visible";
  close.style.visibility = "hidden";
  expandlibrary.style.visibility = "visible";
  closelibrary.style.visibility = "hidden";
}


function expanddivs(){
  let videocourses = document.getElementById("videocourses");
  let expand = document.getElementById("expand");
  let close = document.getElementById("close");

  videocourses.classList.add("fullview");
  writenotes.classList.remove("show");
  mylibrary.classList.remove("show");
  expand.style.visibility = "hidden";
  close.style.visibility = "visible";
}

function closedivs(){
  let videocourses = document.getElementById("videocourses");
  let expand = document.getElementById("expand");
  let close = document.getElementById("close");

  videocourses.classList.remove("fullview");
  expand.style.visibility = "visible";
  close.style.visibility = "hidden";
  mylibrary.classList.add("show");
  writenotes.classList.add("show");


}

function expandlibrary(){
  let expand = document.getElementById("mylibrary");
  let expandlibrary = document.getElementById("expandlibrary");
  let closelibrary = document.getElementById("closelibrary");
  
  expand.classList.add("fullview");
  videocourses.classList.remove("show");
  writenotes.classList.remove("show");
  expandlibrary.style.visibility = "hidden";
  closelibrary.style.visibility = "visible";
  

 }
 function closelibrary(){
  let library = document.getElementById("mylibrary");
  let closelibrary = document.getElementById("closelibrary");
  let expandlibrary = document.getElementById("expandlibrary");

  library.classList.remove("fullview");
  closelibrary.style.visibility = "hidden";
  expandlibrary.style.visibility = "visible";
  videocourses.classList.add("show");
  writenotes.classList.add("show");

 }

function toggleAssignmentsDivs() {
  removeClasses();

  let analysisreport = document.getElementById("analysisreport");
  let examscores = document.getElementById("examscores");
  let examschedule = document.getElementById("examschedule");
  let closeanalysisreport = document.getElementById("closeanalysisreport");
  let closeexamscores = document.getElementById("closeexamscores");
  let closeexamschedule = document.getElementById("closeexamschedule");
  let analysisreport1 = document.getElementById("expandanalysisreport");
  let expandexamscores = document.getElementById("expandexamscores");
  let examschedule1 = document.getElementById("expandexamschedule");

  analysisreport.classList.add("show");
  examscores.classList.add("show");
  examschedule.classList.add("show");
  analysisreport.classList.remove("fullview");
  examschedule.classList.remove("fullview");
  examscores.classList.remove("fullview");
  closeanalysisreport.style.visibility = "hidden";
  closeexamscores.style.visibility = "hidden";
  closeexamschedule.style.visibility = "hidden";
  analysisreport1.style.visibility = "visible";
  expandexamscores.style.visibility = "visible";
  examschedule1.style.visibility = "visible";

  for (var i = 0; i < scores.length; i++) {
    var div = scores[i];
    div.classList.add("show");

    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "flex";
    }
  }
  
  for (var i = 0; i < books.length; i++) {
    var div = books[i];
    div.classList.remove("show");
  }

  for (var i = 0; i < videos.length; i++) {
    var div = videos[i];
    div.classList.remove("show");
  }
  

}

function expandanalysisreport(){
  let expandanalysisreport = document.getElementById("analysisreport");
  let expandanalysisreport1 = document.getElementById("expandanalysisreport");
  let closeanalysisreport = document.getElementById("closeanalysisreport");

  expandanalysisreport.classList.add("fullview");
  examscores.classList.remove("show");
  examschedule.classList.remove("show");
  expandanalysisreport1.style.visibility = "hidden";
  closeanalysisreport.style.visibility = "visible";
}

function closeanalysisreport(){
  let expandanalysisreport = document.getElementById("analysisreport");
  let expandanalysisreport1 = document.getElementById("expandanalysisreport");
  let closeanalysisreport = document.getElementById("closeanalysisreport");

  expandanalysisreport.classList.remove("fullview");
  examscores.classList.add("show");
  examschedule.classList.add("show");
  expandanalysisreport1.style.visibility = "visible";
  closeanalysisreport.style.visibility = "hidden";
}

function expandexamscores(){
  let expandexamscores = document.getElementById("examscores");
  let expandexamscores1 = document.getElementById("expandexamscores");
  let closeexamscores = document.getElementById("closeexamscores");

  expandexamscores.classList.add("fullview");
  analysisreport.classList.remove("show");
  examschedule.classList.remove("show");
  expandexamscores1.style.visibility = "hidden";
  closeexamscores.style.visibility = "visible";
}

function closeexamscores(){
  let closeexamscores = document.getElementById("examscores");
  let expandexamscores = document.getElementById("expandexamscores");
  let closeexamscores1  = document.getElementById("closeexamscores");
  
  
  closeexamscores.classList.remove("fullview");
  analysisreport.classList.add("show");
  examschedule.classList.add("show");
  expandexamscores.style.visibility = "visible";
  closeexamscores1.style.visibility = "hidden";
  }

function expandexamschedule(){
  let expandexamschedule = document.getElementById("examschedule");
  let expandexamschedule1 = document.getElementById("expandexamschedule");
  let closeexamschedule = document.getElementById("closeexamschedule");

  expandexamschedule.classList.add("fullview");
  analysisreport.classList.remove("show");
  examscores.classList.remove("show");
  expandexamschedule1.style.visibility = "hidden";
  closeexamschedule.style.visibility = "visible";
}

function closeexamschedule(){
  let closeexamschedule  = document.getElementById("examschedule");
  let expandexamschedule = document.getElementById("expandexamschedule");
  let closeexamschedule1 = document.getElementById("closeexamschedule");

  closeexamschedule.classList.remove("fullview");
  analysisreport.classList.add("show");
  examscores.classList.add("show");
  expandexamschedule.style.visibility = "visible";
  closeexamschedule1.style.visibility = "hidden";
}
function toggleProfileDivs() {
  removeClasses();

  let parentdetails = document.getElementById("parentdetails");
  let profiledetails = document.getElementById("profiledetails");
  let subscriptiondetails = document.getElementById("subscriptiondetails");
  let paymenthistory = document.getElementById("paymenthistory");
  let lable = document.getElementById("expand");
  let parentdetails1 = document.getElementById("expandparentdetails");
  let expandprofiledetails = document.getElementById("expandprofiledetails");
  let closeparentdetails = document.getElementById("closeparentdetails");
  let expandsubscriptiondetails = document.getElementById("expandsubscriptiondetails");
  let closesubscriptiondetails = document.getElementById("closesubscriptiondetails");
  let closepaymenthistory = document.getElementById("closepaymenthistory");
  let closeprofiledetails = document.getElementById("closeprofiledetails");
  let paymenthistory1 = document.getElementById("expandpaymenthistory");


  parentdetails.classList.add("show");
  profiledetails.classList.add("show");
  subscriptiondetails.classList.add("show");
  paymenthistory.classList.add("show");
  videocourses.classList.remove("fullview");
  lable.style.visibility = "visible";
  parentdetails.classList.remove("fullview");
  subscriptiondetails.classList.remove("fullview");
  paymenthistory.classList.remove("fullview");
  profiledetails.classList.remove("fullview");
  parentdetails1.style.visibility = "visible";
  closeparentdetails.style.visibility = "hidden";
  expandsubscriptiondetails.style.visibility = "visible";
  closesubscriptiondetails.style.visibility = "hidden";
  closepaymenthistory.style.visibility = "hidden";
  closeprofiledetails.style.visibility = "hidden";
  expandprofiledetails.style.visibility = "visible";
  paymenthistory1.style.visibility = "visible";

  for (var i = 0; i < books.length; i++) {
    var div = books[i];
    div.classList.remove("show");
  }

  for (var i = 0; i < videos.length; i++) {
    var div = videos[i];
    div.classList.remove("show");
  }
  for (var i = 0; i < scores.length; i++) {
    var div = scores[i];
    div.classList.remove("show");
  }
}

function expandparentdetails(){
  let expandparentdetails = document.getElementById("parentdetails");

let expandparentdetails1 = document.getElementById("expandparentdetails");
let closeparentdetails = document.getElementById("closeparentdetails");
  expandparentdetails.classList.add("fullview");
  subscriptiondetails.classList.remove("show");
  paymenthistory.classList.remove("show");
  profiledetails.classList.remove("show");
  expandparentdetails1.style.visibility = "hidden";
  closeparentdetails.style.visibility = "visible";
}

function closeparentdetails(){
  let closeparentdetails = document.getElementById("parentdetails");
  let closeparentdetails1  = document.getElementById("closeparentdetails");
  let expandparentdetails = document.getElementById("expandparentdetails");

  closeparentdetails.classList.remove("fullview");
  subscriptiondetails.classList.add("show");
  paymenthistory.classList.add("show");
  profiledetails.classList.add("show");
  closeparentdetails1.style.visibility = "hidden";
  expandparentdetails.style.visibility = "visible";
}
function expandsubscriptiondetails(){
  let expandsubscriptiondetails = document.getElementById("subscriptiondetails");
  let expandsubscriptiondetails1 = document.getElementById("expandsubscriptiondetails");
  let closesubscriptiondetails = document.getElementById("closesubscriptiondetails");


  expandsubscriptiondetails.classList.add("fullview");
  parentdetails.classList.remove("show");
  paymenthistory.classList.remove("show");
  profiledetails.classList.remove("show");
  expandsubscriptiondetails1.style.visibility = "hidden";
  closesubscriptiondetails.style.visibility = "visible"

}

function closesubscriptiondetails(){
  let closesubscriptiondetails = document.getElementById("subscriptiondetails");
  let expandsubscriptiondetails = document.getElementById("expandsubscriptiondetails");
  let closesubscriptiondetails1 = document.getElementById("closesubscriptiondetails");

  closesubscriptiondetails.classList.remove("fullview");
  parentdetails.classList.add("show");
  paymenthistory.classList.add("show");
  profiledetails.classList.add("show");
  expandsubscriptiondetails.style.visibility = "visible";
  closesubscriptiondetails1.style.visibility = "hidden";
}

function expandpaymenthistory(){
  let expandpaymenthistory = document.getElementById("paymenthistory");
  let expandpaymenthistory1 = document.getElementById("expandpaymenthistory");
  let closepaymenthistory = document.getElementById("closepaymenthistory");


  expandpaymenthistory.classList.add("fullview");
  parentdetails.classList.remove("show");
  subscriptiondetails.classList.remove("show");
  profiledetails.classList.remove("show");
  expandpaymenthistory1.style.visibility = "hidden";
  closepaymenthistory.style.visibility = "visible";


}

function closepaymenthistory(){
  let closepaymenthistory = document.getElementById("paymenthistory");
  let expandpaymenthistory = document.getElementById("expandpaymenthistory");
  let closepaymenthistory1 = document.getElementById("closepaymenthistory");

  closepaymenthistory.classList.remove("fullview");
  parentdetails.classList.add("show");
  subscriptiondetails.classList.add("show");
  profiledetails.classList.add("show");
  expandpaymenthistory.style.visibility = "visible";
  closepaymenthistory1.style.visibility = "hidden";

}

function expandprofiledetails(){
  let expandprofiledetails = document.getElementById("profiledetails");
  let expandprofiledetails1 = document.getElementById("expandprofiledetails");
  let closeprofiledetails = document.getElementById("closeprofiledetails");

  expandprofiledetails.classList.add("fullview");
  parentdetails.classList.remove("show");
  subscriptiondetails.classList.remove("show");
  paymenthistory.classList.remove("show");
  expandprofiledetails1.style.visibility = "hidden";
  closeprofiledetails.style.visibility = "visible";

}

function closeprofiledetails(){
  let closeprofiledetails = document.getElementById("profiledetails");
  let expandprofiledetails = document.getElementById("expandprofiledetails");
  let closeprofiledetails1 = document.getElementById("closeprofiledetails");


  closeprofiledetails.classList.remove("fullview");
  parentdetails.classList.add("show");
  subscriptiondetails.classList.add("show");
  paymenthistory.classList.add("show");
  expandprofiledetails.style.visibility = "visible";
  closeprofiledetails1.style.visibility = "hidden";

}

function removeClasses() {
  let divs = document.getElementsByClassName("mainbox")[0].children;

  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("show");
  }
}
