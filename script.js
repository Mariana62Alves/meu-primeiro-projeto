function entrar() {
    document.querySelector(".inicio").innerHTML = `
        <div class="estrelas">✦ ✧ ✦</div>

        <p class="dedicatoria">Para você, Mari</p>

        <h1>Eu queria te dizer uma coisa...</h1>

        <div class="carta">
            <p>
                Talvez eu não consiga colocar em palavras
                tudo aquilo que sinto por você.
            </p>

            <p>
                Mas existe uma coisa que eu nunca quero
                que você esqueça:
            </p>

            <strong>Você é muito importante para mim. ❤️</strong>
        </div>

        <button onclick="continuar()">CONTINUAR ✦</button>
    `;
}

function continuar() {
    document.querySelector(".inicio").innerHTML = `
        <div class="estrelas">✦ ✧ ✦</div>

        <p class="dedicatoria">Nosso pequeno universo</p>

        <h1>Algumas coisas<br>que quero que você lembre</h1>

        <p class="subtitulo">
            Ainda temos muito para construir,
            descobrir e viver.
        </p>

        <p class="mensagem">
            Eu te amo pra sempre! ❤️
        </p>
    `;
}