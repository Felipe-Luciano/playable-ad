const videoPlayer = document.querySelector('#videoPlayer');

videoPlayer.addEventListener('click', () => {
  videoPlayer.src = "./src/eventVideo.mp4";
});