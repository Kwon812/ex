const icon = document.querySelector('.icon');
const on = document.querySelector('.fas.fa-video');
const off = document.querySelector('.fas.fa-video-slash');
const camera =document.querySelector('.camera');
const name=document.querySelector('name');
const precent=document.querySelector('.percent');

icon.addEventListener('click',() => {
  on.classList.toggle('invisible');
  off.classList.toggle('invisible');
});
const URL = "./kwonmodel/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(480, 480, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        //await webcam.play();
        window.requestAnimationFrame(loop);

        camera.appendChild(webcam.canvas);
        async function loop() {
          webcam.update(); // update the webcam frame
         // await predict();
          window.requestAnimationFrame(loop);
      }
      init();
  
    }