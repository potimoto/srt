1

00:00:00,000 --> 00:00:01,000

loadScript('//static.robotwebtools.org/EventEmitter2/current/eventemitter2.min.js', function(e){
    console.log("robot web tools loaded");
});
loadScript('//static.robotwebtools.org/roslibjs/current/roslib.js', function(e){
    console.log("roslib loaded");
});

ros = new ROSLIB.Ros();

ros.on('error', function(error) {
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('error').style.display = 'inline';
    console.log(error);
  });

ros.on('connection', function() {
    console.log('Connection made!');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('connected').style.display = 'inline';
});

ros.on('close', function() {
    console.log('Connection closed.');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'inline';
});

ros.connect('ws://192.168.10.122:9090');
  
teleop = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
});

let idx;
az = [1, 0, -1, 1, 0, -1, -1, 0, 1];
lx = [1, 1, 1, 0, 0, 0, -1, -1, -1];

function pub(idx) {
    var msg = new ROSLIB.Message({
             angular: {
                x: 0,
                y: 0,
                z: az[idx] * 0.25
            },
            linear: {
                x: lx[idx] * 0.125,
                y: 0,
                z: 0
            }
    });
    console.log(idx);
    teleop.publish(msg);
    console.log(msg);
}

pub(0);
