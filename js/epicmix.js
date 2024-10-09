
let content = document.querySelector('content')


let songslist=[
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
]
function showSong(){
    let cartona=''
    for(let i=1;i<songslist.length;i++){
        cartona+=`
            <div class="songlista ">
                 <ul class="lista row">
                 <li class="text-white fw-bolder col-6"><span>#${i}</span> ${songslist[i]}</li>
                 
             
                 </ul>
            </div>
               
           
        `
    }
    
    document.querySelector('.content').innerHTML=cartona
    document.querySelector('.content').classList.remove('d-none')
    document.querySelector('button').classList.add('d-none')
}