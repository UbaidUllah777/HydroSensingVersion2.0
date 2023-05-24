const researchProjects=[
    //project One
    {
        RP_id:"projectOne",
        RP_heading:"project One",
        RP_status_id:"CompletedResearchProjects",
        RP_status:"Completed Research Projects",
        RP_image:"img/projects/project.jpg",
        
    },
    //project Two
    {
        RP_id:"projectTwo",
        RP_heading:"project Two",
        RP_status_id:"CompletedResearchProjects",
        RP_status:"Completed Research Projects",
        RP_image:"img/projects/project.jpg",
        
    },
    //project Three
    {
        RP_id:"projectThree",
        RP_heading:"project Three",
        RP_status_id:"ConsultancyServices",
        RP_status:"Consultancy Services",
        RP_image:"img/projects/project.jpg",
        
    },
    //project Four
    {
        RP_id:"projectFour",
        RP_heading:"project Four",
        RP_status_id:"ConsultancyServices",
        RP_status:"Consultancy Services",
        RP_image:"img/projects/project.jpg",
        
    },
    //project Five
    {
        RP_id:"projectFive",
        RP_heading:"project Five",
        RP_status_id:"ConsultancyServices",
        RP_status:"Consultancy Services",
        RP_image:"img/projects/project.jpg",
        
    },
    //project Six
    {
        RP_id:"projectSix",
        RP_heading:"project Six",
        RP_status_id:"OngoingResearchProjects",
        RP_status:"Ongoing Research Projects",
        RP_image:"img/projects/project.jpg",
        
    },
]


const ELresearch_projects_container=document.getElementById("research_projects_container");





function loadResearch(researchId,element){
  if(ELresearch_projects_container){



    ELresearch_projects_container.innerHTML='';

    
if(researchId!='allResearchs'){
  for(const singleProject of researchProjects){
      if(singleProject.RP_status_id==researchId){
          var researchitem=`
          <div class="col-sm-6 col-lg-3 my-4  ${singleProject.RP_status_id}">
          <div class="portfolio-item">
            <a onclick="setResearchId('${singleProject.RP_id}')" href="research-project-detial.html">
              <span
                class="thumb-info thumb-info-lighten border-radius-0"
              >
                <span class="thumb-info-wrapper border-radius-0">
                  <img
                    src="${singleProject.RP_image}"
                    class="img-fluid border-radius-0"
                    alt="${singleProject.RP_heading}"
                  />
  
                  <span class="thumb-info-title">
                    <span class="thumb-info-inner">${singleProject.RP_heading}</span>
                    <span class="thumb-info-type">${singleProject.RP_status}</span>
                  </span>
                  <span class="thumb-info-action">
                    <span
                      class="thumb-info-action-icon bg-dark opacity-8"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

          
          `;
          ELresearch_projects_container.innerHTML+=researchitem;
      }

  }
}
else if(researchId=='allResearchs'){
  for(const singleProject of researchProjects){
      
          var researchitem=`
          <div class="col-sm-6 col-lg-3 my-4 ${singleProject.RP_status_id}">
          <div class="portfolio-item">
            <a  onclick="setResearchId('${singleProject.RP_id}')"  href="research-project-detial.html">
              <span
                class="thumb-info thumb-info-lighten border-radius-0"
              >
                <span class="thumb-info-wrapper border-radius-0">
                  <img
                    src="${singleProject.RP_image}"
                    class="img-fluid border-radius-0"
                    alt="${singleProject.RP_heading}"
                  />
  
                  <span class="thumb-info-title">
                    <span class="thumb-info-inner">${singleProject.RP_heading}</span>
                    <span class="thumb-info-type">${singleProject.RP_status}</span>
                  </span>
                  <span class="thumb-info-action">
                    <span
                      class="thumb-info-action-icon bg-dark opacity-8"
                      ><i class="fas fa-plus"></i
                    ></span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

          
          `;
          ELresearch_projects_container.innerHTML+=researchitem;
     

  }
}
// Remove the "active" class from all nav-link elements
var navLinks = document.querySelectorAll('.RP_nav');
navLinks.forEach(function (navLink) {
navLink.classList.remove('active');
});

// Add the "active" class to the clicked nav-link element
if (element) {
element.querySelector('.nav-link').classList.add('active');
} else {
// Add the "active" class to the "Show All" nav-link element
var showAllNavLink = document.getElementById('showAll_Rp');
showAllNavLink.classList.add('active');
}

  }
}

loadResearch('allResearchs',null);


function setResearchId(ResearchId){
    sessionStorage.setItem("ClikedResearch", ResearchId);
}