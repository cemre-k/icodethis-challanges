const songs = [
    {picture : "https://i.ytimg.com/vi/tzSyKloZLqg/hqdefault.jpg" ,name:"Cambaz" , artist:"Mor ve Ötesi", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2732d04bb9ce86366eeb01c6c32" ,name:"Ceux qui rêvent" , artist:"Pomme", count:"1.233.233"},
    {picture : "https://productimages.hepsiburada.net/s/19/375-375/9861281939506.jpg" ,name:"Acının İlacı" , artist:"Adamlar", count:"1.233.233"},
    {picture : "https://images.genius.com/746375b7f782b33ee41535dfbbcee200.500x500x1.jpg" ,name:"Formidable" , artist:"Stromae", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2738c0559b991acf898adfede08" ,name:"Her Şeyi Yak" , artist:"Duman", count:"1.233.233"},
    {picture : "https://i.scdn.co/image/ab67616d0000b2737a3b9ad74b9ac0d0167f07a7" ,name:"Soleil soleil" , artist:"Pomme", count:"1.233.233"}
]

const template = document.querySelector("#songs li:first-child");
const songsList =document.getElementById("songs");


songs.forEach(function(song){
    const li =template.cloneNode(true);
    li.style.display="";
    const img = li.querySelector(".picture img");
    img.src = song.picture; 
    img.alt = song.name; 

    li.querySelector(".song-name").textContent = song.name;
    li.querySelector(".artist").textContent = song.artist;
    li.querySelector(".count").textContent = song.count;

    songsList.appendChild(li);
});