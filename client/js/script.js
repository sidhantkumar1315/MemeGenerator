
const memeForm  = document.getElementById("meme-form");
memeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const topText = document.getElementById("topText").value.trim();
    const bottomText = document.getElementById("bottomText").value.trim()
    const template = document.getElementById("template").value
    const displayDiv = document.getElementById("displayMeme")

    try{
        const res = await fetch(`/api/meme?template=${encodeURIComponent(template)}&top=${encodeURIComponent(topText)}&bottom=${encodeURIComponent(bottomText)}`)
        const data = await res.json()

        if(res.ok && data.url){
            displayDiv.innerHTML = ""
            const imgSrc = document.createElement("img")
            imgSrc.src = data.url
            imgSrc.id = "memeImg"
            imgSrc.alt = "Meme Image"
            displayDiv.appendChild(imgSrc)
        }
    }
    catch(err){
        console.error("Error: "+ err)
    }
})



