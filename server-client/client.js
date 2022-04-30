const ws = new WebSocket('ws://localhost:9898/');

ws.onopen = function () {
  console.log('WebSocket Client Connected');
  ws.send('Hi this is web client.');
};
ws.onmessage = function (e) {
  console.log("Received: '" + e.data + "'");
};
ws.onclose = function () {
  console.log('Server disconnected');
};

document.querySelector('button').addEventListener('click', () => {
  ws.send(document.getElementById('textarea').value);
});
