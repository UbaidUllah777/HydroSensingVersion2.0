
function getFoucsArea (){
    var ClikedFocusArea = sessionStorage.getItem('ClikedFocusArea');
    return ClikedFocusArea
    
  
    
  }
  
  
  
  const ElFocuseAreaHeading= document.getElementById("FocuseAreaHeading");
  const Elfocusareaimage1=document.getElementById("focusareaimage1");
  const Elfocusareaimage2=document.getElementById("focusareaimage2");
  const ElFocusAreaParas = document.getElementById("FocusAreaParas");
  const Elaccordion1=document.getElementById("accordion1");


  const FoucsedArea =getFoucsArea();
  
  for (const singleFocusArea of focusAreas){
    if(ElFocuseAreaHeading){
      if (singleFocusArea.fca_id==FoucsedArea){
        ElFocuseAreaHeading.textContent=`${singleFocusArea.fca_heading}`;
        Elfocusareaimage1.src=`${singleFocusArea.fca_image393x205}`;
        Elfocusareaimage1.alt=`${singleFocusArea.fca_heading}`;
        Elfocusareaimage2.src=`${singleFocusArea.fca_image291x245}`;
        Elfocusareaimage2.alt=`${singleFocusArea.fca_heading}`;
        for (const paragraph of singleFocusArea.fca_paragraphs) {
            const pElement = document.createElement("p");
            pElement.textContent = paragraph.paragraph; // Access the 'paragraph' property
            ElFocusAreaParas.appendChild(pElement);
          }
        
        var questionCount=1;
        for (const singleFAQ of singleFocusArea.fca_QAs) {
            const QuestionCard=`
                                    
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

            questionCount=questionCount+1

        }
          
          
      }
  
    }
  }
  function initializeOwlCarousel() {
    $('.owl-carousel').owlCarousel({
      margin: 10,
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1 // 1 item on small screens
        },
        768: {
          items: 2 // 3 items on medium screens
        },
        992: {
          items: 4 // 6 items on large screens
        }
      }
    });
  }
  
  const ElowlstageFocusAreas = document.getElementById("owlstageFocusAreas");

for (const singleOwlFocusArea of focusAreas) {
  if (ElowlstageFocusAreas) {
    const areaItem = `
      <div class="owl-item" style="width: 177.667px; margin-right: 10px;">
      <div class="portfolio-item">
      <a onclick="loadFocusARea('${singleOwlFocusArea.fca_id}')" href="focus-area-detail.html" >
        <span class="thumb-info thumb-info-lighten border-radius-0">
          <span class="thumb-info-wrapper border-radius-0">
            <img src="img/projects/project.jpg" class="img-fluid border-radius-0" alt="${singleOwlFocusArea.fca_heading}">

            <span class="thumb-info-title" style="width:100%; max-width: 100%; font-size: 1em !important;">
              <span class="thumb-info-inner text-1">${singleOwlFocusArea.fca_heading}</span>
              <span class="thumb-info-type"></span>
            </span>
            <span class="thumb-info-action">
              <span class="thumb-info-action-icon bg-dark opacity-8"><i class="fas fa-plus"></i></span>
            </span>
          </span>
        </span>
      </a>
    </div>
      </div>
    `;
    
    ElowlstageFocusAreas.innerHTML += areaItem;
  }
}

// Call the initialization function after adding the items
initializeOwlCarousel();

// Previous button event listener
const owlPrevButton = document.getElementById("owlPrevButton");
owlPrevButton.addEventListener("click", function() {
  $('.owl-carousel').trigger('prev.owl.carousel');
});

// Next button event listener
const owlNextButton = document.getElementById("owlNextButton");
owlNextButton.addEventListener("click", function() {
  $('.owl-carousel').trigger('next.owl.carousel');
});
