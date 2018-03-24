var songs = [ {
    id: 1,
    type: 'Rock',
    title: 'Bad Company',
    artist: "Five Finger Death Punch",
    album: 'War is the answer',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/27/War_is_the_Answer_Album_Art.JPG'
},
  {
    id: 2,
    type: 'Rock',
    title: 'The Devil In I',
    artist: 'SlipKnot',
    album: '.5: The Gray Chapter',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/36/5_The_Gray_Chapter_Artwork.jpg'
},
  {
    id: 3,
    type: 'Rap',
    title: 'Brainless',
    artist: 'Eminem',
    album:'Marshall Mathers LP 2',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/87/The_Marshall_Mathers_LP_2.png'
},
  {
    id: 4,
    type:'Rap',
    title: 'She (Ft. Frank Ocean)',
    artist: 'Tyler the Creator',
    album: 'Goblin',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Goblindeluxeedition.jpg'
},
  {
    id: 5 ,
    type: 'Country',
    title: 'Sold',
    artist: 'John Michael Montgomery',
    album: 'Sold (The Grundy County Auction Incident',
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/d7/JMM_-_Sold_single.png'
},
  {
    id: 6,
    type: 'Country',
    title: 'Farmers Daughter',
    artist: 'Rodney Atkins',
    album: 'Take A Back Road',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/86/TakeaBackRoadAlbum.jpg'
},
  {
    id: 7,
    type: 'Pop',
    title: 'It Was Always You',
    artist: 'Maroon 5',
    album: 'V',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png'
},
  {
    id: 8,
    type: 'Pop',
    title: 'All The Way',
    artist: 'Timeflies',
    album: 'After Hours',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Timeflies_afterhours.png'
},
  {
    id: 9,
    type: 'Espagnol',
    title: 'Alguien Soy Yo',
    artist: 'Enrique Iglesias',
    album: 'Insomniac',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/72/Enriqueinsomniac.jpg'
},
  {
    id: 10,
    type: 'Espagnol',
    title: 'Chantaje',
    artist: 'Shakira',
    album: 'El Dorado',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Shakira_El_Dorado_cover.png'
},
  {
    id: 11,
    type: 'Rock',
    title: 'Enemies',
    artist: 'Shinedown',
    album: 'Amaryllis',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/82/Shinedown-Amaryllis.jpg'
},
  {
    id: 12,
    type: 'Rock',
    title: 'I Stand Alone',
    artist: 'Godsmack',
    album: 'faceless',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a6/GodsmackIStandAloneCover.jpg'
},
  {
    id: 13, 
    type: 'Rap',
    title: 'II. Worldstar',
    artist: 'Childish Gambino',
    album: 'Because The Internet',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Childish-gambino-because-the-internet.gif'
},
  {
    id:14,
    type: 'Rap',
    title: 'Ill Mind of Hopsin 8',
    artist: 'Hopsin',
    album: 'Ill Mind of Hopsin 8',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Ill_Mind_of_Hopsin_8_cover.jpg'
},
 {
    id: 15,
    type: 'Country',
    title: 'Colder Weather',
    artist: 'Zac Brown Band',
    album: 'You Get What You Give',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/75/ZacBrownBandYGWYG.jpg'
},
 {
    id: 16,
    type: 'Country',
    title: 'Red Solo Cup',
    artist: 'Toby Keith',
    album: `Clancy's Tavern`,
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a6/ClancysTavern.jpg'
},
 {
    id: 17,
    type: 'Pop',
    title: 'Here Comes the Weekend',
    artist: 'Pink',
    album: 'The Truth About Love',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7e/The_Truth_About_Love.png'
},
 {
    id: 18,
    type: 'Pop',
    title: 'I Want It That Way',
    artist: 'Backstreet Boys',
    album: 'Millenium',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Millennium_cover.jpg'
},
 {
    id: 19,
    type: 'Espagnol',
    title: 'Andas en Mi Cabeza',
    artist: 'Chino y Nacho',
    album: 'Andas en Mi Cabeza',
    cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music69/v4/3f/aa/2b/3faa2b32-735a-25ff-2880-60aae955b7b0/UMG_cvrart_00602547826121_01_RGB72_1800x1800_16UMGIM07381.jpg/1200x630bb.jpg'
},
 {
    id: 20,
    type: 'Espagnol',
    title: 'Mi Gente',
    artist: 'J Balvin',
    album: 'Daddy K- The Mix 11',
    cover: 'http://rapstream.net/uploads/posts/2017-11/1511755173_daddy-k-the-mix-11-cd.jpg'
}
]
let id  = 21



module.exports = {
create: (req, res) => {
   const { type, title, artist, album, cover } = req.body
    songs.push({id,type,title,artist,album,cover});
    id ++
    console.log(songs[21])
    res.status(200).send(songs)
},

read: (req, res) => {console.log(req.params)
  if(req.params.genre != 'All'){
    
  
 let filteredSongs =songs.filter((el) => {
   if(el.type === req.params.genre) {
     return true
   }
   })
   res.status(200).send(filteredSongs)
  }else {res.status(200).send(songs)}

},
update: (req, res) => {
    console.log(req.body)
    
    const updateSong = req.params.id
    const songIndex = songs.findIndex(song => song.id == updateSong)
    songs[songIndex] = req.body
    
    
res.status(200).send(songs)
},
delete: (req, res) => {
const deleteSong = req.params.id;
console.log(deleteSong)
const songIndex = songs.findIndex (song => song.id == deleteSong)
console.log(songIndex)
 songs.splice(songIndex, 1)
res.status(200).send(songs)


}
}






















