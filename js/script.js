const videoElement = document.getElementById('video');
const selectButton = document.getElementById('selectButton');
const startButton = document.getElementById('startButton');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('Oh, error here: ', error);
  }
}

startButton.addEventListener('click', async () => {
  startButton.disabled = true;
  await videoElement.requestPictureInPicture();
  startButton.disabled = false;
});

selectButton.addEventListener('click', selectMediaStream);