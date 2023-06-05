
function getResearchProject (){
  var ClickedResearchProject = sessionStorage.getItem('ClikedResearch');
  return ClickedResearchProject
}
function getResearchCategory (){
    var ClickedResearchCategory=sessionStorage.getItem('ResearchCetegory');
    return ClickedResearchCategory
  }
  
const ResearchProject =getResearchProject();
const ResearchCategory =getResearchCategory();


const ElRP_detail_Heading=document.getElementById("RP_detail_Heading");
const ElRP_detail_Heading2=document.getElementById("RP_detail_Heading2");
const ElRP_detail_image=document.getElementById("RP_detail_image");
const RP_detail_Paras=document.getElementById("RP_detail_Paras");
const ElRP_detail_Scope=document.getElementById("RP_detail_Scope");
const ElRP_detail_Client=document.getElementById("RP_detail_Client");
const ElRP_detail_Year=document.getElementById("RP_detail_Year");
const ElRP_detail_URL=document.getElementById("RP_detail_URL");


for(const singleClickedResearch of researchProjects){
if(singleClickedResearch.RP_id==ResearchProject){
    if(ElRP_detail_Heading){

        ElRP_detail_Heading.textContent=`${singleClickedResearch.RP_heading}`;
        ElRP_detail_Heading2.textContent=`${singleClickedResearch.RP_heading}`;
        ElRP_detail_image.src=`${singleClickedResearch.RP_detail_image}`;
        for (const paragraph of singleClickedResearch.RP_paragraphs) {
            const pElement = document.createElement("p");
            pElement.textContent = paragraph.paragraph; // Access the 'paragraph' property
            RP_detail_Paras.appendChild(pElement);
          };
          for(const scope of singleClickedResearch.RP_scopes){
            const aElement =document.createElement("a");
            aElement.href = "#";
            aElement.className = "badge badge-dark badge-sm text-uppercase rounded-pill px-2 py-1 ms-1";
            aElement.innerText = scope.scope;
            ElRP_detail_Scope.appendChild(aElement);


          };
          ElRP_detail_Client.textContent=`${singleClickedResearch.RP_client}`;
          ElRP_detail_Year.textContent=`${singleClickedResearch.RP_year}`;
          ElRP_detail_URL.textContent=`${singleClickedResearch.RP_URL}`
    }
}

} 




// Realted Projects : START

const Elrelated_RP_container_RP_detail=document.getElementById("related_RP_container_RP_detail");

if(Elrelated_RP_container_RP_detail){



  Elrelated_RP_container_RP_detail.innerHTML='';

  

for(const singleProject of researchProjects){
    if(singleProject.RP_category==ResearchCategory){
        var researchitem=`
        <div class="col-sm-6 col-lg-3 my-4 ${singleProject.RP_status_id}">
        <div class="portfolio-item">
          <a onclick="setResearchId('${singleProject.RP_id}','${singleProject.RP_category}')"  href="research-project-detial.html">
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
                  <span class="thumb-info-type">${""}</span>
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
        Elrelated_RP_container_RP_detail.innerHTML+=researchitem;
    }

}
}