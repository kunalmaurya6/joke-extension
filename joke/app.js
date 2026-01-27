fetch("https://icanhazdadjoke.com/slack")
.then(data=>data.json())
.then(joke=>{
    const jokeElement=document.getElementById("jokeElement");
    jokeElement.innerText=joke.attachments[0].text;
})