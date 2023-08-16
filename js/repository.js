const Elaccordion100 = document.getElementById("accordion100");

const allRepositories = [
  // Repository One
  {
    RepositoryCategory: "ToolsandSoftwares",
    RepositoryName: "Tools, Datasets and Softwares",
    RepositoryTopics: [
      //1st Topic in Repository one
      {
        topicID: "GlobalGlaciersMonitoringService",
        topicName: "Global Glaciers Monitoring Service",

        supportingLink: "https://wgms.ch/",
        topicDescription: ` "Are you interested in world glacier data? If yes,
         then there is huge data available at your fingertips. 
         The World Glacier Monitoring Services (WGMS) and organizations 
         under its umbrella are compiling and disseminating the standardized 
         glacial data. Download the WGMS app and other required data
         using the link below:WGMS app consists of glacier names 
         around the globe, glacial area,
         glacier status (decrease/increase in size), and much more.`,
        topicPdfDownloadPath:
          "Repositories/RepositoryOne/firstTopicRepoOne.pdf",
      },
      //2nd Topic in Repository one
      {
        topicID: "GlobalSPEIdataset",
        topicName: "Global SPEI dataset",

        supportingLink: "https://spei.csic.es/ ",
        topicDescription: `I am working on Drought characterization, transition,
           and propagation from one catchment to another using different
            statistical and machine learning models. Nowadays, trying to
            develop a new index for the Indus Basin of Pakistan. During my
            literature review, I came across a global SPEI (Standardized
               Precipitation Evapotranspiration Index). Researchers working in drought monitoring and assessment can use the global SPEI dataset for their studies. Global SPEI is developed using the temperature and precipitation data retrieved from Climate Research Unit (CRU), where water balance is estimated using the Thornthwaite equation. SPEI data is available from 1- to 48-month timescale. The datasets is available with 0.5-degree x 0.5-degree spatial resolution. The link to Global SPEI is given below.`,
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },

      //3rd Topic in Repository one
      {
        topicID: "GlobalRunoffDataCentre(GRDC)",
        topicName: "Global Runoff Data Centre (GRDC)",

        supportingLink:
          "https://portal.grdc.bafg.de/applications/public.html?publicuser=PublicUser#dataDownload/Subregions",
        topicDescription: `I am working on Drought characterization, transition, and
           propagation from one catchment to another using different statistical and machine
           learning models. Nowadays, trying to develop a new index for the Indus Basin of Pakistan.
           During my literature review, I came across a global SPEI (Standardized Precipitation
             Evapotranspiration Index). Researchers working in drought monitoring and assessment
              can use the global SPEI dataset for their studies. Global SPEI is developed
               using the temperature and precipitation data retrieved from Climate
                Research Unit (CRU), where water balance is estimated using the Thornthwaite
                equation. SPEI data is available from 1- to 48-month timescale.
                 The datasets is available with 0.5-degree x 0.5-degree spatial resolution.
                 The link to Global SPEI is given below.`,
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
    ],
  },

  // Repository two
  {
    RepositoryCategory: "CoursesandResearchPapers",
    RepositoryName: "Courses and Research Papers",
    RepositoryTopics: [
      //1st Topic in Repository two
      {
        topicID: "MachineLearningCourses and Tools",
        topicName: "Machine Learning Courses",

        supportingLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription: `Following are the useful youtube channels to learn machine learning.

          1. Machine Learning (ML) by Standford University
          2. ML
         3. Deep Learning (2018) by Standford University (materials are available in Syllabus)
         4. Applied ML
          5.Intro to ML
          6.Intro to ML2
          7.Statistical ML
         8. ML with Graphics by Standford University
          9.Probabilistic ML
          10. Codanics (In Urdu, which I enjoyed the most)`,
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
      //2nd Topic in Repository two
      {
        topicID: "Paperswithcode",
        topicName: "Papers with code",

        supportingLink: "https://paperswithcode.com/",
        topicDescription: `Papers with code is an extremely useful website that provides recent
         research articles with their codes. Just modify the codes
          according to your needs and use them.`,
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
      {
        topicID: "DatatoViz",
        topicName: "Data to Viz",

        supportingLink: "https://www.data-to-viz.com/",
        topicDescription: `If you are interested in creating beautiful graphs using R or Python language for your research articles, Data to Viz is one of my
         favorite websites. Please explore and share with your colleagues.`,
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
    ],
  },

  // Repository three
  {
    RepositoryCategory: "Repositorythree",
    RepositoryName: "Repository &nbsp Three",
    RepositoryTopics: [
      //1st Topic in Repository three
      {
        topicID: "firstTopicRepothree",
        topicName: "First Topic",

        supportingLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
      //2nd Topic in Repository three
      {
        topicID: "secondTopicRepothree",
        topicName: "Second  Topic",

        supportingLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },

      //3rd Topic in Repository three
      {
        topicID: "thirdTopicRepothree",
        topicName: "Third  Topic",

        supportingLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
    ],
  },
];

for (const singleCategory of allRepositories) {
  Elaccordion100.innerHTML += `
    <div class="card card-default">
    <div class="card-header" id="collapseHeading${singleCategory.RepositoryCategory}">
      <h4 class="card-title m-0">
        <a class="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#${singleCategory.RepositoryCategory}" aria-expanded="false" aria-controls="${singleCategory.RepositoryCategory}">
          ${singleCategory.RepositoryName}
        </a>
      </h4>
    </div>
    <div id="${singleCategory.RepositoryCategory}" class="collapse" aria-labelledby="collapseHeading${singleCategory.RepositoryCategory}" data-bs-parent="#accordion100" style="">
      <div id="${singleCategory.RepositoryCategory}CardBody" class="card-body">
        </div>
    </div>
  </div>
    
    `;
}

for (const singleRepositoryCateg of allRepositories) {
  if (
    document.getElementById(
      `${singleRepositoryCateg.RepositoryCategory}CardBody`
    ).id ==
    singleRepositoryCateg.RepositoryCategory + "CardBody"
  ) {
    for (singleTopic of singleRepositoryCateg.RepositoryTopics) {
      document.getElementById(
        `${singleRepositoryCateg.RepositoryCategory}CardBody`
      ).innerHTML += `
        <div class="row">
        <div class="col-lg-8">
        <article
          class="custom-post-event bg-color-light custom-sm-margin-bottom-2 mb-5"
          style="position: relative"
        >
      
          <div class="post-event-content">
            <h4 class="font-weight-bold text-color-dark">
              <a
                href="${singleTopic.topicPdfDownloadPath}"
                class="text-decoration-none custom-secondary-font text-color-dark"
              >
              ${singleTopic.topicName}
              </a>
            </h4>
            <p class="topicDescription">
             ${singleTopic.topicDescription}
            </p>
            <a
            href="${singleTopic.supportingLink}" target="_blank"
            class="text-decoration-none custom-secondary-font text-color-primary"
          > <span><i class="fa-solid fa-link" style="color: #0091ce;"></i></span> Supporting Link
          </a>
           
          </div>
          
        </article>
      </div>
      <div class="col-lg-4">
      <ul style="list-style: none" class="mt-5">
      <li>
        <a
          href="${singleTopic.topicPdfDownloadPath}" 
          class="btn btn-outline btn-primary btn-with-arrow mb-2"
          >Download PDF<span><i class="fas fa-download"></i></span
        ></a>
      </li>
    </ul>
      </div>
      </div>
      <hr class="solid" />
        `;
    }
  }
}
