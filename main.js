const slides = document.querySelectorAll(".slide");
const heroSub = document.getElementById("heroSub");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");

let slideIndex = 0;
let typingTimeout;

const heroTexts = [
  {
    sub: "Welcome to Royal Elegance",
    title: "Experience Royal Luxury",
    desc: "Where comfort meets timeless grandeur",
  },
  {
    sub: "Luxury Redefined",
    title: "Stay Like a King",
    desc: "Indulge in unmatched hospitality",
  },
  {
    sub: "Peaceful Escape",
    title: "Relax • Refresh • Rejuvenate",
    desc: "Your perfect getaway awaits",
  },
];

// Typewriter function for any element
function typeWriter(element, text, speed = 80, callback) {
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }

  typing();
}

// Show hero slide with typewriter for all three elements
function showHeroSlide(index) {
  // Clear previous typing if user changes slide quickly
  clearTimeout(typingTimeout);

  // Hide previous slide
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  const currentText = heroTexts[index];

  // Typewriter effect: sub -> title -> desc
  typeWriter(heroSub, currentText.sub, 50, () => {
    typeWriter(heroTitle, currentText.title, 80, () => {
      typeWriter(heroDesc, currentText.desc, 50);
    });
  });
}

// Change slide automatically
function changeSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showHeroSlide(slideIndex);
}

// Initialize first slide
showHeroSlide(slideIndex);

// Auto change every 5 seconds
setInterval(changeSlide, 6500);

/* First load */
heroSub.textContent = heroTexts[0].sub;
heroDesc.textContent = heroTexts[0].desc;
typeWriter(heroTitle, heroTexts[0].title, 80);
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀"; // sun icon
  } else {
    toggleBtn.textContent = "🌙"; // moon icon
  }
});
// Preloader
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  loader.classList.add("fade-out");

  setTimeout(()=>{
    loader.remove();
  },800);

});
//jab uper wala sahi nhi lge tab ye try kerna ye pehle wala h
// window.addEventListener("load", () => {

//   const loader = document.getElementById("loader");

//   loader.classList.add("fade-out");

//   setTimeout(()=>{
//     loader.remove();
//   },800);

// });

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const offerPopup = document.getElementById("offerPopup");
const closePopup = document.getElementById("closePopup");

// Show popup after 4 seconds
window.addEventListener("load", () => {

  if(!localStorage.getItem("offerShown")){

    setTimeout(() => {
      offerPopup.style.display = "flex";
      localStorage.setItem("offerShown","true");
    }, 9000);

  }

});
// Close popup when clicking the close button
closePopup.addEventListener("click", () => {
  offerPopup.style.display = "none";
});

//scrollable carousel for rooms section
const carousel = document.querySelector(".room-carousel");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

function getCardWidth() {
  const card = document.querySelector(".room-card");
  const gap = 20;
  return card.offsetWidth + gap;
}

function updateButtons() {
  leftBtn.disabled = carousel.scrollLeft <= 0;
  rightBtn.disabled =
    carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5;
}

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: getCardWidth(),
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -getCardWidth(),
    behavior: "smooth",
  });
});

carousel.addEventListener("scroll", updateButtons);

updateButtons();

// Drag-scroll for rooms carousel
let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = "grabbing";
});
carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});
carousel.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});
carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; // fast scroll
  carousel.scrollLeft = scrollLeft - walk;
});

//book
// Book Now Popup
const bookNowBtn = document.querySelectorAll(".book-now-btn");
const bookNowPopup = document.getElementById("bookNowPopup");
const closeBookNow = document.getElementById("closeBookNow");
const bookNowForm = document.getElementById("bookNowForm");

// Open popup on button click
bookNowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookNowPopup.style.display = "flex";
  });
});

// Close popup
closeBookNow.addEventListener("click", () => {
  bookNowPopup.style.display = "none";
});

// Close when clicking outside
bookNowPopup.addEventListener("click", (e) => {
  if (e.target === bookNowPopup) {
    bookNowPopup.style.display = "none";
  }
});

// Form submission
bookNowForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const booking = {
    name: document.getElementById("bookName").value,
    phone: document.getElementById("bookPhone").value,
    email: document.getElementById("bookEmail").value,
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    adults: document.getElementById("adults").value,
    roomType: document.getElementById("roomType").value,
    message: document.getElementById("message").value,
    bookingId: "RP" + Date.now(),
  };

  if (
    !booking.name ||
    !booking.phone ||
    !booking.email ||
    !booking.checkIn ||
    !booking.checkOut ||
    !booking.adults ||
    !booking.roomType
  ) {
    alert("Please fill all required fields!");
    return;
  }

  if(new Date(booking.checkOut) <= new Date(booking.checkIn)){
  alert("Check-out must be after Check-in");
  return;
  }
  // ✅ Get existing bookings (ONLY ONCE)
  let bookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];

  // ✅ Check availability
  let isAvailable = bookings.every(b => {
  if (b.roomType !== booking.roomType) return true;

  return (
    new Date(booking.checkOut) <= new Date(b.checkIn) ||
    new Date(booking.checkIn) >= new Date(b.checkOut)
  );
});

  if (!isAvailable) {
    alert("Selected room is not available for these dates!");
    return;
  }

  bookings.push(booking);

  localStorage.setItem("hotelBookings", JSON.stringify(bookings));

  alert("Booking Successful! Your Booking ID: " + booking.bookingId);

  bookNowForm.reset();
  bookNowPopup.style.display = "none";
});


//manage reservations
const manageBtn = document.querySelector(".manage-reservations");
if (manageBtn) {
  manageBtn.addEventListener("click", () => {
    window.location.href = "admin.html";
  });
}

//popup to booking form
const offerBookBtn = document.getElementById("offerBookBtn");
offerBookBtn.addEventListener("click", () => {

  offerPopup.style.display = "none"; // offer popup close

  bookNowPopup.style.display = "flex"; // booking form open

});
//close offer popup when clicking outside
offerPopup.addEventListener("click",(e)=>{
  if(e.target === offerPopup){
    offerPopup.style.display="none";
  }
});
// menu links pe click krne pe mobile menu close ho jaye
document.querySelectorAll("#nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.classList.remove("show");
  });
});