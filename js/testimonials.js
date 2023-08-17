const testimonials = [
  // testimonials one
  {
    id: "testimonialsOne",
    author: "Author One",
    testimonialPara: `Ipsum excepteur culpa laboris incididunt qui amet dolore irure ipsum
      reprehenderit. Non pariatur aliquip incididunt occaecat eiusmod sit. Commodo occaecat
      enim am.`,
  },
  // testimonials Two
  {
    id: "testimonialsTwo",
    author: "Author Two",
    testimonialPara: `Ipsum excepteur culpa laboris incididunt qui amet dolore irure ipsum
      reprehenderit. Non pariatur aliquip incididunt occaecat eiusmod sit. Commodo occaecat
      enim amet voluptate reprehenderit. Ex minim dolor sunt sit ipsum adipisicing quis.
       Labore aliquip cupidatat voluptate voluptate aliqua sint occaecat dolor velit sit
       Lorem  aliqua.Nisi excepteur sunt tempor qui esse sit nostrud eu aliqua enim sunt
       commo sit.`,
  },
  // testimonials Three
  {
    id: "testimonialsThree",
    author: "Author Three",
    testimonialPara: `Ipsum excepteur culpa laboris incididunt qui amet dolore irure ipsum
      reprehenderit. Non pariatur aliquip incididunt occaecat eiusmod sit. Commodo occaecat
      enim amet voluptate reprehenderit. Ex minim dolor sunt sit ipsum adipisicing quis.
       Labore aliquip cupidatat voluptate voluptate aliqua sint occaecat dolor velit sit
       Lorem  aliqua.Nisi excepteur sunt tempor qui esse sit nostrud eu aliqua enim sunt
       commo sit.`,
  },
  // testimonials Four
  {
    id: "testimonialsFour",
    author: "author Four",
    testimonialPara: `Ipsum excepteur culpa laboris incididunt qui amet dolore irure ipsum
      reprehenderit. Non pariatur aliquip incididunt occaecat eiusmod sit. Commodo occaecat
      enim amet voluptate reprehenderit. Ex minim dolor sunt sit ipsum adipisicing quis.
       Labore aliquip cupidatat voluptate voluptate aliqua sint occaecat dolor velit sit
       Lorem  aliqua.Nisi excepteur sunt tempor qui esse sit nostrud eu aliqua enim sunt
       commo sit.`,
  },
];

function loadTestimonials(carouselId) {
  const carouselInner = document.querySelector(
    `#${carouselId} .carousel-inner`
  );
  const carouselIndicators = document.querySelector(
    `#${carouselId} .carousel-indicators`
  );
  carouselInner.innerHTML = ""; // Clear existing content

  testimonials.forEach((testimonial, index) => {
    const isActive = index === 0 ? "active" : "";
    const carouselItem = `
        <div class="carousel-item ${isActive}" data-bs-interval="10000">
          <div class="pb-5 px-lg-5">
            <div class="testimonial testimonial-style-2 px-4 mx-xl-5 my-3">
            
              <blockquote>
                <p class="text-color-dark text-4 line-height-8 alternative-font-4 mb-0">${testimonial.testimonialPara}</p>
              </blockquote>
              <div class="testimonial-author">
                <p>
                  <strong class="font-weight-bold text-5-5 negative-ls-1">- ${testimonial.author}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

    const carouselIndicator = `
        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" class="${isActive}" aria-label="Slide ${
      index + 1
    }"></button>
      `;

    carouselInner.insertAdjacentHTML("beforeend", carouselItem);
    carouselIndicators.insertAdjacentHTML("beforeend", carouselIndicator);
  });
}

// Call the function to load testimonials for each carousel
document.addEventListener("DOMContentLoaded", () => {
  loadTestimonials("carouselExampleDark"); // Replace with your carousel ID
});
