const Elaccordion100 = document.getElementById("accordion100");

const allOpportunities = [
  // 1.	Job/Postdoc opportunities
  {
    OpportunityCategory: "JobPostdocopportunities",
    OpportunityName: "Job / Postdoc Opportunities",
    Opportunities: [],
  },

  //------ 2.	PhD Opportunities -------------
  {
    OpportunityCategory: "PhDOpportunities",
    OpportunityName: "PhD Opportunities",
    Opportunities: [
      //1st Oppotunity
      {
        OpportunityID: "PhDOpportunityOne",
        OpportunityName: "PhD Opportunity One",

        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },

      //2nd Oppotunity
      {
        OpportunityID: "PhDOpportunitytwo",
        OpportunityName: "PhD Opportunity Two",

        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },

      //3rd Oppotunity
      {
        OpportunityID: "PhDOpportunityThree",
        OpportunityName: "PhD Opportunity Three",
        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },
    ],
  },

  // 3.	Master Opportunities
  {
    OpportunityCategory: "MasterOpportunities",
    OpportunityName: "Master Opportunities",
    Opportunities: [
      //1st Oppotunity
      {
        OpportunityID: "MasterOpportunityOne",
        OpportunityName: "Master Opportunity One",
        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },
    ],
  },

  // 4.	Mentorship Opportunities
  {
    OpportunityCategory: "Mentorship",
    OpportunityName: "Mentorship",
    Opportunities: [
      //1st Oppotunity
      {
        OpportunityID: "MentorshipOne",
        OpportunityName: "Mentorship Opportunity One",

        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },

      //2nd Oppotunity
      {
        OpportunityID: "MentorshipTwo",
        OpportunityName: "Mentorship Opportunity Two",
        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },
    ],
  },

  // 5.	Conferences
  {
    OpportunityCategory: "Conferences",
    OpportunityName: "Conferences",
    Opportunities: [
      //1st Conference
      {
        OpportunityID: "ConferencesOne",
        OpportunityName: "Conference One",

        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },

      //2nd Conference
      {
        OpportunityID: "ConferenceTwo",
        OpportunityName: "Conference Two",

        OpportunityLink: "#",
        OpportunityDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
      },
    ],
  },
];

for (const singleCategory of allOpportunities) {
  Elaccordion100.innerHTML += `
    <div class="card card-default">
    <div class="card-header" id="collapseHeading${singleCategory.OpportunityCategory}">
      <h4 class="card-title m-0">
        <a class="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#${singleCategory.OpportunityCategory}" aria-expanded="false" aria-controls="${singleCategory.OpportunityCategory}">
          ${singleCategory.OpportunityName}
        </a>
      </h4>
    </div>
    <div id="${singleCategory.OpportunityCategory}" class="collapse" aria-labelledby="collapseHeading${singleCategory.OpportunityCategory}" data-bs-parent="#accordion100" style="">
      <div id="${singleCategory.OpportunityCategory}CardBody" class="card-body">
        </div>
    </div>
  </div>
    
    `;
}

for (const singleOpportunityCateg of allOpportunities) {
  if (
    document.getElementById(
      `${singleOpportunityCateg.OpportunityCategory}CardBody`
    ).id ==
    singleOpportunityCateg.OpportunityCategory + "CardBody"
  ) {
    if (singleOpportunityCateg.Opportunities.length === 0) {
      document.getElementById(
        `${singleOpportunityCateg.OpportunityCategory}CardBody`
      ).innerHTML += `
        <div class="row">
          <div class="col">
            <article
              class="custom-post-event bg-color-light custom-sm-margin-bottom-2 mb-5"
              style="position: relative"
            >
              <div class="post-event-content">
                <center><h5 class="pt-2 pb-2 font-weight-bold text-color-dark"> Currently No Opportunity Available in :  <span style="color:red">${singleOpportunityCateg.OpportunityName} </span> </h5></center>
              </div>
            </article>
          </div>
        </div>
      `;
    } else {
      for (const singleOpportunity of singleOpportunityCateg.Opportunities) {
        document.getElementById(
          `${singleOpportunityCateg.OpportunityCategory}CardBody`
        ).innerHTML += `
        <div class="row">
        <div class="col">
        <article
          class="custom-post-event bg-color-light custom-sm-margin-bottom-2 mb-5"
          style="position: relative"
        >
          
          <div class="post-event-content ">
            <h4 class="font-weight-bold text-color-dark">
            
              ${singleOpportunity.OpportunityName}
              </a>
            </h4>
            <p class="OpportunityDescription">
             ${singleOpportunity.OpportunityDescription}
            </p>
            <a
            href="${singleOpportunity.OpportunityLink}" target="_blank"
            class="text-decoration-none custom-secondary-font text-color-primary"
          > <span><i class="fa-solid fa-link" style="color: #0091ce;"></i></span> Opportunity Link
          </a>
           
          </div>
          
        </article>
      </div>
     
      </div>
      <hr class="solid" />        
          `;
      }
    }
  }
}
