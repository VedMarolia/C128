music = ""
l_wrist_y = 0
r_wrist_y = 0
l_wrist_x = 0
r_wrist_x = 0

function preload() {
   music = loadSound("music.mp3")
}

function setup() {
   canvas = createCanvas(400, 400)
   canvas.center()

   video = createCapture(VIDEO)
   video.hide()

   poseNet = ml5.poseNet(video , modelLoaded )
   poseNet.on("pose" , gotResults)
}

function draw() {
   image(video , 0, 0, 400, 400 )
}

function start(){
   music.play()
   music.setVolume(1)
   music.rate(1)
}

function music_s(){
   music.pause()
}

function modelLoaded(){
   console.log("Model is Loaded")
}

function gotResults(results){
   if(results.length > 0){
   
      console.log(results)

      l_wrist_y = results[0].pose.leftWrist.y;
      console.log("The Y position of Left Wrist is " +l_wrist_y)
      r_wrist_y = results[0].pose.rightWrist.y;
      console.log("The Y position of Right Wrist is " +r_wrist_y)
      l_wrist_x = results[0].pose.leftWrist.x;
      console.log("The X position of Left Wrist is " +l_wrist_x)
      r_wrist_x = results[0].pose.rightWrist.x;
      console.log("The X position of Right Wrist is " +r_wrist_x)

   }
}