function getFoucsArea() {
  var ClikedFocusArea = sessionStorage.getItem("ClikedFocusArea");
  return ClikedFocusArea;
}

const ElFocuseAreaHeading = document.getElementById("FocuseAreaHeading");
const Elfocusareaimage1 = document.getElementById("focusareaimage1");
const Elfocusareaimage2 = document.getElementById("focusareaimage2");
const ElFocusAreaParas = document.getElementById("FocusAreaParas");
const Elaccordion1 = document.getElementById("accordion1");

const FoucsedArea = getFoucsArea();

for (const singleFocusArea of focusAreas) {
  if (ElFocuseAreaHeading) {
    if (singleFocusArea.fca_id == FoucsedArea) {
      ElFocuseAreaHeading.textContent = `${singleFocusArea.fca_heading}`;
      Elfocusareaimage1.src = `${singleFocusArea.fca_image393x205}`;
      Elfocusareaimage1.alt = `${singleFocusArea.fca_heading}`;
      Elfocusareaimage2.src = `${singleFocusArea.fca_image291x245}`;
      Elfocusareaimage2.alt = `${singleFocusArea.fca_heading}`;
      for (const paragraph of singleFocusArea.fca_paragraphs) {
        const pElement = document.createElement("p");
        pElement.textContent = paragraph.paragraph; // Access the 'paragraph' property
        ElFocusAreaParas.appendChild(pElement);
      }

      var questionCount = 1;
      for (const singleFAQ of singleFocusArea.fca_QAs) {
        const QuestionCard = `
                                    
                        <div class="card card-default">
                        <div class="card-header" id="collapse1Heading${questionCount}">
                        <h4 class="card-title m-0">
                            <a
                            class="accordion-toggle text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${questionCount}One"
                            aria-expanded="false"
                            aria-controls="collapse${questionCount}One"
                            >
                            ${questionCount} - ${singleFAQ.Qheading}
                            </a>
                        </h4>
                        </div>
                        <div
                        id="collapse${questionCount}One"
                        class="collapse"
                        aria-labelledby="collapse1Heading${questionCount}"
                        data-bs-parent="#accordion1"
                        >
                        <div class="card-body">
                            <p class="mb-0">
                           ${singleFAQ.QA}
                            </p>
                        </div>
                        </div>
                        </div>
            `;
        Elaccordion1.innerHTML += QuestionCard;

        questionCount = questionCount + 1;
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

const ElowlstageFocusAreas = document.getElementById("owlstageFocusAreas");

for (const singleOwlFocusArea of focusAreas) {
  if (ElowlstageFocusAreas) {
    const areaItem = `
      <div class="owl-item" style="width: 177.667px; margin-right: 10px;">
      <a onclick="loadFocusARea('${singleOwlFocusArea.fca_id}')" href="focus-area-detail.html" class="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
      <div class="card box-shadow-4">
          <div class="card-img-top position-relative overlay overlay-show">
              <div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
                  <h4 class="font-weight-semibold text-color-light text-6 mb-1">${singleOwlFocusArea.fca_heading}</h4>

              </div>
              <img src="img/foucusAreas/services-1.jpg" class="img-fluid" alt="${singleOwlFocusArea.fca_heading}" />
          </div>
          <div class="card-body d-flex align-items-center custom-view-more px-4">
          <p class="card-text w-100 mb-0">${singleOwlFocusArea.fca_short_desc} </p>
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

    ElowlstageFocusAreas.innerHTML += areaItem;
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
