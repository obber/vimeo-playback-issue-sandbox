const VIMEO_IDS = [
  932256467, 932256435, 932410870, 932256417, 932256327, 932256366, 932256476,
  932256409, 932256451, 932256386,
];

let currentlyPlayingIndex = 0;
let player;

$(init);

function init() {
  const iframe = $("#video-iframe").get(0);
  player = new Vimeo.Player(iframe);

  player.on("ended", handleVideoEnded);
  $("#previous-button").on("click", handlePreviousButtonClick);
  $("#next-button").on("click", handleNextButtonClick);
}

function handleVideoEnded() {
  playNextVideo();
}

function handlePreviousButtonClick() {
  playPreviousVideo();
}

function handleNextButtonClick() {
  playNextVideo();
}

function playNextVideo() {
  playVideoAndSetIndex(incrementIndex(currentlyPlayingIndex));
}

function playPreviousVideo() {
  playVideoAndSetIndex(decrementIndex(currentlyPlayingIndex));
}

function playVideoAndSetIndex(newIndex) {
  currentlyPlayingIndex = newIndex;
  const id = VIMEO_IDS[newIndex];
  console.log("loading video id = ", id);
  player.loadVideo(id);
}

function incrementIndex(currentIndex) {
  if (currentIndex === VIMEO_IDS.length - 1) {
    return 0;
  }
  return currentIndex + 1;
}

function decrementIndex(currentIndex) {
  if (currentIndex === 0) {
    return VIMEO_IDS.length - 1;
  }
  return currentIndex - 1;
}
