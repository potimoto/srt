1
00:00:00,000 --> 00:00:01,000
let turtleX = 3.0;
let turtleZ = 2.0;
let ws = new WebSocket('ws://192.168.1.13:8888/');
this.send(JSON.stringify([WebSocketV1Transport.SRT_MSG, {
    ["x"]: this.turtleX,
    ["y"]: this.turtleY}]));
2
00:00:03,000 --> 00:00:04,000
let turtleX = 0.0;
let turtleZ = 0.0;