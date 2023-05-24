
function getResearchProject (){
    var ClickedResearchProject = sessionStorage.getItem('ClikedResearch');
    return ClickedResearchProject
  }
  
const ResearchProject =getResearchProject();


const ElRP_detail_Heading=document.getElementById("RP_detail_Heading");
const ElRP_detail_Heading2=document.getElementById("RP_detail_Heading2");


for(const singleClickedResearch of researchProjects){
if(singleClickedResearch.RP_id==ResearchProject){
    if(ElRP_detail_Heading){

        ElRP_detail_Heading.textContent=`${singleClickedResearch.RP_heading}`
        ElRP_detail_Heading2.textContent=`${singleClickedResearch.RP_heading}`
    }
}

} 