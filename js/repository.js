const Elaccordion100 = document.getElementById("accordion100");

const allRepositories = [
  // Repository One
  {
    RepositoryCategory: "RepositoryOne",
    RepositoryName: "Repository &nbsp One",
    RepositoryTopics: [
      //1st Topic in Repository one
      {
        topicID: "firstTopicRepoOne",
        topiName: "First Topic",

        day: "03",
        month: "JAN",
        year: "2022",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath:
          "Repositories/RepositoryOne/firstTopicRepoOne.pdf",
      },
      //2nd Topic in Repository one
      {
        topicID: "secondTopicRepoOne",
        topiName: "Second  Topic",

        day: "12",
        month: "JUL",
        year: "2023",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },

      //3rd Topic in Repository one
      {
        topicID: "thirdTopicRepoOne",
        topiName: "Third  Topic",

        day: "01",
        month: "JUL",
        year: "2023",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
    ],
  },

  // Repository two
  {
    RepositoryCategory: "Repositorytwo",
    RepositoryName: "Repository &nbsp Two",
    RepositoryTopics: [
      //1st Topic in Repository two
      {
        topicID: "firstTopicRepotwo",
        topiName: "First Topic",

        day: "11",
        month: "APR",
        year: "2020",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
      //2nd Topic in Repository two
      {
        topicID: "secondTopicRepotwo",
        topiName: "Second  Topic",

        day: "12",
        month: "JUL",
        year: "2023",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
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
        topiName: "First Topic",

        day: "03",
        month: "JAN",
        year: "2022",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },
      //2nd Topic in Repository three
      {
        topicID: "secondTopicRepothree",
        topiName: "Second  Topic",

        day: "12",
        month: "JUL",
        year: "2023",

        YoutubeVidioLink:
          "https://www.youtube.com/watch?v=Bbs_OfyWm6o&pp=ygUNaHlkcm8gc2Vuc2luZw%3D%3D",
        topicDescription:
          "Laborum qui laborum culpa sit ad sit non deserunt nisi eu occaecat. Et deserunt pariatur exercitation sint pariatur labore laboris proident ex consectetur adipisicing ipsum laboris. Aute consectetur reprehenderit laboris nostrud culpa in nulla. Lorem do mollit nostrud qui aute veniam reprehenderit. Fugiat pariatur aliquip dolore elit adipisicing aliqua reprehenderit.",
        topicPdfDownloadPath: "Repositories/RepositoryName/fileName.pdf",
      },

      //3rd Topic in Repository three
      {
        topicID: "thirdTopicRepothree",
        topiName: "Third  Topic",

        day: "01",
        month: "JUL",
        year: "2023",

        YoutubeVidioLink:
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
    for (singleSoftware of singleRepositoryCateg.RepositoryTopics) {
      document.getElementById(
        `${singleRepositoryCateg.RepositoryCategory}CardBody`
      ).innerHTML += `
        <div class="row">
        <div class="col-lg-8">
        <article
          class="custom-post-event bg-color-light custom-sm-margin-bottom-2 mb-5"
          style="position: relative"
        >
          <div class="post-event-date bg-color-primary text-center">
            <span
              class="month text-uppercase custom-secondary-font text-color-light"
              >${singleSoftware.month}</span
            >
            <span class="day font-weight-bold text-color-light"
              >${singleSoftware.day}</span
            >
            <span class="year text-color-light">${singleSoftware.year}</span>
          </div>
          <div class="post-event-content custom-margin-1">
            <h4 class="font-weight-bold text-color-dark">
              <a
                href="${singleSoftware.topicPdfDownloadPath}"
                class="text-decoration-none custom-secondary-font text-color-dark"
              >
              ${singleSoftware.topiName}
              </a>
            </h4>
            <p class="topicDescription">
             ${singleSoftware.topicDescription}
            </p>
            <a
            href="${singleSoftware.YoutubeVidioLink}" target="_blank"
            class="text-decoration-none custom-secondary-font text-color-primary"
          > <span><i class="fa-brands fa-youtube" style="color: #d5151f;"></i></span> Youtube Video Link
          </a>
           
          </div>
          
        </article>
      </div>
      <div class="col-lg-4">
      <ul style="list-style: none" class="mt-5">
      <li>
        <a
          href="${singleSoftware.topicPdfDownloadPath}" 
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
