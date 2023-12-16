function toggleGoLiveDivs() {
    removeClasses();
  
    document.getElementById("golive").style.color="blue";
    document.getElementById("Schedules").style.color="whitesmoke";
    document.getElementById("courses").style.color="whitesmoke";
    document.getElementById("assignments").style.color="whitesmoke";
    document.getElementById("myprofile").style.color="whitesmoke";
  
    let one = document.getElementById("one");
    let onec = document.getElementById("onec");
    let two = document.getElementById("two");
    let twoc = document.getElementById("twoc");
  
    one.classList.add("show");
    onec.classList.add("show");
    two.classList.add("show");
    twoc.classList.add("show");
  }
  
  function toggleSchedulesDivs() {
    removeClasses();
  
    document.getElementById("Schedules").style.color="blue";
    document.getElementById("golive").style.color="whitesmoke";
    document.getElementById("courses").style.color="whitesmoke";
    document.getElementById("assignments").style.color="whitesmoke";
    document.getElementById("myprofile").style.color="whitesmoke";
  
    let timetable = document.getElementById("timetable");
    let calender = document.getElementById("calender");
  
    timetable.classList.add("show");
    calender.classList.add("show");
  }
  
  function toggleCoursesDivs() {
    removeClasses();
  
    document.getElementById("courses").style.color="blue";
    document.getElementById("golive").style.color="whitesmoke";
    document.getElementById("Schedules").style.color="whitesmoke";
    document.getElementById("myprofile").style.color="whitesmoke";
    document.getElementById("assignments").style.color="whitesmoke";
  
    let videocourses = document.getElementById("videocourses");
    let writenotes = document.getElementById("writenotes");
    let mylibrary = document.getElementById("mylibrary");
    let close = document.getElementById("close");
    let closelibrary = document.getElementById("closelibrary");
    let videocourses1 = document.getElementById("videocourses");
    let expand = document.getElementById("expand");
    let expandlibrary = document.getElementById("expandlibrary");
  
  
    videocourses.classList.add("show");
    writenotes.classList.add("show");
    mylibrary.classList.add("show");
    videocourses1.classList.remove("fullview");
    mylibrary.classList.remove("fullview");
    close.style.visibility = "hidden";
    closelibrary.style.visibility = "hidden";
    expand.style.visibility = "visible";
    expandlibrary.style.visibility = "visible";
  
  }
  
  function expanddivs(){
    let videocourses = document.getElementById("videocourses");
    let expand = document.getElementById("expand");
    let close  = document.getElementById("close");
  
  
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
      mylibrary.classList.add("show");
      writenotes.classList.add("show");
      expand.style.visibility = "visible";
      close.style.visibility = "hidden";
  }
  
  function expandlibrary(){
    let library = document.getElementById("mylibrary");
    let expandlibrary = document.getElementById("expandlibrary");
    let closelibrary = document.getElementById("closelibrary");
  
    library.classList.add("fullview");
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
  
    document.getElementById("assignments").style.color="blue";
    document.getElementById("golive").style.color="whitesmoke";
    document.getElementById("Schedules").style.color="whitesmoke";
    document.getElementById("courses").style.color="whitesmoke";
    document.getElementById("myprofile").style.color="whitesmoke";
  
    let analysisreport = document.getElementById("analysisreport");
    let examschedule = document.getElementById("examschedule");
    let closeanalysisreport = document.getElementById("closeanalysisreport");
    let closeexamschedule = document.getElementById("closeexamschedule");
    let analysisreport1 = document.getElementById("analysisreport");
    let expandanalysisreport = document.getElementById("expandanalysisreport");
    let examschedule1 = document.getElementById("examschedule");
    let expandexamschedule = document.getElementById("expandexamschedule");
  
    closeanalysisreport.style.visibility = "hidden";
    closeexamschedule.style.visibility = "hidden";
    expandanalysisreport.style.visibility = "visible";
    analysisreport.classList.add("show");
    examschedule.classList.add("show");
    analysisreport1.classList.remove("fullview");
    examschedule1.classList.remove("fullview");
    expandexamschedule.style.visibility = "visible";
    
    
    
  }
  
  function expandanalysisreport(){
    let expandanalysisreport = document.getElementById("analysisreport");
      let expandanalysisreport1 = document.getElementById("expandanalysisreport");
      let closeanalysisreport = document.getElementById("closeanalysisreport");
  
      expandanalysisreport.classList.add("fullview");
      examschedule.classList.remove("show");
      expandanalysisreport1.style.visibility = "hidden";
      closeanalysisreport.style.visibility = "visible";
  }
  
  function closeanalysisreport(){
    let expandanalysisreport = document.getElementById("analysisreport");
      let expandanalysisreport1 = document.getElementById("expandanalysisreport");
      let closeanalysisreport = document.getElementById("closeanalysisreport");
  
      expandanalysisreport.classList.remove("fullview");
      examschedule.classList.add("show");
      expandanalysisreport1.style.visibility = "visible";
      closeanalysisreport.style.visibility = "hidden";
  }
  
  function expandexamschedule(){
    let examschedule= document.getElementById("examschedule");
    let expandexamschedule = document.getElementById("expandexamschedule");
    let closeexamschedule = document.getElementById("closeexamschedule");
    
    expandexamschedule.style.visibility = "hidden";
    closeexamschedule.style.visibility = "visible";
    examschedule.classList.add("fullview");
    analysisreport.classList.remove("show");
    
  
  }
  function closeexamschedule(){
    let closeexamschedule  = document.getElementById("examschedule");
    let expandexamschedule = document.getElementById("expandexamschedule");
    let closeexamschedule1 = document.getElementById("closeexamschedule");
  
    analysisreport.classList.add("show");
    closeexamschedule.classList.remove("fullview");
    expandexamschedule.style.visibility = "visible";
    closeexamschedule1.style.visibility = "hidden";
  }
  
  function toggleProfileDivs() {
    removeClasses();
  
    document.getElementById("myprofile").style.color="blue";
    document.getElementById("golive").style.color="whitesmoke";
    document.getElementById("Schedules").style.color="whitesmoke";
    document.getElementById("courses").style.color="whitesmoke";
    document.getElementById("assignments").style.color="whitesmoke";
  
    
    let profiledetails = document.getElementById("profiledetails");
    let subscriptiondetails = document.getElementById("subscriptiondetails");
    let paymenthistory = document.getElementById("paymenthistory");
    let closesubscriptiondetails = document.getElementById("closesubscriptiondetails");
    let closepaymenthistory = document.getElementById("closepaymenthistory");
    let closeprofiledetails = document.getElementById("closeprofiledetails");
    let subscriptiondetails1 = document.getElementById("subscriptiondetails");
    let expandsubscriptiondetails = document.getElementById("expandsubscriptiondetails");
    let expandpaymenthistory = document.getElementById("expandpaymenthistory");
    let paymenthistory1 = document.getElementById("paymenthistory");
    let profiledetails1 = document.getElementById("profiledetails");
    let expandprofiledetails = document.getElementById("expandprofiledetails");
  
  
    profiledetails.classList.add("show");
    subscriptiondetails.classList.add("show");
    paymenthistory.classList.add("show");
    subscriptiondetails1.classList.remove("fullview");
    paymenthistory1.classList.remove("fullview");
    closesubscriptiondetails.style.visibility = "hidden";
    closepaymenthistory.style.visibility = "hidden";
    closeprofiledetails.style.visibility = "hidden";
    expandsubscriptiondetails.style.visibility = "visible";
    expandpaymenthistory.style.visibility = "visible";
    profiledetails1.classList.remove("fullview");
    expandprofiledetails.style.visibility = "visible";
    
    
  }
  function expandsubscriptiondetails(){
    let expandsubscriptiondetails = document.getElementById("subscriptiondetails");
    let expandsubscriptiondetails1 = document.getElementById("expandsubscriptiondetails");
    let closesubscriptiondetails = document.getElementById("closesubscriptiondetails");
  
  
    expandsubscriptiondetails.classList.add("fullview");
    paymenthistory.classList.remove("show");
    profiledetails.classList.remove("show");
    expandsubscriptiondetails1.style.visibility = "hidden";
    closesubscriptiondetails.style.visibility = "visible";
  
  }
  
  function closesubscriptiondetails(){
    let closesubscriptiondetails = document.getElementById("subscriptiondetails");
    let expandsubscriptiondetails = document.getElementById("expandsubscriptiondetails");
    let closesubscriptiondetails1 = document.getElementById("closesubscriptiondetails");
  
    closesubscriptiondetails.classList.remove("fullview");
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
  