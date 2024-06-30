const renderTemplate = () => {
  try {
    const info = eval(queryParamZodiacSign);
    let template = `
        <section class="content">

            <div class="cards-div">
                <h2>${info.Zodiac} : Famous Personalities</h2>
                <div class="card-flex container-small">
                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.one.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.one.serial_num}.jpg" alt="${info.People.one.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.one.profession}</span>
                            <p>${info.People.one.born}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.two.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.two.serial_num}.jpg" alt="${info.People.two.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.two.profession}</span>
                            <p>${info.People.two.born}</p>
                        </div>
                    </div> 

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.three.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.three.serial_num}.jpg" alt="${info.People.three.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.three.profession}</span>
                            <p>${info.People.three.born}</p>
                        </div>
                    </div>
                </div>

                <div class="card-flex container-small">
                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.four.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.four.serial_num}.jpg" alt="${info.People.four.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.four.profession}</span>
                            <p>${info.People.four.born}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.five.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.five.serial_num}.jpg" alt="${info.People.five.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.five.profession}</span>
                            <p>${info.People.five.born}</p>
                        </div>
                    </div> 

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.six.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.six.serial_num}.jpg" alt="${info.People.six.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.six.profession}</span>
                            <p>${info.People.six.born}</p>
                        </div>
                    </div>

                </div>

                <div class="card-flex container-small">
                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.seven.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.seven.serial_num}.jpg" alt="${info.People.seven.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.seven.profession}</span>
                            <p>${info.People.seven.born}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.eight.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.eight.serial_num}.jpg" alt="${info.People.eight.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.eight.profession}</span>
                            <p>${info.People.eight.born}</p>
                        </div>
                    </div> 

                    <div class="card">
                        <div class="card-header">
                            <span>${info.People.nine.name}</span>
                        </div>
                        <div class="card-content">
                            <img src="/assets/img/people/${info.Sign}/img-${info.People.nine.serial_num}.jpg" alt="${info.People.nine.serial_num}"
                                style="max-width: 125px; max-height: 125px; border-radius: 50%;" class="card-image">
                        </div>
                        <div class="card-footer">
                            <span>${info.People.nine.profession}</span>
                            <p>${info.People.nine.born}</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        `;

    // changing css variables as per zodiac sign element
    
    const r = document.querySelector(":root");

    if (info.Element === "Air") {
        r.style.setProperty("--theme-color-1", "hsl(57, 43%, 31%)");
    } else if (info.Element === "Water") {
        r.style.setProperty("--theme-color-1", "hsl(200, 43%, 31%)");
    } else if (info.Element === "Fire") {
        r.style.setProperty("--theme-color-1", "hsl(0, 43%, 31%)");
    } else if (info.Element === "Earth") {
        r.style.setProperty("--theme-color-1", "hsl(120, 43%, 31%)");
    }

    const main = document.querySelector("main");
    main.innerHTML = template;
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
    });

    goHome.addEventListener("click", () => {
      window.location.replace("/");
    });

    console.log(err.message, 2);
  }
};

renderTemplate();
