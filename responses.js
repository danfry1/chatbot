// Runs user input to match correct response
function findBotResponse(input) {
  // NO INPUT RESPONSE
  if (input == 'What can you do?') {
    let helpResponses = [
      'Try changing my eye color by typing: change eye color to _____',
      "You can ask me to 'flip a coin'",
      "You can ask me to 'roll dice'",
      "You can ask me to 'sleep' or 'wake up'",
      "Try saying 'upside down' and see what happens",
      'Try clicking on my eye',
      "Select a different color scheme by typing 'color scheme' and then folow with 1, 2, 3 or 4. The color scheme is currently set to color scheme 1",
    ];

    return helpResponses[Math.floor(Math.random() * helpResponses.length)];
  }

  // CONVERSATIONAL RESPONSES
  if (input == 'hi' || input == 'hello') {
    return 'Hello, how are you?';
  }

  if (
    input.includes('good') ||
    input.includes('great') ||
    input.includes('well')
  ) {
    return 'I am glad to hear that';
  }

  if (input == 'hey') return 'Hello there !';

  if (input == 'thanks') return 'No problem';

  if (input == 'goodbye' || input == 'bye') {
    return 'Goodbye';
  }

  // FLIP RESPONSES
  if (input == 'upside down') {
    $('.eye').css('transform', 'rotate(180deg)');
    $('#chatbox').css('transform', 'rotate(180deg)');
    // $("#input").css("transform", "rotate(180deg)");
    // $("#content").css("transform", "rotate(180deg)");
    return "Whoa! Send 'flip' to return to normal";
  }

  if (input == 'flip') {
    $('.eye').css('transform', 'rotate(0deg)');
    $('#chatbox').css('transform', 'rotate(0deg)');
    $('#input').css('transform', 'rotate(0deg)');
    return "That's better";
  }

  // INTERACTIVE EYE RESPONSES
  if (input.includes('change eye color to')) {
    let colorArr = input.split(' ');
    let color = colorArr[colorArr.length - 1];
    $('.iris').css('border', `10px solid ${color}`);
    return `My eye color has been changed to ${color}`;
  }

  if (input == 'sleep') {
    $('#blink span').css('height', '100%');
    return 'zzz';
  }

  if (input == 'wake up') {
    $('#blink span').css('height', '30%');
    return 'Im up';
  }

  // GAME RESPONSES
  if (input == 'flip a coin') {
    let arr = ['Heads', 'Tails'];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (input == 'roll dice') {
    return Math.floor(Math.random() * 6) + 1;
  }

  // COLOR SCHEME RESPONSES
  if (input == 'color scheme 1') {
    $('.eye-box').css('background-color', '#6b705c');
    $('#chatbox').css('background-color', '#ffe8d6');
    $('#input').css('background-color', '#6b705c');
    return 'Color scheme set to 1';
  }

  if (input == 'color scheme 2') {
    $('.eye-box').css('background-color', '#264653');
    $('#chatbox').css('background-color', '#e9c46a');
    $('#input').css('background-color', '#264653');
    return 'Color scheme set to 2';
  }

  if (input == 'color scheme 3') {
    $('.eye-box').css('background-color', '#d62828');
    $('#chatbox').css('background-color', '#fcbf49');
    $('#input').css('background-color', '#d62828');
    return 'Color scheme set to 3';
  }

  if (input == 'color scheme 4') {
    $('.eye-box').css('background-color', '#283618');
    $('#chatbox').css('background-color', '#fefae0');
    $('#input').css('background-color', '#283618');
    return 'Color scheme set to 4';
  }

  // No response available
  let unknown = [
    'Try asking something else',
    "I don't understand",
    'Try again',
  ];
  return unknown[Math.floor(Math.random() * unknown.length)];
}
