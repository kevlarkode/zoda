// option for disabling animation in mobile

const isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);

const diableAnimateForMobile = () => {
    if (isMobile) {
        const circleContainer = document.querySelector('.circle-container');
        const smallCircles = document.querySelectorAll('.small-circle');

        circleContainer.classList.toggle('rotation');


        smallCircles.forEach(elem => {
            elem.style.animation = 'none';
        });
    }
}

diableAnimateForMobile();

// month selection
const monthSelected = document.querySelector(".month-selected");
const monthSelectDiv = document.querySelector(".month-select-div");


const selectedMonth = document.querySelector("#month");
const monthOptions = document.querySelectorAll(".month-option");
const monthDropDown = document.querySelector(".select-month-drop-down");


monthSelected.addEventListener("click", () => {
    monthSelectDiv.classList.toggle("active");
    monthDropDown.classList.toggle("active");
});

monthOptions.forEach(
    elem => elem.addEventListener("click", () => {
        selectedMonth.innerText = elem.dataset.month;
        selectedMonth.dataset.month = elem.dataset.month;
        monthSelectDiv.classList.toggle("active");
    })
);


// date selection
const dateSelected = document.querySelector(".date-selected");
const dateSelectDiv = document.querySelector(".date-select-div");


const selectedDate = document.querySelector("#date");
const dateOptions = document.querySelectorAll(".date-option");
const dateDropDown = document.querySelector(".select-date-drop-down");


dateSelected.addEventListener("click", () => {
    dateSelectDiv.classList.toggle("active");
    dateDropDown.classList.toggle("active");
});

dateOptions.forEach(
    elem => elem.addEventListener("click", () => {
        selectedDate.innerText = elem.dataset.date;
        selectedDate.dataset.date = elem.dataset.date;
        dateSelectDiv.classList.toggle("active");
    })
);

// Form submit event

const userName = document.querySelector("#name");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
    const name = userName.value;
    const date = parseInt(selectedDate.dataset.date, 10);
    const month = selectedMonth.dataset.month;

    handleSubmitEvent(name || null, date || null, month || null);
});

const validMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthWith31Days = ["January", "March", "May", "July", "August", "October", "December"];

const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const getZodiac = (date, month) => {
    if ((date >= 21 && month === validMonths[2]) || (date <= 19 && month === validMonths[3]))
        return zodiacSigns[0];
    else if ((date >= 20 && month === validMonths[3]) || (date <= 20 && month === validMonths[4]))
        return zodiacSigns[1];
    else if ((date >= 21 && month === validMonths[4]) || (date <= 20 && month === validMonths[5]))
        return zodiacSigns[2];
    else if ((date >= 21 && month === validMonths[5]) || (date <= 22 && month === validMonths[6]))
        return zodiacSigns[3];
    else if ((date >= 23 && month === validMonths[6]) || (date <= 22 && month === validMonths[7]))
        return zodiacSigns[4];
    else if ((date >= 23 && month === validMonths[7]) || (date <= 22 && month === validMonths[8]))
        return zodiacSigns[5];
    else if ((date >= 23 && month === validMonths[8]) || (date <= 22 && month === validMonths[9]))
        return zodiacSigns[6];
    else if ((date >= 23 && month === validMonths[9]) || (date <= 21 && month === validMonths[10]))
        return zodiacSigns[7];
    else if ((date >= 22 && month === validMonths[10]) || (date <= 21 && month === validMonths[11]))
        return zodiacSigns[8];
    else if ((date >= 21 && month === validMonths[11]) || (date <= 20 && month === validMonths[0]))
        return zodiacSigns[9];
    else if ((date >= 21 && month === validMonths[0]) || (date <= 18 && month === validMonths[1]))
        return zodiacSigns[10];
    else if ((date >= 19 && month === validMonths[1]) || (date <= 20 && month === validMonths[2]))
        return zodiacSigns[11];
    else
        return "";
};

const handleSubmitEvent = (name, date, month) => {

    if (name === null && date === null && month === null) {
        // alert("You need to enter your Name and select a Date and Month!");
        Swal.fire({
            icon: 'warning',
            title: 'Enter Name and Birthday!',
            text: 'You need to enter your Name and select a Date and Month.',
        })
        return;
    }
    else if (name === null) {
        // alert("You need to enter your Name!");
        Swal.fire({
            icon: 'warning',
            title: 'Enter Name!',
            text: 'You need to enter your Name.',
        })
        return;
    }
    else if (date === null) {
        // alert("You need to select a Date!");
        Swal.fire({
            icon: 'warning',
            title: 'Enter Date!',
            text: 'You need to select a Date.',
        })
        return;
    }
    else if (month === null) {
        // alert("You need to select a Month!");
        Swal.fire({
            icon: 'warning',
            title: 'Enter Month!',
            text: 'You need to select a Month.',
        })
        return;
    }

    const isValidDate = (1 && date <= 31);
    const isValidMonth = (validMonths.includes(month));

    const isNotInvalidDateMonth = !((date == 31 && !monthWith31Days.includes(month)) || (date == 30 && month === validMonths[1]));

    let sign = "";

    if (isValidDate && isValidMonth && isNotInvalidDateMonth) {
        sign = getZodiac(date, month);
    }

    if (sign.length > 0) {
        sign = sign.toLowerCase();

        userName.value = "";

        window.location.href = `/signs/index.html?sign=${sign}&user=${name}`;
    }
    else {
        // alert("Enter a valid Date!");
        Swal.fire({
            icon: 'warning',
            title: 'Enter a valid Date!',
            text: 'You need to enter a valid Date.',
        })
    }
};
