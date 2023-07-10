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
        <div class="card box-shadow-4">
            <div class="card-img-top position-relative overlay overlay-show">
                <div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
                    <h4 class="font-weight-semibold text-color-light text-6 mb-1">${singleOwlService.service_heading}</h4>
  
                </div>
                <img src="img/foucusAreas/services-1.jpg" class="img-fluid" alt="${singleOwlService.service_heading}" />
            </div>
            <div class="card-body d-flex align-items-center custom-view-more px-4">
            <p class="card-text w-100 mb-0">${singleOwlService.fca_short_desc} </p>
            <div class="animated-icon animated fadeIn svg-fill-color-primary"><!--?xml version="1.0" ?-->
                    <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon_21684230898848" data-filename="arrow-right.svg" width="50" height="50">
                    <polygon points="1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24  "></polygon>
                    <!-- Code injected by live-server -->
  
                    </svg></div>
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
