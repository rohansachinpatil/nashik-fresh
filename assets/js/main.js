const grapes = [
    {
        name: "Sharad Seedless",
        desc: "Exquisite black seedless grapes from the heart of Nashik. Naturally sweet, crunchy, and freshly hand-picked.",
        pricePerCrate: 159,
        offerPrice: "₹299 / 2 Crate",
        img: "assets/images/sharad-seedless.png",
        color1: "#4a148c",
        color2: "#7b1fa2",
        inStock: true
    },
    {
        name: "Thompson Seedless",
        desc: "Classic green grapes, sweet and thin-skinned. Perfect for snacking and a household favorite.",
        pricePerCrate: 139,
        offerPrice: "₹249 / 2 Crate",
        img: "assets/images/thompson-seedless.png",
        color1: "#43c6ac",
        color2: "#191654",
        inStock: true
    },
    {
        name: "Crimson Seedless",
        desc: "Sweet red seedless grapes with a late harvest. Crisp, firm, and exceptionally sweet with a rich flavor.",
        pricePerCrate: 179,
        offerPrice: "₹329 / 2 Crate",
        img: "assets/images/crimson-seedless.png",
        color1: "#cc2b5e",
        color2: "#753a88",
        inStock: true
    },
    {
        name: "Manik Chaman",
        desc: "Distinctive long green grapes with a unique elongated shape. Sweet and mild flavor, traditional variety.",
        pricePerCrate: 189,
        offerPrice: "₹349 / 2 Crate",
        img: "assets/images/manik-chaman.png",
        color1: "#F2994A",
        color2: "#F2C94C",
        inStock: true
    },
    {
        name: "Sonaka",
        desc: "Premium long green grapes with superior sweetness. A refined version of the traditional long green grape.",
        pricePerCrate: 199,
        offerPrice: "₹359 / 2 Crate",
        img: "assets/images/sonaka.png",
        color1: "#56ab2f",
        color2: "#a8e063",
        inStock: true
    },
    {
        name: "Red Globe",
        desc: "Large, seeded red grapes with firm, crisp flesh. Sweet, juicy, and perfect for fruit salads.",
        pricePerCrate: 169,
        offerPrice: "₹299 / 2 Crate",
        img: "assets/images/red-globe.png",
        color1: "#e53935",
        color2: "#e35d5b",
        inStock: true
    }
];

let currentIndex = 0;
const title = document.getElementById('grape-title');
const desc = document.getElementById('grape-desc');
const img = document.getElementById('main-image');
const activeDot = document.getElementById('active-dot');
const totalSlides = document.getElementById('total-slides');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');

function updateUI() {
    if (grapes.length === 0) return;

    const grape = grapes[currentIndex];

    // Fade out text/image
    title.style.opacity = 0;
    desc.style.opacity = 0;
    img.style.opacity = 0;

    setTimeout(() => {
        // Update Content
        title.innerText = grape.name;
        desc.innerText = grape.desc;
        img.src = grape.img;
        price1.innerText = `₹${grape.pricePerCrate} / Crate (2kg)`;
        price2.innerText = `Offer: ${grape.offerPrice}`;

        // Update Background
        document.body.style.background = `linear-gradient(135deg, ${grape.color1}, ${grape.color2})`;

        // Update Slider Indicator
        const percentage = (currentIndex / (grapes.length - 1)) * 40; // 40px is height diff for dot
        activeDot.style.top = percentage + "px";

        // Update Slide Number
        const slideNum = document.querySelector('.slider-controls .slide-num:first-child');
        slideNum.innerText = (currentIndex + 1) < 10 ? "0" + (currentIndex + 1) : (currentIndex + 1);

        // Fade in
        title.style.opacity = 1;
        desc.style.opacity = 1;
        img.style.opacity = 1;
    }, 300);
}

function changeSlide(direction) {
    if (grapes.length === 0) return;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = grapes.length - 1;
    if (currentIndex >= grapes.length) currentIndex = 0;
    updateUI();
}

// Mock Order Flow for Demo
function initiateOrder() {
    const grape = grapes[currentIndex];
    alert(`Thank you for your interest in ${grape.name}!\n\nThis is a demo version. In the full version, you would proceed to Razorpay secure payment.\n\nSimulating order for ₹299.`);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // initialize total slides
    totalSlides.innerText = grapes.length < 10 ? "0" + grapes.length : grapes.length;

    // Bind navigation buttons if they exist
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.onclick = function (e) {
            e.preventDefault();
            initiateOrder();
        };
    }

    // initial render
    updateUI();

    // auto slide every 5 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});
