fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(joke => {
        const jokeElement = document.getElementById("jokeElement");
        const bt = document.getElementsByTagName("h1");
        const btn = document.createElement("button");
        btn.className = `btn`;
        btn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i>`
        btn.addEventListener("click", () => location.reload());
        bt[0].appendChild(btn);
        jokeElement.innerHTML = joke.attachments[0].text;
    }).catch(e => console.log(e.message));