
function getResearchProject (){
    var ClickedResearchProject = sessionStorage.getItem('ClikedResearch');
    return ClickedResearchProject
  }
  
const ResearchProject =getResearchProject();


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