img="";
Status="";
objects=[];
function setup(){
canvas=createCanvas(640,400);
canvas.center()

}
function preload(){
img=loadImage("bike.jpg");
ObjectDetector=ml5.objectDetector("cocssd",modelLoaded);
}

function draw(){
image(img,0,0,640,400);

if(Status !=""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status :Object Detected";
fill("#CB4335");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
noFill();
stroke("#CB4335");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}


}
}

function modelLoaded(){
console.log("Model loaded!");
Status=true;
ObjectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){

    console.log(error);
}
console.log(results)
objects=results;

}

