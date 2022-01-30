function setup()
{
 canvas= createCanvas(500,500);
   canvas.position(510 , 150);   
    background("white") ;
}

function setup()
{
video = createCapture(VIDEO) ;
video.size(500 , 500) ;
video.position(125 , 80)

 canvas= createCanvas(550,550);
   canvas.position(560 , 160);

    poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized') ;
}

function draw()
{
  background('#b0c4de') ;
}

function gotPoses(results)
{
if (results.length > 0)
{
  console.log(results) ;
}
}