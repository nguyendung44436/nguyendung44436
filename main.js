window.onload = () => {
    const song_img_el = document.querySelector('#song-image');
    const song_title_el = document.querySelector('#song-title');
    const song_artist_el = document.querySelector('#song-artist');
    const song_next_up_el = document.querySelector('#song-next-up');
    const artist_next_up_el = document.querySelector('#artist-next-up');

    const play_btn = document.querySelector('#play-btn');
    const play_btn_icon = document.querySelector('#play-btn .play-icon');
    const prev_btn = document.querySelector('#prev-btn');
    const next_btn = document.querySelector('#next-btn');

    const audio_player = document.querySelector('#music-player');

    let current_song_index;
    let next_song_index;

    let songs = [

    {
       title: 'Bến sông buồn',
        artist: 'Đình Văn',
        song_path: 'https://ipfs.io/ipfs/bafybeiawmrx37kiufldw5sgy5gdsz5wdh3m6u2qqyzp23kzmd5yvygbqaa',
        img_path: 'artists/artist1.jpg',
    },
    {
        title: 'Đôi ngả sông quê',
        artist: 'Phi Long',
        song_path: 'music/song3.mp3',
        img_path: 'artists/artist2.jpg',
    },
    {
        title: 'Đồng cảm sẻ chia',
        artist: 'Phi Long',
        song_path: 'music/song4.mp3',
        img_path: 'artists/artist3.jpg',
    },
    {
        title: 'Bay vào tương lai',
        artist: 'Hoàng Nghiệp',
        song_path: 'music/song1.mp3',
        img_path: 'artists/artist4.jpg',
    },
    {
        title: 'Gặp em trên bến Ninh Kiều',
        artist: 'Tuấn Kiệt-Thuận Giang',
        song_path: 'music/song5.mp3',
        img_path: 'artists/artist5.jpg',

    },
    {
        title: 'Hát cho quê hương',
        artist: 'Mê Linh',
        song_path: 'music/song6.mp3',
        img_path: 'artists/artist6.jpg',
    },
    {
        title: 'Hoa khôi Đồng bằng',
        artist: 'Trần Thuận',
        song_path: 'music/song7.mp3',
        img_path: 'artists/artist7.jpg',
    },
    {
        title: 'Khúc giao thừa',
        artist: 'Trần Thuận-Hương Huỳnh',
        song_path: 'music/song8.mp3',
        img_path: 'artists/artist4.jpg',
    },
    {
        title: 'Một mình dưới mưa',
        artist: 'Bích Ngọc',
        song_path: 'music/song9.mp3',
        img_path: 'artists/artist9.jpg',
    },
    {
        title: 'Mùa đi',
        artist: 'Tấn Lợi',
        song_path: 'music/song10.mp3',
        img_path: 'artists/artist8.jpg',
    },
    {
        title: 'Mùa xuân trong em',
        artist: 'Tuấn Kiệt',
        song_path: 'music/song11.mp3',
        img_path: 'artists/artist10.jpg',
    },
    {
        title: 'Nghe tiếng Bác',
        artist: 'Anh Tuệ',
        song_path: 'music/song12.mp3',
        img_path: 'artists/artist11.jpg',
    },

    {
        title: 'Nhịp cầu yêu thương',
        artist: 'Long Min, Bích Ngọc',
        song_path: 'music/song13.mp3',
        img_path: 'artists/artist12.jpg',
    },
    {
        title: 'Nụ hôn mùa hè',
        artist: 'Nhóm Cát trắng',
        song_path: 'music/song14.mp3',
        img_path: 'artists/artist13.jpg',
    },
    {
        title: 'Nước mắt',
        artist: 'Ngọc Thái',
        song_path: 'music/song15.mp3',
        img_path: 'artists/artist14.jpg',
    },
    {
        title: 'Cheap Thrills ft. Sean Paul',
        artist: 'Sia Furler',
        song_path: 'music/song16.mp3',
        img_path: 'artists/artist15.jpg',
    },
    {
         title: 'Cheap Thrills ft. Sean Paul',
        artist: 'Sia Furler',
        song_path: 'music/song16.mp3',
        img_path: 'artists/artist15.jpg',
    },
    {
        title: 'Thăng Long',
        artist: 'Phi Long',
        song_path: 'music/song17.mp3',
        img_path: 'artists/artist16.jpg',
    },

    {
        title: 'Thiên thần trên phố ',
        artist: 'Dương Hà',
        song_path: 'music/song18.mp3',
        img_path: 'artists/artist16.jpg',
    },
    {
        title: 'Thới Lai chiều về',
        artist: 'Hương Giang',
        song_path: 'music/song19.mp3',
        img_path: 'artists/artist17.jpg',
    },
    {
        title: 'Thương nhớ tiếng mưa rơi',
        artist: 'Hương Giang',
        song_path: 'music/song20.mp3',
        img_path: 'artists/artist18.jpg',
    },
    {
         title: 'Ước có một người',
        artist: 'Ngọc Thái',
        song_path: 'music/song21.mp3',
        img_path: 'artists/artist2.jpg',
    },
    {
        title: 'Về với mẹ cha',
        artist: 'Thái Duy',
        song_path: 'music/song22.mp3',
        img_path: 'artists/artist19.jpg',
    },
    {
        title: 'Vòng khăn tang',
        artist: 'Phi Long',
        song_path: 'music/song23.mp3',
        img_path: 'artists/artist20.jpg',
    },
    {
        title: 'Thư miền Tây',
        artist: 'Nhật Minh',
        song_path: 'music/song24.mp3',
        img_path: 'artists/artist13.jpg',
    },
    {
        title: 'Bay vào tương lai',
        artist: 'Nguyễn Dũng',
        song_path: 'music/song25.mp3',
        img_path: 'artists/artist21.jpg',
    },
    {
        title: 'Cần Thơ, Cần Thơ',
        artist: 'Nguyễn Dũng',
        song_path: 'music/song26.mp3',
        img_path: 'artists/artist13.jpg',
    },

    {
        title: 'Cần Thơ-Cần Thơ',
        artist: 'Greentown',
        song_path: 'music/song27.mp3',
        img_path: 'artists/artist22.jpg',
    },
    {
        title: 'Khúc giao thừa',
        artist: 'Nhóm Cỏ May',
        song_path: 'music/song28.mp3',
        img_path: 'artists/artist23.jpg',
    },


    {
        title: 'Khúc giao thừa',
        artist: 'Nhóm F5',
        song_path: 'music/song29.mp3',
        img_path: 'artists/artist24.jpg',
    },

    {
        title: 'Hãy hát lên bài va đất nước',
        artist: 'Hoàng Nghiệp',
        song_path: 'music/song30.mp3',
        img_path: 'artists/artist17.jpg',
    },

    ];

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function TogglePlaySong() {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play')
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play')
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "');";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title;
        artist_next_up_el.innerText = "by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }
}
