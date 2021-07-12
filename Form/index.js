// function www(){
// document.getElementById("aneesh").style.backgroundColor ="green";

// }
// function eee(){
//   document.getElementById("aneesh").style.backgroundColor="red";
// }
function ash() {
  document.getElementById('summa').style.backgroundColor = "red";
}
//   }
//   function ohh(){
//     document.getElementById("aneesh").style.backgroundColor ="#ff6801";

//   }

function call() {
  var name = document.getElementById('name').value;

  if (name == "") {
    document.getElementById('name').style.borderColor = "red";
    document.getElementById("nameError").innerHTML = "Please Enter Your Name";
    return false;
  } else {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById('name').style.borderColor = "green";
  }

  var fatherName = document.getElementById('fatherName').value;
  if (fatherName == "") {
    document.getElementById('faNameError').innerHTML = "Please Enter Your Father's Name";
    document.getElementById('fatherName').style.borderColor = "red";
  }
  else {
    document.getElementById('faNameError').innerHTML = "";
    document.getElementById('fatherName').style.borderColor = "green";
  }

  var address = document.getElementById('address').value;

  if (address == "") {

    document.getElementById('address').style.borderColor = "red";

  }
  else {
    document.getElementById('address').style.borderColor = "green";
  }

  var pincode = document.getElementById('pincode').value;
  if (pincode == "") {


    document.getElementById('pincode').style.borderColor = "red";
  }
  else {
    document.getElementById('pincode').style.borderColor = "green";
  }
  var mail = document.getElementById('mail').value;
  if (mail == "") {
    document.getElementById('mail').style.borderColor = "red";
  }
  else {
    document.getElementById('mail').style.borderColor = "green";
  }
}