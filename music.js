const audio = document.querySelector('.audio');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist');
const songImg = document.querySelector('.song-img');
const playBtn = document.querySelector('.play');
const shuffleBtn = document.querySelector('.shuffle');
const repeatBtn = document.querySelector('.repeat');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const rangeBar = document.querySelector('.range-bar');
const currentTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');
const volumeBtn = document.querySelector('.volume-icon');
const volumeBar = document.querySelector('.volume-bar');
const songList = document.querySelector('.song-list');

function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
    }`;
}

const app = {
    currentIndex: 0,
    isPlaying: false,
    isShuffle: false,
    isRepeat: false,
    isMute: true,
    songs: [
        {
            name: "Blue Tequila",
            artist: "Táo",
            imgURL: "https://i.scdn.co/image/ab67616d00001e0273390739b16075b5d49454f5",
            audioURL: "bluetequila.mp3"
        },
        {
            name: "Độ Tộc 2",
            artist: "Độ Mixi, Pháo, Phuc Du, Masew",
            imgURL: "https://i.scdn.co/image/ab67616d00001e02935ff8d87d960714f853f548",
            audioURL: "dotoc2.mp3"
        },
        {
            name: "Mời Trầu",
            artist: "Masew, Tuấn Cry",
            imgURL: "https://i.scdn.co/image/ab67616d00001e02236b71fa34187390fd206a6a",
            audioURL: "moitrau.mp3"
        },
        {
            name: "Muộn rồi mà sao còn",
            artist: "Sơn Tùng M-TP",
            imgURL: "https://i.scdn.co/image/ab67616d00001e0229f906fe7a60df7777b02ee1",
            audioURL: "muonroimasaocon.mp3"
        },
        {
            name: "Phố đã lên đèn",
            artist: "Huyền Tâm Môn",
            imgURL: "https://i.scdn.co/image/ab67616d00001e02c1a973e472e56199e2efc5d0",
            audioURL: "phodalenden.mp3"
        },
        {
            name: "QUERRY",
            artist: "QNT, Trung Trần, RPT MCK",
            imgURL: "https://i.scdn.co/image/ab67616d00001e0229920f5d50112ec6f72efe39",
            audioURL: "QUERRY.mp3"
        },
        {
            name: "Stream đến bao giờ",
            artist: "Độ Mixi",
            imgURL: "https://i.scdn.co/image/ab67616d00001e02df020e67e23f154d963c9382",
            audioURL: "streamdenbaogio.mp3"
        },
        {
            name: "Túy Âm",
            artist: "Masew, Xesi, Nhật Nguyễn",
            imgURL: "https://i.scdn.co/image/ab67616d00001e021408e9bf3488524d71c2dcbd",
            audioURL: "tuyam.mp3"
        }
    ],
    render: function () {
        const durationInfo = document.querySelector('.duration-info');
        const htmls = this.songs.map( (song, index) => {
            return `
                <li class="group">
                <div class="queue-item flex items-center justify-between px-4 py-1 group-hover:bg-[#2a2a2a] rounded cursor-pointer ${index === this.currentIndex ? 'bg-[#2a2a2a]' : ''}" data-index="${index}">
                <span class="text-[#a7a7a7] w-[1%]">
                    ${index + 1}
                </span>
                <div class="w-[48%] flex items-center gap-2">
                    <img src="${song.imgURL}" alt="" class="w-[40px] h-[40px]">
                    <div class="flex flex-col">
                        <span class="font-medium text-white hover:underline">
                            ${song.name}
                        </span>
                        <span class="text-xs text-white opacity-80 hover:underline">
                            ${song.artist}
                        </span>
                    </div>
                </div>
                <span class="text-sm text-white opacity-80 hover:opacity-100 hover:underline w-[35%]">
                    ${song.name}
                </span>
                <div class="w-[1%]">
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe fill-[#1fdf64]"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg>
                </div>
                <span class="text-white opacity-80 w-[1%] duration-info">
                    0:00
                </span>
                <div class="w-[3%]">
                    <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="cursor-pointer Svg-sc-1bi12j5-0 jgfuCe fill-white opacity-80 hover:opacity-100"><path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </div>
            </div></li>
            `
        })
        songList.innerHTML = htmls.join(' ');
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvent: function () {
        const _this= this;

        playBtn.addEventListener('click', () => {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        })

        audio.onplay = () => {
            _this.isPlaying = true;
            playBtn.innerHTML = `
            <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe fill-black"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
            `
        }

        audio.onpause = () => {
            _this.isPlaying = false;
            playBtn.innerHTML = `
            <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe fill-black"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
            `
        }

        nextBtn.onclick = () => {
            if (_this.isShuffle) {
                _this.playShuffle();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }

        prevBtn.onclick = () => {
            if (_this.isShuffle) {
                _this.playShuffle();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
        }

        shuffleBtn.onclick = () => {
            _this.isShuffle = !_this.isShuffle;
            shuffleBtn.classList.toggle('active', _this.isShuffle);
        }

        audio.onended = () => {
            if (_this.isShuffle) {
                _this.playShuffle();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }

        repeatBtn.onclick = () => {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        audio.onended = () => {
            if (_this.isRepeat) {
                audio.play();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
        }

        audio.ontimeupdate = () => {
            if(audio.duration) {
                const progressPercentage = Math.floor((audio.currentTime / audio.duration) * 100);
                rangeBar.value = progressPercentage;
            }
        }


        rangeBar.onchange = (e) => {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }

        volumeBar.onmousemove = (e) => {
            audio.volume = volumeBar.value / 100;
        }

        volumeBtn.onclick = (e) => {
            if(_this.isMute) {
                volumeBar.value = 0;
                audio.volume = 0;
                _this.isMute = false;
            }
            else if(!_this.isMute) {
                volumeBar.value = 50;
                audio.volume = 0.5;
                _this.isMute = true;
            }
        }

        songList.onclick = (e) => {
            console.log(e.target);
            const songNode = e.target.closest('.queue-item');
            if(songNode) {
                _this.currentIndex = parseInt(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
            }
        }
    },
    loadCurrentSong: function () {
        songName.innerHTML = this.currentSong.name;
        songImg.src = this.songs[this.currentIndex].imgURL;
        artistName.innerHTML = this.currentSong.artist;
        audio.src = `./audio/${this.currentSong.audioURL}`;
    },
    nextSong: function () {
        this.currentIndex++;
        if(this.currentIndex > this.songs.length - 1) {
            this.currentIndex = 0;
        }
        
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playShuffle: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    displayTimer: function () {
        currentTime.innerText = formatTimer(audio.currentTime);
        if(!audio.duration) {
            durationTime.innerText = '00:00';
        } else {
            durationTime.innerText = formatTimer(audio.duration);
        }
    },
    start: function () {
        this.defineProperties();

        this.handleEvent();

        this.loadCurrentSong();

        this.render();

        setInterval(() => {
            this.displayTimer();
        }, 1000);


        setInterval(() => {
            if(audio.volume == 0) {
                volumeBtn.innerHTML = `
                <svg role="presentation" height="16" width="16" aria-label="Đang tắt tiếng" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0  fill-white opacity-80 hover:opacity-100 hover:duration-300 hover:ease-in-out"><path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path><path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
                `
            } else if (audio.volume < 0.5) {
                volumeBtn.innerHTML = `
                <svg role="presentation" height="16" width="16" aria-label="Âm lượng thấp" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0  fill-white opacity-80 hover:opacity-100 hover:duration-300 hover:ease-in-out"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path></svg>
                `
            } else if (audio.volume <= 1) {
                volumeBtn.innerHTML = `
                <svg role="presentation" height="16" width="16" aria-label="Âm lượng cao" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0  fill-white opacity-80 hover:opacity-100 hover:duration-300 hover:ease-in-out"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>
                `
            }
        }, 1000)
    }
}

app.start();
