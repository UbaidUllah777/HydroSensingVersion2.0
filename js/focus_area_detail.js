
function getFoucsArea (){
    var ClikedFocusArea = sessionStorage.getItem('ClikedFocusArea');
    return ClikedFocusArea
    // sessionStorage.removeItem('ClikedFocusArea');
  
    
  }
  
  
  
  const ElFocuseAreaHeading= document.getElementById("FocuseAreaHeading");
  if (!getFoucsArea) {const getFoucsArea =getFoucsArea();}
  
  for (const singleFocusArea of focusAreas){
    if(ElFocuseAreaHeading){
      if (singleFocusArea.fca_id==getFoucsArea){
        ElFocuseAreaHeading.textContent=`${singleFocusArea.fca_heading}`;
      }
  
    }
  }
  