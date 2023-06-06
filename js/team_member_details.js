
OrcidIcon=`<i class="fa-brands fa-orcid pt-3 fa-2xl " style="color: #a5cd39;"></i>`;
ResearchGateIcone=` <img width="28" height="28" src="img/icons/research-gate.png" alt="Reseach Gate"/>`;
googleScolarIcon=`<img width="32" height="32" src="https://img.icons8.com/color/48/google-scholar--v3.png" alt="google-scholar--v3"/>`;
publonsIcon=`img/icons/publons.png`;


function getTeamMember() {
  var ClickedMember = sessionStorage.getItem("ClickedMember");
  return ClickedMember;
}

const teamMember = getTeamMember();

const ELTM_detail_memberHeading = document.getElementById(
  "TM_detail_memberHeading"
);
const ElTM_detail_memberDesg = document.getElementById("TM_detail_memberDesg");
const ElTM_detail_memberImage = document.getElementById(
  "TM_detail_memberImage"
);
const ElTM_detail_memberLinkedin = document.getElementById(
  "TM_detail_memberLinkedin"
);
const ElTM_detail_memberTwitter = document.getElementById(
  "TM_detail_memberTwitter"
);

const ElTM_detail_memberFacebook = document.getElementById(
  "TM_detail_memberFacebook"
);
const ElTM_detail_memberParas = document.getElementById(
  "TM_detail_memberParas"
);
const ElTM_detail_memberEducation=document.getElementById("TM_detail_memberEducation");
const ElTM_detail_memberExperience=document.getElementById("TM_detail_memberExperience");
const ELTM_detail_memberAcadProf=document.getElementById("TM_detail_memberAcadProf");
const ElTM_detail_memberRsrchInt=document.getElementById("TM_detail_memberRsrchInt");
const ElTM_detail_memberReprPublications=document.getElementById("TM_detail_memberReprPublications");





for (const singleMember of teamMembers) {
  if (ELTM_detail_memberHeading) {
    if (singleMember.member_id == teamMember) {
      ELTM_detail_memberHeading.textContent = `${singleMember.member_heading}`;
      ElTM_detail_memberDesg.textContent = `${singleMember.member_designation}`;
      ElTM_detail_memberImage.src=`${singleMember.member_image}`;
      ElTM_detail_memberImage.alt=`${singleMember.member_heading}`; 
      ElTM_detail_memberLinkedin.href = `${singleMember.member_Linkedin}`;
      ElTM_detail_memberTwitter.href = `${singleMember.member_Tiwtter}`;
      ElTM_detail_memberFacebook.href = `${singleMember.member_Facebook}`;
      for (const singlePara of singleMember.member_paragraphs) {
        const pElement = document.createElement("p");
        pElement.textContent = singlePara.paragraph;
        ElTM_detail_memberParas.appendChild(pElement);
      }

      
      for (const singleEducation of singleMember.member_education) {
        const elSingleEducation=  `<div class="custom-box-details-2 my-3 bg-color-light custom-box-shadow-3">
       
        <h4 class="font-weight-semibold text-color-dark m-0">${singleEducation.institute_name}  <i class="icon-graduation icons text-color-primary"></i></h4>
        <p class="custom-text-color-2 mb-1">${singleEducation.degree_name}</p>
        <strong class="text-color-primary">${singleEducation.graduation_period}</strong>
      </div>`

        ElTM_detail_memberEducation.innerHTML+=elSingleEducation;
      }

      for (const singleExperience of singleMember.member_Experience) {
        const elSingleExperience =  `
        
      <hr class="my-2">
        <div class="row my-3 ">
        <div class="experience-info col-lg-3 col-sm-5 ">
          <span class="from text-color-dark text-uppercase ">
            <span class="font-weight-semibold text-color-primary">&nbsp ${singleExperience.From}</span>
          </span>
          <span class="to text-color-dark text-uppercase">
            -
            <span class="font-weight-semibold text-color-primary"> &nbsp ${singleExperience.To}</span>
          </span>
          <br/>
          <span class="company text-color-dark font-weight-semibold">
            ${singleExperience.orgName}
            <span class="company-location text-color-dark font-weight-normal text-uppercase">${singleExperience.orgPlace}</span>
          </span>
        </div>
        <div class="experience-description col-lg-9 col-sm-7 bg-color-light">
          <h4 class="text-color-dark font-weight-semibold">${singleExperience.designation}</h4>
          <p class="custom-text-color-2">${singleExperience.experienceDetail}</p>
        </div>
      </div>

      `

      ElTM_detail_memberExperience.innerHTML+=elSingleExperience;
      }


      
      for (const singleAcadProf of singleMember.member_AcadProf) {
        const liElement = document.createElement("li");
        liElement.classList.add("my-2")
        if(singleAcadProf.AcadProfName=="Research Gate"){
          liElement.innerHTML = `${ResearchGateIcone} &nbsp <a href="${singleAcadProf.AcadProfURL}" target="_blank" class="custom-link-hover-effects text-decoration-none text-color-dark">${singleAcadProf.AcadProfName}</a> &nbsp  `;
        }
        else  if(singleAcadProf.AcadProfName=="ORCID"){
          liElement.innerHTML = `${OrcidIcon} &nbsp <a href="${singleAcadProf.AcadProfURL}"  target="_blank"  class="custom-link-hover-effects text-decoration-none text-color-dark">${singleAcadProf.AcadProfName}</a> &nbsp  `;
        }
        else  if(singleAcadProf.AcadProfName=="Google Scholar"){
          liElement.innerHTML = `${googleScolarIcon} &nbsp <a href="${singleAcadProf.AcadProfURL}"  target="_blank"  class="custom-link-hover-effects text-decoration-none text-color-dark">${singleAcadProf.AcadProfName}</a> &nbsp  `;
        }
        
        else  if(singleAcadProf.AcadProfName=="Publons"){
          liElement.innerHTML = `<img class="mt-1" style=" display: inline-block;
          width: 2em;
          height: 2em;
          border-radius: 50%;
          text-align: center;
          line-height: 2em;" src="${publonsIcon}" alt=""> &nbsp <a href="${singleAcadProf.AcadProfURL}"  target="_blank"  class="custom-link-hover-effects text-decoration-none text-color-dark">${singleAcadProf.AcadProfName}</a> &nbsp  `;
        }
        
        else{
          liElement.innerHTML = `<a href="${singleAcadProf.AcadProfURL}"  target="_blank"  class="custom-link-hover-effects text-decoration-none text-color-dark">${singleAcadProf.AcadProfName}</a>  &nbsp  `;
        }
        
        ELTM_detail_memberAcadProf.appendChild(liElement);


      }



      
      for (const singleRsrchInt of singleMember.member_ResearchInterests) {
        const liElement = document.createElement("li");
        liElement.classList.add("my-3")
        liElement.textContent = singleRsrchInt.ResearchInterest ;
        ElTM_detail_memberRsrchInt.appendChild(liElement);

      }

      

      
      for (const singleRsrchPub of singleMember.member_ReprPublications) {
        const liElement = document.createElement("li");
        liElement.classList.add("my-3")
        liElement.textContent = singleRsrchPub.publication ;
        ElTM_detail_memberReprPublications.appendChild(liElement);

      }



    }
  }
}
