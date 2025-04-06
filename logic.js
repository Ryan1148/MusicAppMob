const musics = [
  {
    musicTag: "Shape of you",
    artistTag: "Ed Sheeran",
    musicCanvas: "C1",
    musicSrc: "M1",
    artistCanvas: "AC1",
    desc: 'Edward Christopher Sheeran born in 17 February 1991 is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.Sheeran debut album, + ("Plus"), was released in September 2011 and topped the UK Albums Chart. It contained his first hit single "The A Team". In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough Act.',
  },
  {
    musicTag: "Hotline Bling",
    artistTag: "Drake",
    musicCanvas: "C2",
    musicSrc: "M2",
    artistCanvas: "AC2",
    desc: "Aubrey Drake Graham born in  October 24, 1986, known professionally as Drake, is a Canadian rapper and singer. An influential figure in contemporary popular music, Drake has been credited with popularizing singing and R&B sensibilities in hip hop artists.Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation (2001–08), he pursued a recording career in 2006, releasing his debut mixtape Room for Improvement in February of that year.",
  },
  {
    musicTag: "Mi Gente",
    artistTag: "j Balvin",
    musicCanvas: "C3",
    musicSrc: "M3",
    artistCanvas: "AC3",
    desc: 'José Álvaro Osorio Balvín (born 7 May 1985), known professionally as J Balvin, is a Colombian singer and rapper. He has been referred to as the "Prince of Reggaeton" (from Spanish: "Príncipe del Reguetón"),and is one of the best-selling Latin artists, with over 35 million records sold worldwide.Balvin was born in Medellín. At age 17, he moved to the United States to learn English, where he lived in both Oklahoma and New York.He then returned to Medellín and gained popularity performing at clubs in the city.',
  },
  {
    musicTag: "Selfish Love",
    artistTag: "Selena Gomez",
    musicCanvas: "C4",
    musicSrc: "M4",
    artistCanvas: "AC4",
    desc: "Selena Marie Gomez (born July 22, 1992) is an American singer, actress, businesswoman, and producer. Gomez began her career as a child actress, starring on the children's television series Barney & Friends (2002–2004). She rose to prominence and emerged as a teen idol, for her leading role as Alex Russo on the Disney Channel sitcom Wizards of Waverly Place (2007–2012).She signed with Hollywood Records in 2008. As the lead vocalist, she formed the pop rock band Selena Gomez & the Scene, and released three studio albums from 2009 to 2011; each of the band's albums and singles were certified gold or higher by the RIAA.",
  },
  {
    musicTag: "Heat Waves",
    artistTag: "Glass Animals",
    musicCanvas: "C5",
    musicSrc: "M5",
    artistCanvas: "AC5",
    desc: "Glass Animals are an English indie rock band formed in Oxford in 2010. The band's line-up consists of Dave Bayley (vocals, guitar, keyboards, drums, songwriting), Drew MacFarlane (guitar, keyboards, backing vocals), Edmund Irwin-Singer (bass, keyboards, backing vocals), and Joe Seaward (drums).The band is best known for their biggest hit single 'Heat Waves'.It reached number one in Australia in February 2021 and was voted number one on the Triple J Hottest 100 of 2020.",
  },
];

let cogWall = document.querySelector(".cog-wall");
let cogPanel = document.querySelector(".cog-panel");
let cogCancel = document.querySelector(".cog-cancel");
let listCancel = document.querySelector(".listCancel");

let aboutWall = document.querySelector(".about-img");
let aboutBackBtn = document.querySelector(".aboutBack");
let aboutPanel = document.querySelector(".about-panel");

let musicCanvas = document.querySelector(".music-canvas img");
let muTag = document.querySelector(".musicTag");
let artTag = document.querySelector(".artistTag");
let mainAudio = document.querySelector("#main-audio");
let tapItems = document.querySelectorAll(".sound");
let tap = new Audio("tap.mp3");
let transitions = document.querySelectorAll(".transition");
let ambient = document.querySelector(".ambient");
let ambientImg = document.querySelector(".ambient-canvas img");

let progressArea = document.querySelector(".progress-area");
let progressBar = document.querySelector(".progress-bar");
let current = document.querySelector(".current");
let mainAudioDuration = document.querySelector(".duration");
let playPause = document.querySelector(".playPause");
let playPauseImg = document.querySelector(".playPause img");
let prevBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let prevImg = document.querySelector(".previous img");
let nextImg = document.querySelector(".next img");
let changeBtn = document.querySelector(".repeat");
let changeImg = document.querySelector(".repeat img");
let queueBtn = document.querySelector(".queueBtn");
let musicList = document.querySelector(".queue-music");
let artistCanvas = document.querySelector(".artist-canvas img");
let desc = document.querySelector(".desc");
let feedBack = document.querySelector(".feedback");
let capsule = document.querySelector(".capsule");
let likeBtn = document.querySelector(".like-btn");
let likeBtnImg = document.querySelector(".like-btn img");
let navBar = document.querySelector(
  ".music .music-wrapper .music-panel .navbar"
);
let controlImg = document.querySelectorAll(".controller img");
let vTag = document.querySelector(".verifiedTag");
let vBubble = document.querySelector(".verifiedBubble");
let artistCard = document.querySelector(".artist-infocard");
let exp = document.querySelectorAll(".exp");
let expBtn = document.querySelector(".expBtn");
let expInfo = document.querySelector(".expInfo");


//sounds
tapItems.forEach((items) => {
  items.addEventListener("click", () => {
    if (items.classList.contains("sound")) {
      tap.play();
    }
  });
});

//likeBtn
likeBtn.addEventListener("click",()=>{
  if (likeBtn.classList.contains("like")) {
    likeBtn.classList.remove("like")
    likeBtnImg.src = "icons/main-icons/unfilled-heart.svg"
  } else {
    likeBtn.classList.add("like")
    likeBtnImg.src = "icons/main-icons/filled-heart.svg"
  }
})


//aboutWall 
aboutWall.addEventListener("click", () => {
  if (aboutWall.classList.contains("aboutToggle")) {
    aboutWall.classList.remove("aboutToggle");
    aboutPanel.style.left = "-400px";
  } else {
    aboutWall.classList.add("aboutToggle");
    aboutPanel.style.left = "0";
  }
});
aboutBackBtn.addEventListener("click", () => {
  aboutWall.click();
});

//cogWall
cogWall.addEventListener("click", () => {
  if (cogPanel.classList.contains("aboutToggle")) {
    cogPanel.classList.remove("aboutToggle");
    cogPanel.style.left = "400px";
  } else {
    cogPanel.classList.add("aboutToggle");
    cogPanel.style.left = "0";
  }
});
cogCancel.addEventListener("click", () => {
  cogWall.click();
});


//music-list
queueBtn.addEventListener("click", () => {
  if (musicList.classList.contains("wait")) {
    musicList.classList.remove("wait");
    musicList.style.display = "none";
  } else {
    musicList.classList.add("wait");
    musicList.style.display = "block";
    musicList.style.transform = "translateY(-300px)";
  }
});

listCancel.addEventListener("click", () => {
  queueBtn.click();
});

let musicIndex = 1;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playingNow();
  ambientOff();
});

function loadMusic(indexNumb) {
  musicCanvas.src = `canvas/${musics[indexNumb - 1].musicCanvas}.jpeg`;
  muTag.innerHTML = musics[indexNumb - 1].musicTag;
  artTag.innerHTML = musics[indexNumb - 1].artistTag;
  mainAudio.src = `musics/${musics[indexNumb - 1].musicSrc}.mp3`;
  artistCanvas.src = `artist-card/${musics[indexNumb - 1].artistCanvas}.jpg`;
  desc.innerHTML = musics[indexNumb - 1].desc;
  feedBack.innerHTML = `"${musics[indexNumb - 1].musicTag}"`;
  ambientImg.src = `canvas/${musics[indexNumb - 1].musicCanvas}.jpeg`;
}

function playMusic() {
  playPause.classList.add("pause");
  mainAudio.play();
  playPauseImg.src = "icons/music-icons/pause.svg";
}
function pauseMusic() {
  playPause.classList.remove("pause");
  mainAudio.pause();
  playPauseImg.src = "icons/music-icons/play.svg";
}

playPause.addEventListener("click", () => {
  const isMusicPaused = playPause.classList.contains("pause");

  isMusicPaused ? pauseMusic() : playMusic();
});

function nextMusic() {
  musicIndex++;
  musicIndex > musics.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

function prevMusic() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = musics.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

nextBtn.addEventListener("click", () => {
  nextMusic();
});
prevBtn.addEventListener("click", () => {
  prevMusic();
});

mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progWidth}%`;

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  currentSec < 10 ? (currentSec = `0${currentSec}`) : (currentSec = currentSec);
  current.innerHTML = `${currentMin}:${currentSec}`;

  mainAudio.addEventListener("loadeddata", () => {
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    totalSec < 10 ? (totalSec = `0${totalSec}`) : (totalSec = totalSec);
    mainAudioDuration.innerHTML = `${totalMin}:${totalSec}`;
  });
});

progressArea.addEventListener("click", (e) => {
  let progWidthVal = progressArea.clientWidth;
  let clickedOffsetX = e.offsetX;
  let musicDuration = mainAudio.duration;
  mainAudio.currentTime = (clickedOffsetX / progWidthVal) * musicDuration;
  playMusic();
});

changeBtn.addEventListener("click", () => {
  if (changeBtn.classList.contains("enable")) {
    changeImg.style.filter = "brightness(1)";
    changeBtn.classList.remove("enable");
  } else if (changeBtn.classList.contains("repeat")) {
    changeImg.src = "icons/music-icons/repeat1.svg";
    changeBtn.classList.replace("repeat", "repeat1");
  } else if (changeBtn.classList.contains("repeat1")) {
    changeImg.src = "icons/music-icons/shuffle.svg";
    changeBtn.classList.replace("repeat1", "shuffle");
  } else if (changeBtn.classList.contains("shuffle")) {
    changeImg.src = "icons/music-icons/repeat.svg";
    changeBtn.classList.replace("shuffle", "enable");
    changeBtn.classList.add("repeat");
    if (navBar.classList.contains("ambientBorder2")) {
    }else{
      changeImg.style.filter = "brightness(0.2)";
    }
  }
});

mainAudio.addEventListener("ended", () => {
  if (changeBtn.classList.contains("enable")) {
  } else if (changeBtn.classList.contains("repeat")) {
    nextMusic();
  } else if (changeBtn.classList.contains("repeat1")) {
    mainAudio.currentTime = 0;
    loadMusic(musicIndex);
    playMusic();
  } else if (changeBtn.classList.contains("shuffle")) {
    let rIndex = Math.floor(Math.random() * musics.length + 1);

    do {
      rIndex = Math.floor(Math.random() * musics.length + 1);
    } while (musicIndex == rIndex);
    musicIndex = rIndex;
    loadMusic(musicIndex);
    playMusic();
  }
  playingNow();
});

const listContainer = document.querySelector(".list-wrapper");

for (let i = 0; i < musics.length; i++) {
  let lists = `
                    <div class="music-list gblackborder flexBetween pointer" list-index= ${
                      i + 1
                    }>
                        <div class="music-info">
                            <p class="music-headTag transition midgreycol">${
                              musics[i].musicTag
                            }</p>
                            <p class="artist-tag transition greycol">${
                              musics[i].artistTag
                            }</p>
                        </div>
                        <div class="action-bar gblack flexBetween">
                            <audio class="${musics[i].musicSrc}" src="musics/${
    musics[i].musicSrc
  }.mp3" id="main-audio"></audio>
                            <div class="play-wall flexCenter"><img src="icons/music-icons/music.svg" alt=""></div>
                            <div class="gif-wall"><img src="waves/wave-dark.gif" alt=""></div>
                            <p id="${
                              musics[i].musicSrc
                            }" class="music-duration hide greycol"></p>
                        </div>
                    </div>
                 `;
  listContainer.insertAdjacentHTML("beforeend", lists);

  let listAudioDuration = document.querySelector(`#${musics[i].musicSrc}`);
  let listAudioTag = document.querySelector(`.${musics[i].musicSrc}`);

  listAudioTag.addEventListener("loadeddata", () => {
    let audioDuration = listAudioTag.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    totalSec < 10 ? (totalSec = `0${totalSec}`) : (totalSec = totalSec);
    listAudioDuration.innerHTML = `${totalMin}:${totalSec}`;
    listAudioDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}

const allListTags = document.querySelectorAll(".music-list");

function playingNow() {
  allListTags.forEach((listItems) => {
    let audioTag = listItems.querySelector(".music-duration");

    if (listItems.classList.contains("playing")) {
      listItems.classList.remove("playing");
      listItems.classList.remove("activate");
      audioTag.innerText = "";
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = `${adDuration}`;
      audioTag.style.color = "#808080";
      listItems.classList.remove("deblack");
    }

    if (listItems.getAttribute("list-index") == musicIndex) {
      listItems.classList.add("playing");
      listItems.classList.add("activate");
      audioTag.innerHTML = "playing";
      audioTag.style.color = "#fff";
      listItems.classList.add("deblack");
    }

    listItems.setAttribute("onclick", "clicked(this)");
  });
}
function clicked(elements) {
  let getAttr = elements.getAttribute("list-index");
  console.log(getAttr);
  musicIndex = getAttr;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

// settings functions
// btns

let soundBtn = document.querySelector(".soundBtn");
let transBtn = document.querySelector(".transitionBtn");
let ambientBtn = document.querySelector(".ambientBtn");

//toggles
let soundToggle = document.querySelector(".soundToggle");
let transitionToggle = document.querySelector(".transitionToggle");
let ambientToggle = document.querySelector(".ambt");

soundBtn.addEventListener("click", () => {
  if (soundToggle.classList.contains("soundToggle")) {
    soundToggle.classList.remove("soundToggle");
    soundToggle.classList.add("danger");
    soundToggle.classList.remove("active");
    tapItems.forEach((items) => {
      items.classList.remove("sound");
    });
  } else {
    soundToggle.classList.add("soundToggle");
    soundToggle.classList.remove("danger");
    soundToggle.classList.add("active");
    tapItems.forEach((items) => {
      items.classList.add("sound");
    });
  }
});

transBtn.addEventListener("click", () => {
  if (transitionToggle.classList.contains("transitionToggle")) {
    transitionToggle.classList.remove("transitionToggle");
    transitionToggle.classList.add("danger");
    transitionToggle.classList.remove("active");
    transitions.forEach((items) => {
      items.classList.remove("transition");
    });
  } else {
    transitionToggle.classList.add("transitionToggle");
    transitionToggle.classList.remove("danger");
    transitionToggle.classList.add("active");
    transitions.forEach((items) => {
      items.classList.add("transition");
    });
  }
});

function ambientOn() {
  aboutWall.classList.add("ambient2");
  capsule.classList.add("ambient2");
  cogWall.classList.add("ambient2");
  likeBtn.classList.add("ambient2");
  progressArea.classList.add("ambient2");
  prevImg.classList.add("ambientIcon2");
  nextImg.classList.add("ambientIcon2");
  prevImg.style.filter = "brightness(1)";
  nextImg.style.filter = "brightness(1)";
  playPauseImg.style.filter = "brightness(1)";
  navBar.classList.add("ambientborder2");
  artTag.classList.add("ambientcol4");
  artTag.classList.remove("greycol");
  current.classList.add("ambientcol4");
  mainAudioDuration.classList.add("ambientcol4");
  current.classList.remove("greycol");
  mainAudioDuration.classList.remove("greycol");
  playPauseImg.classList.add("ambientIcon5");
  controlImg.forEach((items) => {
    items.classList.add("ambientIcon4");
  });
  vTag.classList.add("ambientblur2");
  vBubble.classList.add("ambientblur2");
  artistCard.classList.add("ambientinside3");
  expBtn.classList.add("ambientinside3");
  desc.classList.add("ambientcol4");
  expInfo.classList.add("ambientcol4");
  expInfo.classList.remove("greycol");
  exp.forEach((items) => {
    items.classList.add("ambient2");
    items.classList.remove("gblack");
  });
  let qbar = document.querySelector(".queue-music");
  let qlogo = document.querySelector(".que-logo");
  let qcap = document.querySelector(".queue-capsule");
  let cancel = document.querySelector(".cancel");
  qlogo.classList.add("ambient2");
  qcap.classList.add("ambient2");
  cancel.classList.add("ambient2");
  qbar.classList.add("ambientinside3");
  qbar.style.backdropFilter = "blur(40px)";
  controlImg.forEach((items) => {
    if (items.classList.contains("enable")) {
      items.style.filter = "brightness(0.1)";
    }
    items.style.filter = "brightness(1)";
  });
}

function ambientOff() {
  aboutWall.classList.remove("ambient2");
  capsule.classList.remove("ambient2");
  cogWall.classList.remove("ambient2");
  likeBtn.classList.remove("ambient2");
  progressArea.classList.remove("ambient2");
  prevImg.classList.remove("ambientIcon2");
  nextImg.classList.remove("ambientIcon2");
  prevImg.style.filter = "brightness(0.3)";
  nextImg.style.filter = "brightness(0.5)";
  playPauseImg.style.filter = "brightness(0.8)";
  navBar.classList.remove("ambientborder2");
  artTag.classList.remove("ambientcol4");
  artTag.classList.add("greycol");
  current.classList.remove("ambientcol4");
  mainAudioDuration.classList.remove("ambientcol4");
  current.classList.add("greycol");
  mainAudioDuration.classList.add("greycol");
  playPauseImg.classList.remove("ambientIcon5");
  controlImg.forEach((items) => {
    items.classList.remove("ambientIcon4");
    items.style.filter = "brightness(0.5)";
  });
  vTag.classList.remove("ambientblur2");
  vBubble.classList.remove("ambientblur2");
  artistCard.classList.remove("ambientinside3");
  expBtn.classList.remove("ambientinside3");
  desc.classList.remove("ambientcol4");
  expInfo.classList.remove("ambientcol4");
  expInfo.classList.add("greycol");
  exp.forEach((items) => {
    items.classList.remove("ambient2");
    items.classList.add("gblack");
  });
  let qbar = document.querySelector(".queue-music");
  let qlogo = document.querySelector(".que-logo");
  let qcap = document.querySelector(".queue-capsule");
  let cancel = document.querySelector(".cancel");
  qlogo.classList.remove("ambient2");
  qcap.classList.remove("ambient2");
  cancel.classList.remove("ambient2");
  qbar.classList.remove("ambientinside3");
  qbar.style.backdropFilter = "blur(40px)";
}

ambientBtn.addEventListener("click", () => {
  if (ambientToggle.classList.contains("ambientToggle")) {
    ambientToggle.classList.remove("ambientToggle");
    ambientToggle.classList.add("danger");
    ambientToggle.classList.remove("active");
    ambient.style.display = "none";
    ambientOff();
  } else {
    ambientToggle.classList.add("ambientToggle");
    ambientToggle.classList.remove("danger");
    ambientToggle.classList.add("active");
    ambient.style.display = "block";
    ambientOn();
  }
});

//colors

let colors = document.querySelectorAll(".col");

colors.forEach((clrItems) => {
  clrItems.addEventListener("click", () => {
    if (clrItems.classList.contains("c1")) {
      progressBar.classList.add("danger");
      progressBar.classList.remove("active");
      progressBar.classList.remove("alert");
      progressBar.classList.remove("primary");
    } else if (clrItems.classList.contains("c2")) {
      progressBar.classList.remove("danger");
      progressBar.classList.remove("alert");
      progressBar.classList.remove("primary");
      progressBar.classList.add("active");
    } else if (clrItems.classList.contains("c3")) {
      progressBar.classList.add("primary");
      progressBar.classList.remove("active");
      progressBar.classList.remove("danger");
      progressBar.classList.remove("alert");
    } else if (clrItems.classList.contains("c4")) {
      progressBar.classList.remove("active");
      progressBar.classList.remove("primary");
      progressBar.classList.remove("danger");
      progressBar.classList.add("alert");
    }
  });
});

let keys = document.querySelector(".keys");
document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    
    case "ArrowRight":
      nextMusic();
      break;

    case "ArrowLeft":
      prevMusic();
      break;

    case "Tab":
      queueBtn.click();
      break;

    case "s":
      cogWall.click();
      break;
    case "a":
      aboutWall.click();
      break;

    case "r":
      changeBtn.click();
      break;
    default:
      break;
  }
});

document.body.addEventListener("keydown",(e)=>{
  switch (e.keyCode) {
    case 32:
      if (keys.classList.contains("pause")) {
        pauseMusic();
        keys.classList.remove("pause");
      } else {
        playMusic();
        keys.classList.add("pause");
      }
      break;
  
    default:
      break;
  }
})


exp.forEach((items)=>{
  items.addEventListener("click",()=>{
    if (items.classList.contains("exp1")) {
      feedBack.style.color = "#ff0050"
    } else if(items.classList.contains("exp2")){
      feedBack.style.color = "#ffbb00"
    } else if(items.classList.contains("exp3")){
      feedBack.style.color = "#fff"
    } else if(items.classList.contains("exp4")){
      feedBack.style.color = "#0088ff"
    } else if(items.classList.contains("exp5")){
      feedBack.style.color = "#00ff80"
    };
  });
});