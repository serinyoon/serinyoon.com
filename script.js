var texts = [
  "HELLO",
  "SERIN YOON",
  "COMPUTER SCIENCE",
  "UNIVERSITY OF ILLINOIS", 
  "DECEMBER", "2015",
  "WEB DEVELOPMENT",
  "UI/UX",
  "LINKEDIN",
  "GITHUB",
  "CODEPEN",
  
];
var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/";
var shuffled = [];

shuffle();
setInterval(unshuffle, 40);

function shuffle() {
  for(var i = 0; i < texts.length; i++) {
    var str = '';
    for(var j = 0; j < texts[i].length; j++) {
      if(texts[i][j] == ' ') str += ' ';
      else str += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    shuffled.push(str.split(''));
  }
}

function unshuffle() {
  for(var i = 0; i < texts.length; i++) {
    for(var j = 0; j < texts[i].length; j++) {
      if(shuffled[i][j] !== texts[i][j]) {
          shuffled[i][j] = charset[(charset.indexOf(shuffled[i][j]) + 1)%charset.length];
      }
      display();
    }
  }
}

function display() {
  $('.hello').text(shuffled[0].join(''));
  $('.name').text(shuffled[1].join(''));
  $('.major').text(shuffled[2].join(''));
  $('.school').text(shuffled[3].join(''));
  $('.month').text(shuffled[4].join(''));
  $('.year').text(shuffled[5].join(''));
  $('.web').text(shuffled[6].join(''));
  $('.ui').text(shuffled[7].join(''));
  $('.linkedin').text(shuffled[8].join(''));
  $('.github').text(shuffled[9].join(''));
  $('.codepen').text(shuffled[10].join(''));
}