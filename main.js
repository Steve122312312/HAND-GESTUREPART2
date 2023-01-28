
Webcam.attach("#camera")

Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90
})

function captureimage() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = "<img src='" + datauri + "' id='snapshot'>"
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qeKJ7kLgv/model.json", modelLoaded)

function modelLoaded() {
    console.log("HELLO")
}

