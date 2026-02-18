document.addEventListener("DOMContentLoaded", () => {
    const spinBtn = document.getElementById("spinbutton");
    const rouletteImg = document.getElementById("roulette-img");
    const rouletteText = document.getElementById("roulette-text");

    if (!spinBtn || !rouletteImg || !rouletteText) return;
    
    const specialties = [
    {
        name: "Jet d’Eau",
        img: "/Users/elabrtuu/CSE2004/website1/jetdeau2.jpg"
    },
    {
        name: "Floral Clock",
        img: "/Users/elabrtuu/CSE2004/website1/flowerclock.jpeg"
    },
    {
        name: "Swiss Watches",
        img: "/Users/elabrtuu/CSE2004/website1/watches.jpg"
    },
    {
        name: "Lake Geneva",
        img: "/Users/elabrtuu/CSE2004/website1/lakegeneva2.jpeg"
    },
    {
        name: "CERN",
        img: "/Users/elabrtuu/CSE2004/website1/cern.jpg"
    }
];
    spinBtn.addEventListener("click", () => {
    const pick = specialties[Math.floor(Math.random() * specialties.length)];

    rouletteImg.src = pick.img;
    rouletteImg.style.display = "block";
    rouletteText.textContent = pick.name;

    if (typeof popConfetti === "function") popConfetti(18);
  });
});


spinbutton.addEventListener("click", () => {
    const random = specialties[Math.floor(Math.random() * specialties.length)];

    rouletteImg.src = random.img;
    rouletteImg.style.display = "block";
    rouletteText.textContent = random.name;
});



document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("factTrack");
    const prev = document.getElementById("prevFact");
    const next = document.getElementById("nextFact");

    // if any are missing, do nothing
    if (!track || !prev || !next) return;

    // make array of children = cards
    const cards = Array.from(track.children);
    let index = 0;

    function cardWidth() {
        return cards[0].getBoundingClientRect().width;
    }

    // switches from one carousel to the other
    function updateCarousel() {
        track.style.transform = `translateX(${-index * cardWidth()}px)`;
    }

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    prev.addEventListener("click", () => {
        index = mod(index - 1, cards.length);
        updateCarousel();
    });

    next.addEventListener("click", () => {
        index = mod(index + 1, cards.length);
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
});

const slider = document.getElementById("like");
const submitBtn = document.getElementById("submit");
const commentInput = document.getElementById("comment");
const submitMsg = document.getElementById("submitMsg");

function popConfetti(count = 18) {
    for (let i = 0; i < count; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = `hsl(${Math.random() * 360}, 90%, 60%)`;
        c.style.animationDuration = (500 + Math.random() * 500) + "ms";
        document.body.appendChild(c);

        setTimeout(() => c.remove(), 1000);
    }
}

slider.addEventListener("input", () => {
    document.body.classList.remove("disco");
    void document.body.offsetWidth;
    document.body.classList.add("disco");

    popConfetti(10);
});

submitBtn.addEventListener("click", () => {
    submitMsg.textContent = "Submitted!";
    submitMsg.classList.add("show");

    commentInput.value = "";

    setTimeout(() => submitMsg.classList.remove("show"), 1500);
});




// note: i have had experience with js before coming into this class