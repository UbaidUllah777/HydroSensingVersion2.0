function getResearchProject() {
  var ClickedResearchProject = sessionStorage.getItem("ClikedResearch");
  return ClickedResearchProject;
}
function getResearchCategory() {
  var ClickedResearchCategory = sessionStorage.getItem("ResearchCetegory");
  return ClickedResearchCategory;
}

const ResearchProject = getResearchProject();
const ResearchCategory = getResearchCategory();

const ElRP_detail_Heading = document.getElementById("RP_detail_Heading");
// const ElRP_detail_Heading2=document.getElementById("RP_detail_Heading2");
const ElRP_detail_image = document.getElementById("RP_detail_image");
const RP_detail_Paras = document.getElementById("RP_detail_Paras");
const ElRP_detail_Scope = document.getElementById("RP_detail_Scope");
const ElRP_detail_Client = document.getElementById("RP_detail_Client");
const ElRP_detail_Year = document.getElementById("RP_detail_Year");

for (const singleClickedResearch of researchProjects) {
  if (singleClickedResearch.RP_id == ResearchProject) {
    if (ElRP_detail_Heading) {
      ElRP_detail_Heading.textContent = `${singleClickedResearch.RP_heading}`;
      // ElRP_detail_Heading2.textContent=`${singleClickedResearch.RP_heading}`;
      ElRP_detail_image.src = `${singleClickedResearch.RP_detail_image}`;
      for (const paragraph of singleClickedResearch.RP_paragraphs) {
        const pElement = document.createElement("p");
        pElement.classList.add("text-align-justify");
        pElement.textContent = paragraph.paragraph; // Access the 'paragraph' property
        RP_detail_Paras.appendChild(pElement);
      }
      for (const scope of singleClickedResearch.RP_scopes) {
        const aElement = document.createElement("a");
        aElement.href = "#";
        aElement.className =
          "badge badge-dark badge-sm text-uppercase rounded-pill px-2 py-1 ms-1";
        aElement.innerText = scope.scope;
        ElRP_detail_Scope.appendChild(aElement);
      }
      ElRP_detail_Client.textContent = `${singleClickedResearch.RP_client}`;
      ElRP_detail_Year.textContent = `${singleClickedResearch.RP_year}`;
    }
  }
}

// Realted Projects : START

const Elrelated_RP_container_RP_detail = document.getElementById(
  "related_RP_container_RP_detail"
);

if (Elrelated_RP_container_RP_detail) {
  Elrelated_RP_container_RP_detail.innerHTML = "";

  for (const singleProject of researchProjects) {
    if (singleProject.RP_category == ResearchCategory) {
      var researchitem = `
      <div id="${singleProject.RP_id}" class="col-sm-9 col-md-6 col-lg-4 mb-2 mt-2">
      <a onclick="setResearchId('${singleProject.RP_id}','${singleProject.RP_category}')"  href="research-project-detial.html" class="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
      <div class="card card-border card-border-bottom card-border-hover bg-color-grey box-shadow-6 box-shadow-hover anim-hover-translate-top-10px transition-3ms">
      <div class="card-body py-5">
          <h4 class="card-title mb-1 text-3 showOnlyOneLine font-weight-bold text-color-secondary">${singleProject.RP_heading}</h4>
          <p class="card-text showOnlyTwoLines">${singleProject.shortDescription}</p>
      </div>
    </div>
      </a>
    </div>

        
        `;
      Elrelated_RP_container_RP_detail.innerHTML += researchitem;
    }
  }
}

// Index TResearch Projects : START

const Elindex_RP_container_RP_detail = document.getElementById(
  "index_RP_container_RP_detail"
);

if (Elindex_RP_container_RP_detail) {
  var firstFourresearchProjects = researchProjects.slice(0, 3);

  Elindex_RP_container_RP_detail.innerHTML = "";

  for (const singleProject of firstFourresearchProjects) {
    var researchitem = `
        

        <div id="${singleProject.RP_id}" class="col-sm-9 col-md-6 col-lg-4 mb-4">
        <a onclick="setResearchId('${singleProject.RP_id}','${singleProject.RP_category}')"  href="research-project-detial.html" class="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
        <div class="card card-border card-border-bottom card-border-hover bg-color-grey box-shadow-6 box-shadow-hover anim-hover-translate-top-10px transition-3ms">
        <div class="card-body py-5">
            <h4 class="card-title mb-1 text-3 showOnlyOneLine font-weight-bold text-color-secondary">${singleProject.RP_heading}</h4>
            <p class="card-text showOnlyTwoLines">${singleProject.shortDescription}</p>
        </div>
      </div>
        </a>
      </div>
        
        `;
    Elindex_RP_container_RP_detail.innerHTML += researchitem;
  }
}
