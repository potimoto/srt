1
00:00:00,000 --> 00:00:01,000
startTime = Performance.now();
loadScript('https://static.robotwebtools.org/EventEmitter2/current/eventemitter2.min.js', function(e){
    loadScript('https://static.robotwebtools.org/roslibjs/current/roslib.js', function(e){
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
        });
        ros.on('close', function() {
            console.log('Connection closed.');
            document.getElementById('connecting').style.display = 'none';
            document.getElementById('connected').style.display = 'none';
            document.getElementById('closed').style.display = 'inline';
        });
        ros.connect('ws://192.168.10.122:9090');
        // ros.conect('ws://000412d18d4c.ngrok.io');
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
        pub(4);
        //ここにsubscribe処理を記述する
        
        endTime = performance.now();
            console.log(endTime - startTime);
        });
});    

2
00:00:02,000 --> 00:00:03,000
alert("hello world");
