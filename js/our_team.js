// *** ALL DATA of Our Focus Area : Start ***
const teamMembers = [
  // *** Dr khalil ur rehaman profile ***
  {
    member_id: "DrKhalilUrRahman",
    member_heading: "Dr. Khalil Ur Rahman",
    member_designation: "Senior Researcher and Founder",
    member_image: "img/team/Dr-Khalil.jpg",
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
    member_email: "",
    member_Google_scholar: "",

    member_paragraphs: [
      {
        paragraph:
          "Dr. Khalil Ur Rahman has obtained his Ph.D. degree from the Department of Hydraulic Engineering, Tsinghua University. Dr. Khalil has more than 7 years of research experience in hydrology, GIS and Remote Sensing in prestigious institutes, including Tsinghua University (ranked 14th in QS ranking 2023) and King Abdulaziz University (ranked 106th in QS ranking 2023). Dr. Khalil is working in collaboration with different international and national universities, including King Abdulaziz University, Wuhan University, King Saud University, University of Engineering and Technology (UET) Peshawar, National University of Sciences and Technology (NUST), and International Islamic University Islamabad (IIUI). He Co-PI in several projects sponsored by the Higher Education Commission (HEC) of Pakistan and State Key Laboratories in Tsinghua and Wuhan Universities of China. He is the Advisory Board Member of Ecological Indicators, and reviewer of world-leading high impact journals such as Journal of Hydrology, Atmospheric Research, Hydrological Sciences Journal, Environmental Research Letters, Geocarto International, Remote Sensing, Water, and Atmosphere, etc.",
      },
      {
        paragraph: "",
      },
      {
        paragraph: "",
      },
    ],
  },

  // *** Dr Dr.-Shang profile ***
  {
    member_id: "DrSonghaoShang",
    member_heading: "Dr. Songhao Shang",
    member_designation: "Professor",
    member_image: "img/team/Dr.-Shang.jpg",
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_image: "img/team/Dr.sajjad Haider.jpg",
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_id: "ProfDrHamzaFarooqGabriel",
    member_heading: "Prof Dr Hamza Farooq Gabriel",
    member_designation: "Professor",
    member_image: "img/team/ProfDrHamzaFarooqGabriel.jpg",
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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
    member_image: "img/team/Mr. Nuaman Ejaz.jpg",
    member_Linkedin: "",
    member_Tiwtter: "",
    member_Facebook: "",
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

const stage = document.getElementById("owlStage");
for (const singleMember of teamMembers) {
  if (stage) {
    let item = document.createElement("div");
    item.classList.add("owl-item", "active");
    item.style.cssText = "width: 410.5px; padding-left: 5px;";

    item.innerHTML = `
        <div>
										<a href="team.html#john" class="custom-link-hover-effects text-decoration-none" data-cursor-effect-hover="plus">
											<div class="card border-0">
												<div class="card-img-top position-relative overlay">
													<div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
														<div class="custom-crooked-line">
															<img width="154" height="26" src="img/dms/hydroSensing/icons/infinite-crooked-line.svg" alt="" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}" style="width: 154px;" />
														</div>
													</div>
													<img src="img/dms/hydroSensing/team/team-1.jpg" class="img-fluid" alt="John Doe" />
												</div>
												<div class="card-body">
													<h4 class="text-color-hover-primary text-6 mb-0">Dr. Khalil Ur Rahman</h4>
													<p class="text-3-5 mb-0">Senior Researcher and Founder </p>
												</div>
											</div>
										</a>
									</div>`;

    stage.appendChild(item);
  }
}
