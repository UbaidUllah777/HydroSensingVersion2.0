// *** ALL DATA of Our Focus Area : Start ***
const teamMembers = [
  // *** Dr khalil ur rehaman profile ***
  {
    member_id: "DrKhalilUrRahman",
    member_heading: "Dr. Khalil Ur Rahman",
    member_designation: "Senior Researcher and Founder",
    member_image: "img/team/DrKhalil.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph:
          "Dr. Khalil Ur Rahman has obtained his Ph.D. degree from the Department of Hydraulic Engineering, Tsinghua University. Dr. Khalil has more than 7 years of research experience in hydrology, GIS and Remote Sensing in prestigious institutes, including Tsinghua University (ranked 14th in QS ranking 2023) and King Abdulaziz University (ranked 106th in QS ranking 2023). Dr. Khalil is working in collaboration with different international and national universities, including King Abdulaziz University, Wuhan University, King Saud University, University of Engineering and Technology (UET) Peshawar, National University of Sciences and Technology (NUST), and International Islamic University Islamabad (IIUI). He Co-PI in several projects sponsored by the Higher Education Commission (HEC) of Pakistan and State Key Laboratories in Tsinghua and Wuhan Universities of China. He is the Advisory Board Member of Ecological Indicators, and reviewer of world-leading high impact journals such as Journal of Hydrology, Atmospheric Research, Hydrological Sciences Journal, Environmental Research Letters, Geocarto International, Remote Sensing, Water, and Atmosphere, etc.",
      },
      {
        paragraph:
          "Quis duis voluptate nisi reprehenderit reprehenderit. Anim do officia non ipsum sit ea culpa velit in consectetur ut et. Anim consequat duis ad sunt excepteur sint dolore consequat. Duis elit nulla officia officia elit esse nisi nulla. Officia velit culpa minim id. Pariatur aliquip labore esse consequat aliqua duis incididunt deserunt eu pariatur eu minim.",
      },
      {
        paragraph:
          "Qui duis officia ullamco in laborum Lorem reprehenderit amet do excepteur Lorem. Commodo magna est non irure anim ad adipisicing laborum aute aute enim aute consequat. Labore ullamco aute reprehenderit adipisicing sint labore nostrud eiusmod occaecat sint ad fugiat in commodo. Aute do tempor dolor enim. Ullamco fugiat aliqua minim consequat sunt. Minim est dolore laborum elit minim enim exercitation deserunt aliqua exercitation. Cillum sint esse minim ad duis.",
      },
    ],
  },

  // *** Dr Dr.-Shang profile ***
  {
    member_id: "DrSonghaoShang",
    member_heading: "Dr. Songhao Shang",
    member_designation: "Professor",
    member_image: "img/team/Dr.-Shang.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr Sajjad Haider profile ***
  {
    member_id: "DrSajjadHaider",
    member_heading: "Dr.sajjad Haider",
    member_designation: "Assistant Professor",
    member_image: "img/team/Dr.sajjadHaider.jpeg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr Shahid profile ***
  {
    member_id: "DrShahid",
    member_heading: "Dr. Shahid",
    member_designation: "Assistant Professor",
    member_image: "img/team/Dr-Shahid.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr. Jabbar profile ***
  {
    member_id: "DrJabbar",
    member_heading: "Dr. Jabbar",
    member_designation: "Assistant Professor",
    member_image: "img/team/Dr.-Jabbar.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr ProfDrHamzaFarooqGabriel profile ***
  {
    member_id: "DrHamzaFarooqGabriel",
    member_heading: "Dr Hamza Farooq Gabriel",
    member_designation: "Professor",
    member_image: "img/team/ProfDrHamzaFarooqGabriel.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr Pham profile ***
  {
    member_id: "DrPham",
    member_heading: "Dr. Pham",
    member_designation: "Professor",
    member_image: "img/team/Pham.jpg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Mr Nouman  profile ***
  {
    member_id: "MrNuamanEjaz",
    member_heading: "Mr. Nuaman Ejaz",
    member_designation: "Lecturer",
    member_image: "img/team/Mr-NuamanEjaz.jpeg",
    member_Linkedin: "#",
    member_Tiwtter: "#",
    member_Facebook: "#",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },
];
// *** ALL DATA of Our Focus Area : END ***

const ElindexTeamMemRow = document.getElementById("indexTeamMemRow");
const firstFourTeammembers = teamMembers.slice(0, 4);
for (const singleTeamMember of firstFourTeammembers) {
  if (ElindexTeamMemRow) {
    const singleMemberData = `
    <div class="col-md-3 col-sm-6">
    <div class="our-team">
    <a  onclick="setTeamMemberid('${singleTeamMember.member_id}')" href="team-member-detail.html" class=" text-decoration-none">
        <div class="pic">
            <img src="${singleTeamMember.member_image}" alt="${singleTeamMember.member_heading}">
        </div>
       
          <h4 class="title  text-color-hover-secondary ">${singleTeamMember.member_heading}</h4>
        </a>
        <span class="post">${singleTeamMember.member_designation}</span>
        <ul  class="pt-2 pb-2  social-icons social-icons-clean social-icons-clean-with-border social-icons-small">
        <li class=" TeamMemberSocial social-icons-facebook"><a style="background: #3b5a9a  !important;"  href="${singleTeamMember.member_Facebook}" target="_blank" title="Facebook" data-cursor-effect-hover="fit"><i class="fab fa-facebook-f"></i></a></li>
        <li class=" TeamMemberSocial social-icons-twitter mx-2"><a  style="background: #1aa9e1  !important;"  href="${singleTeamMember.member_Tiwtter}" target="_blank" title="Twitter" data-cursor-effect-hover="fit"><i class="fab fa-twitter"></i></a></li>
        <li class=" TeamMemberSocial social-icons-linkedin "><a style="background: #0073b2 !important;" href="${singleTeamMember.member_Linkedin}" target="_blank" title="Linkedin" data-cursor-effect-hover="fit"><i class="fab fa-linkedin-in"></i></a></li>
       </ul>
    </div>
</div>
    
    `;
    ElindexTeamMemRow.innerHTML += singleMemberData;
  }
}

const ElTeamPageMemRow = document.getElementById("TeamPageMemRow");
for (const singleMember of teamMembers) {
  if (ElTeamPageMemRow) {
    const singleMemberitem = `
    <div class="col-md-3 col-sm-6 my-3">
    <div class="our-team">
    <a  onclick="setTeamMemberid('${singleMember.member_id}')" href="team-member-detail.html" class=" text-decoration-none">
        <div class="pic">
            <img src="${singleMember.member_image}" alt="${singleMember.member_heading}">
        </div>
       
          <h4 class="title  text-color-hover-secondary ">${singleMember.member_heading}</h4>
        </a>
        <span class="post">${singleMember.member_designation}</span>
        <ul  class="pt-2 pb-2  social-icons social-icons-clean social-icons-clean-with-border social-icons-small">
        <li class=" TeamMemberSocial social-icons-facebook"><a style="background: #3b5a9a  !important;"  href="${singleMember.member_Facebook}" target="_blank" title="Facebook" data-cursor-effect-hover="fit"><i class="fab fa-facebook-f"></i></a></li>
        <li class=" TeamMemberSocial social-icons-twitter mx-2"><a  style="background: #1aa9e1  !important;"  href="${singleMember.member_Tiwtter}" target="_blank" title="Twitter" data-cursor-effect-hover="fit"><i class="fab fa-twitter"></i></a></li>
        <li class=" TeamMemberSocial social-icons-linkedin "><a style="background: #0073b2 !important;" href="${singleMember.member_Linkedin}" target="_blank" title="Linkedin" data-cursor-effect-hover="fit"><i class="fab fa-linkedin-in"></i></a></li>
       </ul>
    </div>
</div>
    
    `;
    ElTeamPageMemRow.innerHTML += singleMemberitem;
  }
}

function setTeamMemberid(getMemberId) {
  sessionStorage.setItem("ClickedMember", getMemberId);
}
