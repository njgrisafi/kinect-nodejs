var Kinect2 = require('kinect2');

var kinect = new Kinect2();

if(kinect.open()) {
    console.log("Kinect Opened");
    kinect.on('bodyFrame', function(bodyFrame){
        for(var i = 0;  i < bodyFrame.bodies.length; i++) {
            if(bodyFrame.bodies[i].tracked) {
                console.log(bodyFrame.bodies[i]);
            }
        }
    });
    kinect.openBodyReader();
    setTimeout(function(){
        kinect.close();
        console.log("Kinect Closed");
    }, 60000);
}
