const renderTemplate = () => {
    try {
        const info = eval(queryParamZodiacSign);
        let template = `

    <h3 class="username-subheading"><span id="user-name">${queryParamUserName}</span>, Your zodiac sign is </h3>

     <h2 class="sign">${info.Zodiac}</h2>

        <div class="hero">

            <div class="info-div">
                <p><span class="sub-heading">Element :</span> ${info.Element}</p>
                <p><span class="sub-heading">Color :</span> ${info.Color}</p>
                <p><span class="sub-heading">Quality :</span> ${info.Quality}</p>
                <!-- <p><span class="sub-heading">Key-phrase :</span> "I will"</p> -->
                <p><span class="sub-heading">Day :</span> ${info.Day}</p>
                <p><span class="sub-heading">Ruler :</span> ${info.Ruler}</p>
                <!-- <p><span class="sub-heading">Symbol :</span> The Lion</p> -->
                <!-- <p><span class="sub-heading">Ruling House :</span> Fifth House of Romance and Self-Expression</p> -->
                <p><span class="sub-heading">Greatest Compatibility :</span> ${info.GreatestCompatibility}</p>
                <p><span class="sub-heading">Lucky Numbers :</span> ${info.LuckyNumbers}</p>
                <p><span class="sub-heading">Dates :</span> ${info.Dates}</p>
            </div>
            <div class="img-div">
                <img id="hero-image" src="/assets/img/icons-2/${info.Sign}.png" alt="${info.Sign}" style="max-width: 400px;">
            </div>
        </div>

        <div class="content">

            <div class="traits-div">

                <div class="image-div">
                    <img class="image" src="/assets/img/icons-others/${info.Sign}.png" alt="${info.Sign}"
                        style="max-width: 200px;">
                </div>

                <h3>${info.Zodiac} Traits :</h3>

                <p><span class="sub-heading">Strengths :</span> ${info.Traits.Strengths}</p>
                <p><span class="sub-heading">Weaknesses :</span> ${info.Traits.Weaknesses}</p>
                <p><span class="sub-heading">${info.Zodiac} likes :</span> ${info.Traits.likes}</p>
                <p><span class="sub-heading">${info.Zodiac} dislikes :</span> ${info.Traits.dislikes}</p>
            </div>

            <div class="description-div">

                <div class="image-div">
                    <img class="image" src="/assets/img/icons-0/${info.Sign}.png" alt="${info.Sign}" style="max-width: 200px;">
                </div>

                <h3>Brief description :</h3>

                <p>${info.Brief}</p>
            </div>

            <div class="attrct-div">

                <div class="image-div">
                    <img class="image" src="/assets/img/icons-3/${info.Sign}.png" alt="${info.Sign}" style="max-width: 200px;">
                </div>

                <h3>How To Attract The ${info.Zodiac} Man :</h3>

                <p>${info.AttractMan}</p>

                <h3>How To Attract The ${info.Zodiac} Woman :</span></h3>
                <p>${info.AttractWoman}</p>
            </div>

            <div class="myth-div">

                <div class="image-div">
                    <img class="image" src="/assets/img/icons-4/${info.Sign}.png" alt="${info.Sign}" style="max-width: 200px;">
                </div>

                <h3>The Myth Of ${info.Zodiac} :</h3>

                <p>${info.Myth.one}</p>
                <p>${info.Myth.two}</p>

            </div>
        </div>

        <div class="cards-div">
            <h2>Most Compatible Signs :</h2>
            <div class="card-flex container-small">
                <div class="card" data-sign="${info.CompatibleSigns.one.Sign}">
                    <div class="card-header">
                        <span>${info.CompatibleSigns.one.Zodiac}</span>
                    </div>
                    <div class="card-content">
                        <img src="/assets/img/card-icons/${info.CompatibleSigns.one.Sign}.png" alt="1" style="max-width:  125px; max-height: 125px" class="card-image">
                    </div>
                    <div class="card-footer">
                        <span>Dates :</span></span>
                        <p>${info.CompatibleSigns.one.Dates}</p>
                    </div>
                </div>
                <div class="card" data-sign="${info.CompatibleSigns.two.Sign}">
                    <div class="card-header">
                        <span>${info.CompatibleSigns.two.Zodiac}</span>
                    </div>
                    <div class="card-content">
                        <img src="/assets/img/card-icons/${info.CompatibleSigns.two.Sign}.png" alt="1" style="max-width:  125px; max-height: 125px" class="card-image">
                    </div>
                    <div class="card-footer">
                        <span>Dates :</span></span>
                        <p>${info.CompatibleSigns.two.Dates}</p>
                    </div>
                </div>
                <div class="card" data-sign="${info.CompatibleSigns.three.Sign}">
                    <div class="card-header">
                        <span>${info.CompatibleSigns.three.Zodiac}</span>
                    </div>
                    <div class="card-content">
                        <img src="/assets/img/card-icons/${info.CompatibleSigns.three.Sign}.png" alt="1" style="max-width:  125px; max-height: 125px" class="card-image">
                    </div>
                    <div class="card-footer">
                        <span>Dates :</span></span>
                        <p>${info.CompatibleSigns.three.Dates}</p>
                    </div>
                </div>
            </div>
        </div>
`;

        // changing css variables as per zodiac sign element
        const r = document.querySelector(':root');

        // const rs = getComputedStyle(r);
        // const themeColor1 = rs.getPropertyValue('--theme-color-1');
        // const themeColor4 = rs.getPropertyValue('--theme-color-4');

        if (info.Element === "Air") {
            r.style.setProperty('--theme-color-1', 'hsl(57, 44%, 42%)');
            r.style.setProperty('--theme-color-4', 'hsl(57, 100%, 42%)');
        } else if (info.Element === "Water") {
            r.style.setProperty('--theme-color-1', 'hsl(200, 70%, 47%)');
            r.style.setProperty('--theme-color-4', 'hsl(200, 100%, 47%)');
        } else if (info.Element === "Fire") {
            r.style.setProperty('--theme-color-1', 'hsl(0, 75%, 66%)');
            r.style.setProperty('--theme-color-4', 'hsl(0, 100%, 74%)');
        } else if (info.Element === "Earth") {
            r.style.setProperty('--theme-color-1', 'hsl(120, 40%, 52%)');
            r.style.setProperty('--theme-color-4', 'hsl(120, 70%, 52%)');
        }

        const main = document.querySelector("main");
        main.innerHTML = template;


        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            card.addEventListener("click", () => {
                const zodiacSign = card.getAttribute("data-sign");

                window.location.href = `/signs/index.html?sign=${zodiacSign}`;
            })
        });

        const userNameSubHeading = document.querySelector(".username-subheading");

        if (queryParamUserName === null)
        {
            userNameSubHeading.style.display = "none";
        }

    } catch (err) {

        const fallBackTemplate = `
        <div class="error-div-wrapper">
            <div class="error-div">
                <h2>Loading Error!</h2>
                <p>Either the url query paramters are misspelt or this is a loading error.</p>

                <div class="btn-div">
                    <button id="reload">Reload</button>
                    <button id="go-home">Go Home</button>
                </div>
            </div>
        </div>
        `;

        const main = document.querySelector("main");
        main.innerHTML = fallBackTemplate;

        const reload = document.querySelector("#reload");
        const goHome = document.querySelector("#go-home");

        reload.addEventListener("click", () => {
            window.location.href = window.location;
            console.log(window.location)
        });

        goHome.addEventListener("click", () => {
            window.location.replace("/");
        });

        console.log(err.message, 2);
    }
}

renderTemplate();
