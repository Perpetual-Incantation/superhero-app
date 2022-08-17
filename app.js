const herobutton=document.getElementById('superhero')
const heroimg=document.getElementById('hero')
const baseurl='https://www.superheroapi.com/api.php/1458941974537952'
const getsuperhero = (id,name) =>{
    fetch(`${baseurl}/${id}`)
    .then(response => response.json())
    .then(json=>
        {
        console.log(json.powerstats)
        showheroinfo(json)
     })
}
const getemoji={
    intelligence:'🧠',
    speed:'🏃‍♂️',
    durability:'💪',
    strength:'🏋️‍♂️',
    power:'🌞',
    combat:'⚔️',

}

const showheroinfo=(character)=>{
    const name=`<h2>${character.name}</h2>`   
    const img =`<img  src="${character.image.url}" height=400 width=300/>`
    
    const stat = Object.keys(character.powerstats).map( stats=>{
      return `<p>${getemoji[stats]}${stats.toLocaleUpperCase()}:${character.powerstats[stats]}</p>`
     }).join('')
     //console.log(stat.join(''))
     heroimg.innerHTML=`${name}${img}${stat}`
}
const randomhero=()=>{
    const ch=731
    return Math.floor(Math.random()*ch)+1

}
const randombutton=document.getElementById('randomhero')
const input=document.getElementById('searchinput')
const getrandhero = (names)=>{
    fetch(`${baseurl}/search/${names}`)
    .then(response => response.json())
    .then(json=>
        {
        const a=json.results[0]
        showheroinfo(a)     
     })

}
randombutton.onclick=()=>getrandhero(input.value)
herobutton.onclick=()=>getsuperhero(randomhero())
