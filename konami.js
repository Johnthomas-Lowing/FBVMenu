var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var password = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var curPos = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = password[curPos];
  if (key == requiredKey) {
    curPos++;
    if (curPos == password.length) {
      levelSeven();
      curPos = 0;
    }
  } else {
    curPos = 0;
  }
});

function levelSeven() {
  window.location.href = "invGen/lib.html";
}