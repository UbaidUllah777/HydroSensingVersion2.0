const researchProjects = [
  //project One
  {
    RP_id: "projectOne",
    RP_heading: "Artificial Recharge of Underground Aquifers",
    RP_status_id: "CompletedResearchProjects",
    RP_status: "Completed Research Projects",
    RP_image: "img/projects/project.jpg",
    RP_detail_image: "img/projects/ArtificialRechargofUndergroundAquifers.jpg",
    RP_category: "categ1",
    shortDescription:
      "A study of the artificial recharge of underground aquifers in lahore paksitan",
    RP_paragraphs: [
      {
        paragraph: `Earth Services proudly has played a practical role in 
        developing the Role Model for the concept of “ARTIFICIAL RECHARGE 
        OF UNDERGROUND AQUIFER” in Pakistan for Irrigation
          Research Institute, Lahore.Irrigation and Power Department,
           GOVT OF PUNJAB.`,
      },
      {
        paragraph: `Earth Services proudly has played a practical role in 
        developing the Role Model for the concept of “ARTIFICIAL RECHARGE 
        OF UNDERGROUND AQUIFER” in Pakistan for Irrigation
          Research Institute, Lahore.Irrigation and Power Department,
           GOVT OF PUNJAB.`,
      },
    ],
    RP_scopes: [
      { scope: "Rainwater Harvesting study," },
      { scope: "Pond and Model Construction Civil Work" },
    ],
    RP_client: "Irrigation Research Institute, Lahore",
    RP_year: "2019",
    RP_URL: "",
  },
  //project Two
  {
    RP_id: "projectTwo",
    RP_heading: "Installation of 40 piezometers",
    RP_status_id: "CompletedResearchProjects",
    RP_status: "Completed Research Projects",
    RP_image: "img/projects/project.jpg",
    RP_detail_image: "img/projects/Installationof40piezometers.jpg",
    RP_category: "categ1",
    shortDescription: "A project for the installation of piezometers ",

    RP_paragraphs: [
      {
        paragraph: `Installation of 40 piezometers in different zones of Lahore and Multan
          for Irrigation Research Institute, Lahore Irrigation and Power
           Department, GOVT OF PUNJAB.`,
      },
    ],
    RP_scopes: [{ scope: "Ground Water Study" }],
    RP_client: "Irrigation Research Institute, Lahore",
    RP_year: "2019",
    RP_URL: "",
  },
  //project Three
  {
    RP_id: "projectThree",
    RP_heading: " FILTER Technology for filtration of drain water",
    RP_status_id: "ConsultancyServices",
    RP_status: "Consultancy Services",
    RP_image: "img/projects/project.jpg",
    RP_detail_image: "img/projects/waterfilterationproject.jpg",
    RP_category: "categ1",
    shortDescription:
      "Development of FILTER Technology for filtration of drain water by bioremediation and related techniques.",

    RP_paragraphs: [
      {
        paragraph:
          "Development of FILTER Technology for filtration of drain water by bioremediation and related techniques.",
      },
      {
        paragraph: "",
      },
    ],
    RP_scopes: [{ scope: "water " }, { scope: "filteration technology" }],
    RP_client: "UNESCO and NUST ",
    RP_year: "2016",
    RP_URL: "#",
  },
  //project Four
  {
    RP_id: "projectFour",
    RP_heading:
      "Hydrological and hydraulic investigation for the top city lake,",
    RP_status_id: "ConsultancyServices",
    RP_status: "completedproject",

    RP_detail_image: "img/projects/project-short.jpg",
    RP_category: "categ2",
    shortDescription:
      "Hydrological and hydraulic investigation for the top city lake,Islamabad",

    RP_paragraphs: [
      {
        paragraph:
          "Hydrological and hydraulic investigation for the top city lake,",
      },
      {
        paragraph: "",
      },
    ],
    RP_scopes: [
      { scope: "Hydrological, " },
      { scope: "Hydraulic " },
      { scope: "Remote Sensing investigation" },
    ],
    RP_client: "Top City",
    RP_year: "2021",
    RP_URL: "#",
  },
  //project Five
  {
    RP_id: "projectFive",
    RP_heading: "Soil investigation for construction of Flats ",
    RP_status_id: "CompletedResearchProjects",
    RP_status: "Completed Rsearch Projects",
    RP_image: "img/projects/project.jpg",
    RP_detail_image: "img/projects/project-short.jpg",
    RP_category: "categ3",
    shortDescription:
      "Soil investigation for construction of Flats at Askari X, Rawalpindi",

    RP_paragraphs: [
      {
        paragraph:
          "Soil investigation for construction of Flats at Askari X, Rawalpindi",
      },
      {
        paragraph: "",
      },
    ],
    RP_scopes: [
      { scope: "Geotechnical Investigation" },
      { scope: "soil analysis " },
    ],
    RP_client: "NUST University",
    RP_year: "2016",
    RP_URL: "#",
  },
  //project Six
  {
    RP_id: "projectSix",
    RP_heading: "Soil investigation for construction of Grid station",
    RP_status_id: "CompletedResearchProjects",
    RP_status: "Completed Research Projects",
    RP_image: "img/projects/project.jpg",
    RP_detail_image: "img/projects/project-short.jpg",
    RP_category: "categ4",
    shortDescription:
      "Soil investigation for construction of Grid station at F-9, Sector, Islamabad",

    RP_paragraphs: [
      {
        paragraph:
          "Soil investigation for construction of Grid station at F-9, Sector, Islamabad",
      },
    ],
    RP_scopes: [{ scope: "Geotechnical Investigation" }],
    RP_client: "NUST, Islamabad",
    RP_year: "2015",
    RP_URL: "#",
  },
];

const ELresearch_projects_container = document.getElementById(
  "research_projects_container"
);

function loadResearch(researchId, element) {
  if (ELresearch_projects_container) {
    ELresearch_projects_container.innerHTML = "";

    if (researchId != "allResearchs") {
      for (const singleProject of researchProjects) {
        if (singleProject.RP_status_id == researchId) {
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
          ELresearch_projects_container.innerHTML += researchitem;
        }
      }
    } else if (researchId == "allResearchs") {
      for (const singleProject of researchProjects) {
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
        ELresearch_projects_container.innerHTML += researchitem;
      }
    }
    // Remove the "active" class from all nav-link elements
    var navLinks = document.querySelectorAll(".RP_nav");
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    // Add the "active" class to the clicked nav-link element
    if (element) {
      element.querySelector(".nav-link").classList.add("active");
    } else {
      // Add the "active" class to the "Show All" nav-link element
      var showAllNavLink = document.getElementById("showAll_Rp");
      showAllNavLink.classList.add("active");
    }
  }
}

loadResearch("allResearchs", null);

function setResearchId(ResearchId, ResearchCetegory) {
  sessionStorage.setItem("ClikedResearch", ResearchId);
  sessionStorage.setItem("ResearchCetegory", ResearchCetegory);
}
