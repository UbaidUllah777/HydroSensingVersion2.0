const testimonials = [
  // testimonials one
  {
    id: "testimonialsOne",
    author: "Abdullah AlQahtani",
    testimonialPara: `Exploring the vital sources of fresh water, hydrosensing
     highlighted their importance and the need for effective management.
      Good luck in your efforts to preserve this invaluable resource.`,
  },
  // testimonials Two
  {
    id: "testimonialsTwo",
    author: "Dr.Khalil Ur Rahman",
    testimonialPara: `The website is developed to disseminate the knowledge
     and highlight issues related to water crises at global and regional
      scales through blogs and research discussions. Besides, the HydroSensing
       platform was proposed to help graduate students in their
        research by sharing tutorials and engaging students
        with well-known researchers engaged through this platform.
         Being the founder of HydroSensing, the HydroSensing will also
          share the PhD/Postdoc positions in the domain of HydroSensing
           and help the graduate students to secure fully funded positions
            in well-reputed universities.`,
  },
  // testimonials Three
  {
    id: "testimonialsThree",
    author: "Muhammad Shafiq ",
    testimonialPara: `HydroSensing delivers exceptional consultancy 
    at the intersection of water resource engineering, hydrological
     engineering, and climate change. Their expertise and tailored
     solutions are invaluable for optimizing water management
      strategies. Highly recommended!`,
  },
  // testimonials Five
  {
    id: "testimonialsFour",
    author: "Prof. Songhao Shang",
    testimonialPara: `The website was developed to share information pertaining 
    to water resources, challenges posed by climate change, and how to
     mitigate its impact. I deeply value the enthusiasm exhibited by
     my student, Dr. Khalil Ur Rahman, in his endeavors within the
      realm of water resources and the field of climate change.
       I extend my support and offer my best
       wishes to Dr. Khalil and HydroSensing.`,
  },
  {
    id: "testimonialsFive",
    author: "Sarah Thompson, Water Resource Management Professional",
    testimonialPara: `HydroSensing: Experts united to address water resource 
    challenges. Their knowledge-sharing and research on climate change's
    impact are invaluable. A trusted resource for practical solutions.`,
  },
  // testimonials six

  {
    id: "testimonialsFive",
    author: "Dugan Community Volunteer",
    testimonialPara: `We are a group of volunteers and opening a new scheme 
    in our community.Your web site offereɗ us with helpful 
    info to work on. You have done
    an impressive activity and our entire
     group will probably be grateful to you.`,
  },

  // testimonials seven

  {
    id: "testimonialsFive",
    author: "Khadim shah",
    testimonialPara: `Great effort and very informative. I would like to add 
    a line that, we should think about the utilization of CO2,
     to cope the alarming situation around the globe.`,
  },

  // testimonials eight

  {
    id: "testimonialsFive",
    author: "Sibte Hasaan",
    testimonialPara: `HydroSensing is an incredibly informative 
    website that surpasses expectations. With its user-friendly
     interface and comprehensive content, it provides valuable
     insights and resources for both beginners and experts in
     the field. Highly recommended for reliable and concise information.`,
  },

  // testimonials nine

  {
    id: "testimonialsFive",
    author: "Salah Ud Din",
    testimonialPara: `I express my sincere gratitude for your invaluable 
    contributions in spreading knowledge. Your dedication to sharing
     wisdom will undoubtedly bring you well-deserved rewards
      in abundance. Thank you for your unwavering commitment
       to enlightening others.`,
  },

  // testimonials ten

  {
    id: "testimonialsFive",
    author: "Shoaib Salim",
    testimonialPara: `I am truly grateful for the invaluable assistance and 
    the straightforward approach in understanding and applying the
     concepts to my research. Your exceptional work will undoubtedly
     benefit future researchers. Thank you, Sir, for your remarkable
      contributions`,
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
