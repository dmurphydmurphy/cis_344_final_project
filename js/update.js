/*---------------------------------------------------------------------------
Name: DIllard Murphy
Course: CIS-376
Project: Final
Date: 12/4/2019
Title: Software Consulting Website Revamp
----------------------------------------------------------------------------*/


// ----------------------------------------------------------------------------
// Create variables to hold details about the input and not initialized
var email = '[not initialized]' ;
var address_1 = '[not initialized]';
var address_2 = '[not initialized]';
var city = '[not initialized]';
var state = '[not initialized]';
var zip = '[not initialized]';
var news_letter = '[not initialized]';
var description = '[not initialized]';

// ----------------------------------------------------------------------------
// Set text generic function
function setTextContentById(getId, setText){
  // Get ID
  var el = document.getElementById(getId);
  // Set text
  el.textContent = setText;
}

// ----------------------------------------------------------------------------
// this function initializes all varibles

function initiateVars() {
  email = 'none';
  address_1 = 'none';
  address_2 = 'none';
  city = 'none';
  state = 'none';
  zip = 'none';
  news_letter = 'none';
  description = 'none';
}

//----------------------------------------------------------------------------
// Function Calls and using a IIFE wrapper
(function(){

  initiateVars();
  setTextContentById('email', email);
  setTextContentById('address_1', address_1);
  setTextContentById('address_2', address_2);
  setTextContentById('city', city);
  setTextContentById('state', state);
  setTextContentById('zip', zip);
  setTextContentById('news_letter', news_letter);
  setTextContentById('description', description);


}());

//-----------------------------------------------------------------------------
// Creates an action listener and if the Submit button is clicked then
// the variables are reset to "updated".
document.getElementById('submit').addEventListener('click', resetVars).preventDefault();

function resetVars(){
  document.getElementById("email").innerHTML = "Updated";
  document.getElementById("address_1").innerHTML = "Updated";
  document.getElementById("address_2").innerHTML = "Updated";
  document.getElementById("city").innerHTML = "Updated";
  document.getElementById("state").innerHTML = "Updated";
  document.getElementById("zip").innerHTML = "Updated";
  document.getElementById("news_letter").innerHTML = "Updated";
  document.getElementById("description").innerHTML = "Updated";

}
