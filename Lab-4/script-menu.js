const services = [
  {
    name: "Guided Visual Soul Journey",
    description:
      "Embark on a personalized, guided visual meditation that leads you through the realms of your inner thoughts, emotions, and spiritual landscape. Using custom visuals and calming soundscapes, this experience will help you dive deep into self-awareness and personal growth.",
    price: 150,
    image: "assets/guided-journey.webp", // Placeholder for image
  },
  {
    name: "Abstract Soul Reflection Art",
    description:
      "Receive a bespoke piece of abstract art that represents your current emotional and spiritual state. After an in-depth consultation, the artwork is created to visually express the intricacies of your soul's journey.",
    price: 200,
    image: "assets/reflection-art.webp", // Placeholder for image
  },
  {
    name: "Introspective Writing Session",
    description:
      "Engage in a reflective writing session, guided by prompts and questions designed to spark deep exploration of your inner self. This session encourages clarity, healing, and profound insight into your own soul.",
    price: 100,
    image: "assets/introspective-writing.webp", // Placeholder for image
  },
  {
    name: "Personalized Dream Analysis",
    description:
      "Share your dreams and receive a personalized analysis that connects your subconscious to your waking life. The service combines psychology and spirituality to offer insights into the soul's deepest messages.",
    price: 120,
    image: "assets/dream-analysis.webp", // Placeholder for image
  },
  {
    name: "Soul Alignment Coaching",
    description:
      "A one-on-one coaching session focused on aligning your actions, thoughts, and emotions with your true self. Through introspective exercises and personalized strategies, this service helps bring balance and clarity to your life.",
    price: 180,
    image: "assets/soul-alignment.webp", // Placeholder for image
  },
];

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let serviceImg = document.getElementById("menu-card-image");
let serviceTitle = document.getElementById("menu-card-title");
let serviceDescription = document.getElementById("menu-card-description");
let servicePrice = document.getElementById("menu-card-price");

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

let updateService = (service) => {
  serviceImg.src = services[service].image;
  serviceTitle.textContent = services[service].name;
  serviceDescription.textContent = services[service].description;
  servicePrice.textContent = formatCurrency(services[service].price);
};

updateService(0);

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter >= services.length) {
    counter = 0;
  }
  updateService(counter);
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = services.length - 1;
  }
  updateService(counter);
});
