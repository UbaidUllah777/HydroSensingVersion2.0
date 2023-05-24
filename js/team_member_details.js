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

for (const singleMember of teamMembers) {
  if (ELTM_detail_memberHeading) {
    if (singleMember.member_id == teamMember) {
      ELTM_detail_memberHeading.textContent = `${singleMember.member_heading}`;
      ElTM_detail_memberDesg.textContent = `${singleMember.member_designation}`;
      ElTM_detail_memberImage.setAttribute(
        "data-bg-src",
        `${singleMember.member_image}`
      );
      ElTM_detail_memberLinkedin.href = `${singleMember.member_Linkedin}`;
      ElTM_detail_memberTwitter.href = `${singleMember.member_Tiwtter}`;
      ElTM_detail_memberFacebook.href = `${singleMember.member_Facebook}`;
      for (const singlePara of singleMember.member_paragraphs) {
        const pElement = document.createElement("p");
        pElement.textContent = singlePara.paragraph;
        ElTM_detail_memberParas.appendChild(pElement);
      }
    }
  }
}
