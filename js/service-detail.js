function getService() {
  var ClikedService = sessionStorage.getItem("ClikedService");
  return ClikedService;
}

const ElServiceHeading = document.getElementById("ServiceHeading");
const ElServiceimage1 = document.getElementById("Serviceimage1");
const ElServiceimage2 = document.getElementById("Serviceimage2");
const ElServiceParas = document.getElementById("ServiceParas");

const ClikedServiceId = getService();

for (const singleService of Services) {
  if (ElServiceHeading) {
    if (singleService.service_id == ClikedServiceId) {
      ElServiceHeading.textContent = `${singleService.service_heading}`;
      ElServiceimage1.src = `${singleService.service_image393x205}`;
      ElServiceimage1.alt = `${singleService.service_heading}`;
      ElServiceimage2.src = `${singleService.service_image291x245}`;
      ElServiceimage2.alt = `${singleService.service_heading}`;
      for (const paragraph of singleService.service_paragraphs) {
        const pElement = document.createElement("p");
        pElement.textContent = paragraph.paragraph; // Access the 'paragraph' property
        ElServiceParas.appendChild(pElement);
      }
    }
  }
}
function initializeOwlCarousel() {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1, // 1 item on small screens
      },
      768: {
        items: 2, // 3 items on medium screens
      },
      992: {
        items: 3, // 6 items on large screens
      },
    },
  });
}

const ElowlstageServices = document.getElementById("owlstageServices");

for (const singleOwlService of Services) {
  if (ElowlstageServices) {
    const servicesItem = `
        <div class="owl-item" style="width: 177.667px; margin-right: 10px;">
        <a onclick="loadService('${singleOwlService.service_id}')" href="service-detail.html" class="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
        <div class="card card-border box-shadow-1-quaternary card-border-bottom card-border-hover bg-color-grey box-shadow-6 box-shadow-hover anim-hover-translate-top-10px transition-3ms">
        <div class="card-body py-5">
            <h4 class="card-title mb-1 text-4 font-weight-bold text-color-secondary">${singleOwlService.service_heading}</h4>
            <p class="card-text showOnlyTwoLines">${singleOwlService.service_short_desc}</p>
        </div>
    </div>
    </a>
        </div>
      `;

    ElowlstageServices.innerHTML += servicesItem;
  }
}

// Call the initialization function after adding the items
initializeOwlCarousel();

// Previous button event listener
const owlPrevButton = document.getElementById("owlPrevButton");
owlPrevButton.addEventListener("click", function () {
  $(".owl-carousel").trigger("prev.owl.carousel");
});

// Next button event listener
const owlNextButton = document.getElementById("owlNextButton");
owlNextButton.addEventListener("click", function () {
  $(".owl-carousel").trigger("next.owl.carousel");
});
