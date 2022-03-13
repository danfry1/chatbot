/*

TODO:
1. Create functions that return date and time
2. Create functions for botResponse and userInput
3. Create a function that stores all possible bot responses
4. Use enter to send function
5. Press button to send function
6. Scroll chatbox

FIXME:
1. Month shows one month less so had to + 1
2. Create compatibility for long messages so they don't overflow x axis
3. After sleep and wake up input click eye to blink no longer works
4. Change eye color to response only works for single word colors and has to have a color at end of sentence

IDEAS:
1. Possibly add click on message to show time sent functionality
2. Create case insensitive input option
3. Ask name and return it response
4. Generate response when eye is clicked
5. Add more conversational responses

*/

///////////////////////////////////////////////////////////////////////////////////////////////////
// DATE AND TIME

// Returns current time
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let time = hours + ':' + minutes;
  return time;
}

// Returns date of the year
function getDOY() {
  let today = new Date();
  day = today.getDate();
  month = today.getMonth();
  year = today.getFullYear();

  let date = day + '/' + (month + 1) + '/' + year;
  return date;
}

// Displays Date and Time with a line break
function displayDateAndTime() {
  let time = getTime();
  let date = getDOY();

  $('#chat-timestamp').append(date);
  $('#chat-timestamp').append('<br>');
  $('#chat-timestamp').append(time);
  document.getElementById('userInput').scrollIntoView(false);
}

// Calling Date and Time Function
displayDateAndTime();

///////////////////////////////////////////////////////////////////////////////////////////////////
// INPUT AND RESPONSE

// Gets correct response from responses function and appends it to chatbox
function getBotResponse(userText) {
  // Creates a bot response variable after passing userText through the responses function and finding correct response
  let botResponse = findBotResponse(userText);

  // Creates a paragraph element using the correct response from response function
  let botMsg = "<p class='botText'><span>" + botResponse + '</span></p>';

  // Creates an h5 time element using the getTime function and aligns it to left of msg box
  let time =
    "<h5 id='chat-timestamp' style='text-align:left'><span>" +
    getTime() +
    // ADD DATE DISPLAY TO BOT MESSAGE
    // "<br>" +
    // getDOY() +
    '</span></h5>';

  // Appends the botText and time to the chatbox
  $('#chatbox').append(botMsg, time);

  // Scroll when new message posted
  scroll();
}

// Gets text from user input and appends it to chatbox
function getUserResponse() {
  // Receives the text from input box and assigns it to variable
  let userText = $('#textInput').val();

  // if user text is blank then send ...
  if (userText == '') {
    userText = 'What can you do?';
  }

  // Create a paragraph element using the userText input
  let userMsg = "<p class='userText'><span>" + userText + '</span></p>';

  // Create an h5 time element using the getTime function and aligns it to right of msg box
  let time =
    "<h5 id='chat-timestamp' style='text-align:right'><span>" +
    getTime() +
    // ADD DATE DISPLAY TO USER MESSAGE
    // "<br>" +
    // getDOY() +
    '</span></h5>';

  // Clear the input box
  $('#textInput').val('');

  // Appends the userText and time to the chatbox
  $('#chatbox').append(userMsg, time);

  // Scroll when new message posted
  scroll();

  // Delay between user post and bot response
  setTimeout(() => {
    getBotResponse(userText);
  }, 1000);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Send and Scroll

// Enter button to send
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getUserResponse();
  }
});

// Scroll when new message posted
function scroll() {
  var element = document.getElementById('chatbox');
  element.scrollTop = element.scrollHeight;
}

// Click button to send
let button = document.getElementById('send');

button.addEventListener('click', function () {
  getUserResponse();
});

///////////////////////////////////////////////////////////////////////////////////////////////////
