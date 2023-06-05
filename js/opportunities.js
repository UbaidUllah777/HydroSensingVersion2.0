const Allopportunities=[
    // opportunity1
    {
        opportunityId:"opportunity1",
        opportunityHeading:"opportunity One",
        opportunityLinks:[
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
        ],
        opportunityParas:[
            {
                opportunitypara:"Eu magna minim excepteur est ullamco esse eiusmod fugiat enim. Exercitation elit Lorem ut sunt incididunt velit deserunt excepteur consectetur exercitation laborum eiusmod consequat. Laboris sit deserunt ullamco ut nisi amet eiusmod sint ipsum occaecat voluptate duis. Amet aliquip sint adipisicing quis tempor cillum in et ut aliqua nostrud consectetur laborum do. Consectetur dolor non non proident commodo sint. In veniam adipisicing est consequat dolore veniam duis."
            },
            {
                opportunitypara:"Irure nulla minim sit reprehenderit exercitation minim Lorem aute aute non excepteur. Nostrud consectetur do do veniam ad enim. Veniam cupidatat nisi officia tempor. Officia sunt nisi et reprehenderit nisi est esse reprehenderit mollit occaecat esse in amet excepteur. Non pariatur consectetur enim do incididunt. Tempor velit proident enim minim ullamco. Elit Lorem anim amet culpa aute quis."
            },
            {
                opportunitypara:"Veniam ad magna sunt nulla aliquip eiusmod cupidatat. Anim minim consectetur excepteur cupidatat laboris aliqua commodo. Laboris consectetur amet velit irure voluptate labore reprehenderit cillum. Pariatur esse exercitation cupidatat est excepteur occaecat consectetur ipsum tempor. Nulla incididunt tempor incididunt adipisicing ex Lorem excepteur enim."
            },
        ]
    },
    // opportunity2
    {
        opportunityId:"opportunity2",
        opportunityHeading:"opportunity Two",
        opportunityLinks:[
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
        ],
        opportunityParas:[
            {
                opportunitypara:"Eu magna minim excepteur est ullamco esse eiusmod fugiat enim. Exercitation elit Lorem ut sunt incididunt velit deserunt excepteur consectetur exercitation laborum eiusmod consequat. Laboris sit deserunt ullamco ut nisi amet eiusmod sint ipsum occaecat voluptate duis. Amet aliquip sint adipisicing quis tempor cillum in et ut aliqua nostrud consectetur laborum do. Consectetur dolor non non proident commodo sint. In veniam adipisicing est consequat dolore veniam duis."
            },
            {
                opportunitypara:"Irure nulla minim sit reprehenderit exercitation minim Lorem aute aute non excepteur. Nostrud consectetur do do veniam ad enim. Veniam cupidatat nisi officia tempor. Officia sunt nisi et reprehenderit nisi est esse reprehenderit mollit occaecat esse in amet excepteur. Non pariatur consectetur enim do incididunt. Tempor velit proident enim minim ullamco. Elit Lorem anim amet culpa aute quis."
            },
        ]
    },
    // opportunity3
    {
        opportunityId:"opportunity3",
        opportunityHeading:"opportunity Three",
        opportunityLinks:[
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
            {
                opportunityHeading:"Link Heading",
                opportunityLink:"#",
            },
        ],
        opportunityParas:[
            {
                opportunitypara:"Eu magna minim excepteur est ullamco esse eiusmod fugiat enim. Exercitation elit Lorem ut sunt incididunt velit deserunt excepteur consectetur exercitation laborum eiusmod consequat. Laboris sit deserunt ullamco ut nisi amet eiusmod sint ipsum occaecat voluptate duis. Amet aliquip sint adipisicing quis tempor cillum in et ut aliqua nostrud consectetur laborum do. Consectetur dolor non non proident commodo sint. In veniam adipisicing est consequat dolore veniam duis."
            },
            {
                opportunitypara:"Irure nulla minim sit reprehenderit exercitation minim Lorem aute aute non excepteur. Nostrud consectetur do do veniam ad enim. Veniam cupidatat nisi officia tempor. Officia sunt nisi et reprehenderit nisi est esse reprehenderit mollit occaecat esse in amet excepteur. Non pariatur consectetur enim do incididunt. Tempor velit proident enim minim ullamco. Elit Lorem anim amet culpa aute quis."
            },
            {
                opportunitypara:"Veniam ad magna sunt nulla aliquip eiusmod cupidatat. Anim minim consectetur excepteur cupidatat laboris aliqua commodo. Laboris consectetur amet velit irure voluptate labore reprehenderit cillum. Pariatur esse exercitation cupidatat est excepteur occaecat consectetur ipsum tempor. Nulla incididunt tempor incididunt adipisicing ex Lorem excepteur enim."
            },
        ]
    },
]


const Elaccordion1=document.getElementById("accordion1");

var opportunityCount=1;
        for (const opportunity of Allopportunities) {
            const opportunityCard=`
                                    
                        <div class="card card-default">
                        <div class="card-header" id="collapse1Heading${opportunityCount}">
                        <h4 class="card-title m-0">
                            <a
                            class="accordion-toggle text-color-dark font-weight-bold collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${opportunityCount}One"
                            aria-expanded="false"
                            aria-controls="collapse${opportunityCount}One"
                            >
                            ${opportunityCount} - ${opportunity.opportunityHeading}
                            </a>
                        </h4>
                        </div>
                        <div
                        id="collapse${opportunityCount}One"
                        class="collapse"
                        aria-labelledby="collapse1Heading${opportunityCount}"
                        data-bs-parent="#accordion1"
                        >
                        <div id="accordingBody${opportunityCount}" class="card-body">
                          
                        </div>
                        </div>
                        </div>
            `;
            Elaccordion1.innerHTML += opportunityCard;
            const ElaccordingBodyId= document.getElementById("accordingBody"+opportunityCount);

            for(const opportunityPara of opportunity.opportunityParas){
                const pElement = document.createElement("p");
                pElement.classList.add("mb-1");
                pElement.textContent = opportunityPara.opportunitypara; // Access the 'paragraph' property
                ElaccordingBodyId.appendChild(pElement);
            }

            opportunityCount=opportunityCount+1

        }