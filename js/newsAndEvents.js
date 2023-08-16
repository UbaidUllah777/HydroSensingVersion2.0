const newsAndEvents = [
  // Event One
  {
    id: "NRELReportInSoutheastAsia",
    title:
      "NREL report says floating photovoltaics are promising solution in southeast Asia",
    category: "Research and Development 1",
    publishedOnDate: "12/07/2023",
    imgSrc: "img/newsAndHighlights/NREL.jpg",
    para: `Floating photovoltaics, installed alone or in combination with hydropower plants, show 
    potential for the Association of Southeast Asian Nations (ASEAN), according to a National
     Renewable Energy Laboratory (NREL) report. Countries are seeking innovative solutions to 
     reduce carbon emissions while meeting energy security and economic development needs.
      For countries with abundant solar resource potential and limited land availability, 
      floating solar PV is a potential clean energy solution.`,
  },

  // Event Two
  {
    id: "NRELReportInSoutheastAsiaTwo",
    title:
      "NREL report says floating photovoltaics are promising solution in southeast Asia Two",
    category: "Research and Development",
    publishedOnDate: "13/07/2023",
    imgSrc: "img/newsAndHighlights/NREL.jpg",
    para: `Two Floating photovoltaics, installed alone or in combination with hydropower plants, show 
    potential for the Association of Southeast Asian Nations (ASEAN), according to a National
     Renewable Energy Laboratory (NREL) report. Countries are seeking innovative solutions to 
     reduce carbon emissions while meeting energy security and economic development needs.
      For countries with abundant solar resource potential and limited land availability, 
      floating solar PV is a potential clean energy solution.`,
  },

  // Event Three
  {
    id: "NRELReportInSoutheastAsiaThree",
    title:
      "NREL report says floating photovoltaics are promising solution in southeast Asia Three",
    category: "Research and Development",
    publishedOnDate: "14/07/2023",
    imgSrc: "img/newsAndHighlights/NREL.jpg",
    para: `Three Floating photovoltaics, installed alone or in combination with hydropower plants, show 
    potential for the Association of Southeast Asian Nations (ASEAN), according to a National
     Renewable Energy Laboratory (NREL) report. Countries are seeking innovative solutions to 
     reduce carbon emissions while meeting energy security and economic development needs.
      For countries with abundant solar resource potential and limited land availability, 
      floating solar PV is a potential clean energy solution.`,
  },

  // Event Four
  {
    id: "NRELReportInSoutheastAsiaFour",
    title:
      "NREL report says floating photovoltaics are promising solution in southeast Asia Four",
    category: "Research and Development",
    publishedOnDate: "15/07/2023",
    imgSrc: "img/newsAndHighlights/NREL.jpg",
    para: `Four Floating photovoltaics, installed alone or in combination with hydropower plants, show 
        potential for the Association of Southeast Asian Nations (ASEAN), according to a National
         Renewable Energy Laboratory (NREL) report. Countries are seeking innovative solutions to 
         reduce carbon emissions while meeting energy security and economic development needs.
          For countries with abundant solar resource potential and limited land availability, 
          floating solar PV is a potential clean energy solution.`,
  },
];

const carouselId = "newsAndEventsCarousel"; // Update with the ID of the specific carousel
const carousel = document.getElementById(carouselId);

if (carousel) {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselIndicators = carousel.querySelector(".carousel-indicators");

  // Loop through each item in the newsAndEvents array
  newsAndEvents.forEach((event, index) => {
    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    // Create inner content for carousel item
    const itemContent = `
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pe-5">
                <span class="d-block text-5 mb-1 text-color-primary text-2 opacity-8">${event.publishedOnDate}</span>
                <h5 class="text-6 line-height-3 text-color-dark text-transform-none font-weight-semibold mb-2" >${event.title}</h5>
                <span class="d-block text-color-primary text-5 mb-4 pb-2">${event.category}</span>
                <p class="mb-4 pb-2" style="text-align: justify;">${event.para}</p>
              </div>
            </div>
            <div class="col-lg-6" style="min-height: 33vw;">
              <div class="col" style="margin-right: 3rem; left: 0px;">
                <img src="${event.imgSrc}" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        `;

    carouselItem.innerHTML = itemContent;
    carouselInner.appendChild(carouselItem);

    // Create carousel indicators
    const indicator = document.createElement("button");
    indicator.setAttribute("type", "button");
    indicator.setAttribute("data-bs-target", `#${carouselId}`);
    indicator.setAttribute("data-bs-slide-to", index.toString());
    if (index === 0) {
      indicator.classList.add("active");
    }
    carouselIndicators.appendChild(indicator);
  });

  // Initialize the Bootstrap Carousel
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 5000, // Set the interval for auto-sliding (in milliseconds)
    // Other options if needed
  });
}
