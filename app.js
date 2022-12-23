const $= document.querySelector.bind(document)
const $$= document.querySelector.bind(document)
const PLAYER_STORAGE_KEY = 'F8_PLAYER'
    const player = $('.player')
    const heading = $('header h2')
    const cdThumb = $('.cd-thumb')
    const audio = $('#audio')
    const cd = $('.cd')
    const playBtn = $('.btn-toggle-play')
    const progress = $('#progress')
    const next = $('.btn-next')
    const pre = $('.btn-prev')
    const ramdom = $('.btn-random')
    const repeat = $('.btn-repeat')
    const playlist = $('.playlist')
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRamdom: false,
  isRepeat: false,
  songs: [
    {
      name: "Đi đi đi",
      singer: "Raftaar x Fortnite",
      path: "https://x2convert.com/vi/Thankyou?token=U2FsdGVkX18KpiQNUwuSSfFReYa%2flJk0JnmV4V40scQGAsaHAnIHuFSZfpzAYjjXsuLIZ0VDHG3nxKYU3d%2fyTxUB1whxLSM4UtYpIXLF5B1Gy6mkLyP%2fBHEtFUw5%2fXmQRGURsYibmhdGIdqzBCpSp1V%2b%2fOUopMxscE3yIyRbNWvn8AVyPtIu8Xi%2fDthaw%2f9ZyEf6TTygktIzqRy4eZmG8%2ffzQu%2fu3Y2iaCPsMcMUTXo%3d&s=youtube&id=&h=844019832524919590",
      image: "./assets/img/IMG_1629367494299_1629367562993.jpg"
    },
    {
      name: "Nhìn về phía em",
      singer: "Minh Vương",
      path: "https://vnso-zn-23-tf-mp3-s1-m-zmp3.zmdcdn.me/61666e53a7124e4c1703/4879002215398700652?authen=exp=1660013865~acl=/61666e53a7124e4c1703/*~hmac=3983db25bd38407061e82e6974d3dcc3&fs=MTY1OTg0MTA2NTk0NHx3ZWJWNHwxMDMdUngMTk5LjMzLjExMg://vnso-zn-10-tf-mp3-320s1-zmp3.zmdcdn.me/72979dff68be81e0d8af/1956815467550930921?authen=exp=1659776826~acl=/72979dff68be81e0d8af/*~hmac=55eacc418ff760206e60ebf39e6126e1&fs=MTY1OTYwNDAyN",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Vì mẹ em bắt chia tay",
      singer: "Miu Lê",
      path:
        "https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/4b4738ffc1be28e071af/7827520592060731168?authen=exp=1660015074~acl=/4b4738ffc1be28e071af/*~hmac=a2d084bb140fac37a970dd8eca76e11e&fs=MTY1OTg0MjI3NDmUsIC4NXx3ZWJWNnwxMDg0OTI0NzmUsIC2fDE0LjE4OS45OC4xMDU://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
      image: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
      name: "Có hẹn với thanh xuân",
      singer: "Dư Tiến Dũng",
      path: "https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/ae269f6a692b8075d93a/3456377555455847883?authen=exp=1660015976~acl=/ae269f6a692b8075d93a/*~hmac=558a343dd6c45e430de602e843edd9b0&fs=MTY1OTg0MzE3NjI4Nnx3ZWJWNnwwfDExOC42OS4xODIdUngMTU4https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/ae269f6a692b8075d93a/3456377555455847883?authen=exp=1660015976~acl=/ae269f6a692b8075d93a/*~hmac=558a343dd6c45e430de602e843edd9b0&fs=MTY1OTg0MzE3NjI4Nnx3ZWJWNnwwfDExOC42OS4xODIdUngMTU4://https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/ae269f6a692b8075d93a/3456377555455847883?authen=exp=1660015976~acl=/ae269f6a692b8075d93a/*~hmac=558a343dd6c45e430de602e843edd9b0&fs=MTY1OTg0MzE3NjI4Nnx3ZWJWNnwwfDExOC42OS4xODIdUngMTU4-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/ae269f6a692b8075d93a/3456377555455847883?authen=exp=1660015976~acl=/ae269f6a692b8075d93a/*~hmac=558a343dd6c45e430de602e843edd9b0&fs=MTY1OTg0MzE3NjI4Nnx3ZWJWNnwwfDExOC42OS4xODIdUngMTU4https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/31891073d832316c6823/1520110624706355998?authen=exp=1660015641~acl=/31891073d832316c6823/*~hmac=3ea1bd34e00b62e8f190391a7bcd57c6&fs=MTY1OTg0Mjg0MTQ4Mnx3ZWJWNnwwfDExMy4xNzIdUngNzEdUngMjUytps://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpghttps://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
      image:
        "https://mp3-320s1-zmp3.zmdcdn.me/ae269f6a692b8075d93a/3456377555455847883?authen=exp=1660015976~acl=/ae269f6a692b8075d93a/*~hmac=558a343dd6c45e430de602e843edd9b0&fs=MTY1OTg0MzE3NjI4Nnx3ZWJWNnwwfDExOC42OS4xODIdUngMTU4https://phohttps://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/dfc4b7ef63ae8af0d3bf/2928001139606773219?authen=exp=1660016256~acl=/dfc4b7ef63ae8af0d3bf/*~hmac=1356aea17a73b1feb3e678e2081ec83b&fs=MTY1OTg0MzQ1NjIyMXx3ZWJWNnwwfDEdUngNTQdUngOC43Mwto-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg"
    },
    {
      name: "Xin má rước dâu",
      singer: "Dũng dz",
      path: "https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/ed530459ad1844461d09/6199167314198173281?authen=exp=1660016345~acl=/ed530459ad1844461d09/*~hmac=2417d87df74939c3f0382ff75ac3df19&fs=MTY1OTg0MzU0NTkyNXx3ZWJWNnwwfDEdUngNTUdUngNTIdUngMzU://mp3-320s1-zmp3.zmdcdn.me/ed530459ad1844461d09/6199167314198173281?authen=exp=1660016345~acl=/ed530459ad1844461d09/*~hmac=2417d87df74939c3f0382ff75ac3df19&fs=MTY1OTg0MzU0NTkyNXx3ZWJWNnwwfDEdUngNTUdUngNTIdUngMzUttps://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
      name: "Đám cưới nha",
      singer: "DJ Mie",
      path:
        "https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/fe80177f4e3ea760fe2f/6252296707180606574?authen=exp=1660016939~acl=/fe80177f4e3ea760fe2f/*~hmac=08f9e86430eb8a7b5b672a15a458e5ce&fs=MTY1OTg0NDEzOTk3Nnx3ZWJWNnwyODg4OTU5OTV8MTmUsICxLjI1Mi4xODgdUngMjUyhttps://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpghttps://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
    },
    {
      name: "Chờ quá lâu",
      singer: "Raftaar x Harjas",
      path: "https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/6a1e0260e7210e7f5730/5364547728026564?authen=exp=1660017193~acl=/6a1e0260e7210e7f5730/*~hmac=fb9d74d080b6f7f555a847f24666f292&fs=MTY1OTg0NDM5Mzg4M3x3ZWJWNnwxMDQ4ODYyMDU0fDE0LjE5MS4xOTmUsICdUngMjk://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/fe80177f4e3ea760fe2f/6252296707180606574?authen=exp=1660016939~acl=/fe80177f4e3ea760fe2f/*~hmac=08f9e86430eb8a7b5b672a15a458e5ce&fs=MTY1OTg0NDEzOTk3Nnx3ZWJWNnwyODg4OTU5OTV8MTmUsICxLjI1Mi4xODgdUngMjUy://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/fe80177f4e3ea760fe2f/6252296707180606574?authen=exp=1660016939~acl=/fe80177f4e3ea760fe2f/*~hmac=08f9e86430eb8a7b5b672a15a458e5ce&fs=MTY1OTg0NDEzOTk3Nnx3ZWJWNnwyODg4OTU5OTV8MTmUsICxLjI1Mi4xODgdUngMjUy://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpghttps://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
      image:
        "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
    }
  ],
  render(){
    const htmls = this.songs.map((song, index )=>{
      return `
      <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index = ${index}>
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>`
    })
    playlist.innerHTML = htmls.join('')
  },
  defineProperties(){
    Object.defineProperty(this,'currentSong',{
      get: function(){
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvent(){
    const _this = this
    const cdWidth = cd.offsetWidth
   const cdThumbAnimate =  cdThumb.animate([ { transform:'rotate(360deg)'}],{duration: 10000, iterations: Infinity})
    document.onscroll =function(){
      const scrollTop = window.scrollY 
      const newCdWidth = cdWidth -scrollTop
      cd.style.width = newCdWidth >1 ?  newCdWidth +'px' : '0px'
      cd.style.opacity = newCdWidth /cdWidth
    }
    cdThumbAnimate.pause()
    playBtn.onclick = function(){
      if( _this.isPlaying){
        audio.pause()
      }else{
        audio.play()
      }
    }
    audio.onplay= function (){
      _this.isPlaying= true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }
    audio.onpause= function (){
      _this.isPlaying= false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }
    audio.ontimeupdate = function(){
      if(audio.duration){
        const ProgressPercent = Math.floor(audio.currentTime/audio.duration*100)
        progress.value =ProgressPercent
      }
    }
    progress.onchange = (e)=>{
     const seekTime = audio.duration  /100 *e.target.value
     audio.currentTime = seekTime
    }
    next.onclick = function(){
      if(_this.isRamdom){
        _this.playRamdom()

      }else{
        _this.nextSongs()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }
    pre.onclick = function(){
      if(_this.isRamdom){
        _this.playRamdom()
      }else{
        _this.preSongs()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()

    }
    ramdom.onclick = function(){
      _this.isRamdom = !_this.isRamdom
       ramdom.classList.toggle('active', _this.isRamdom )
    },
    repeat.onclick = function(){
      _this.isRepeat = !_this.isRepeat
      repeat.classList.toggle('active', _this.isRepeat)
    },
    audio.onended = function(){
      if(_this.isRepeat){
        audio.play()
      }else{
        next.onclick()
      }
    }
    playlist.onclick= function(e){
      const songNode = e.target.closest('.song:not(.active)')
      if( songNode || e.target.closest('.option')){
        if(songNode){
           _this.currentIndex = Number(songNode.getAttribute('data-index'))
           _this.loadCurrentSong()
           _this.render()
           audio.play()
        }
        //Option
        if(e.target.closest('.option')){}
      }
    }
  },
 scrollToActiveSong(){
  $('.song.active').scrollIntoView({
    behavior: 'smooth',
    block : 'nearest'
  })
 },
  loadCurrentSong(){
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
    audio.src = this.currentSong.path
  },
  nextSongs: function(){
    this.currentIndex++
    if(this.currentIndex >=this.songs.length){
      this.currentIndex =0
    }
    this.loadCurrentSong()
  },
  preSongs :function(){
    this.currentIndex--
    if(this.currentIndex <0){
      this.currentIndex = this.songs.length -1
    }
    this.loadCurrentSong()
  },
  playRamdom: function(){
    let newIndex
    do{
      newIndex = Math.floor(Math.random()*this.songs.length)
    }while(newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  start(){
    this.handleEvent()
    this.render()
    this.defineProperties();
    this.loadCurrentSong();
  }
}
app.start()