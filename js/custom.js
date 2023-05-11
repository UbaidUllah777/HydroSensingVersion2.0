// *************** Loading Header to All pages : START ***************

const headerContent = `
<div class="header-body header-body-bottom-border border-top-0">
<div class="header-top">
  <div class="container">
    <div class="header-row">
      <div class="header-column justify-content-start">
        <div class="header-row">
          <ul class="list list-unstyled list-inline mb-0">
            <li id="idHeaderSales" class="list-inline-item text-color-dark me-4 mb-0">
             
            </li>
            <li id="idHeaderService"
              class="list-inline-item text-color-dark d-none d-sm-inline-block mb-0"
            >
            </li>
          </ul>
        </div>
      </div>
      <div class="header-column justify-content-end">
        <div class="header-row">
          <ul
            class="header-social-icons social-icons social-icons-clean d-none d-md-block"
          >
            <li id="idHeaderFacebook" class="social-icons-facebook">
              <a
              href="#"
              target="_blank"
              title="Facebook"
              ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li id="idHeaderTwitter" class="social-icons-twitter">
              <a
              href="#"
              target="_blank"
              title="Twitter"
              ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li id="idHeaderInstagram" class="social-icons-instagram">
              <a
              href="#"
              target="_blank"
              title="Instagram"
              ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
          
          <a href="contact.html"   class=" font-weight-bold btn btn-modern btn-primary btn-outline btn-arrow-effect-1 m-2" data-loading-text="Loading...">CONTACT US <i class="fas fa-arrow-right ms-2"></i></a>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div class="header-container container">
  <div class="header-row">
    <div class="header-column">
      <div class="header-row">
        <!-- HEADER LOGO -->
        <div class="header-logo">
          <a href="index.html">
            <img id="idHeaderLogo"
              src="img/dms/hydroSensing/logo.png"
              class="img-fluid"
              width="123"
              height="32"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div class="header-column justify-content-end">
      <div class="header-row">
        <div class="header-nav header-nav-links">
          <div
            class="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1"
          >
            <nav class="collapse">
              <ul  class="nav nav-pills" id="mainNav">
                  <!-- Home -->
                <li>
                  <a id="idHeaderLinkHome" href="index.html" class="nav-link"
                    >Home </a
                  >
                </li>
                <!-- About Us -->
                <li>
                  <a id="idHeaderLinkAboutUs" href="about-us.html" class="nav-link"
                    >About Us</a
                  >
                </li>
                <!-- Our Research  -->
                <li>
                  <a id="idHeaderLinkOurResearch" href="cases.html" class="nav-link"
                    >Our Research</a
                  >
                </li>
                <!-- Consultancy Services  -->
                <li>
                  <a id="idHeaderLinkConsultancyServices" href="services.html" class="nav-link"
                    >Consultancy Services</a
                  >
                </li>
                <!-- Resources DropDown :START -->
                <li class="dropdown">
                  <a class="dropdown-item dropdown-toggle" href="#">
                      Resources
                      <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                      <li>
                          <a class="dropdown-item" href="#">
                              Entrepreneurship
                            
                          </a>
                          <!-- <ul class="dropdown-menu">
                              <li>
                                  <a class="dropdown-item" href="#">
                                  Wide Slider
                                  </a>
                               </li>
                               <li>
                                  <a class="dropdown-item" href="#">
                                      Small Slider
                                  </a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="#">
                                      Full Width Slider
                                  </a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="#">
                                      Gallery
                                  </a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="#">
                                      Carousel
                                  </a>
                              </li>
                          </ul> -->
                      </li>
                      <li >
                          <a class="dropdown-item" href="#">
                              Opportunities 
      
                          </a>
                      </li>
                  </ul></li>	
                <!-- Resources DropDown :END -->
                
               
                <!-- Blogs -->
                <li>
                  <a id="idHeaderLinkBlogs" href="blog.html" class="nav-link"
                    >Blogs</a
                  >
                </li>
                
                <!-- Team -->
                <li>
                  <a id="idHeaderLinkTeam" href="team.html" class="nav-link"
                    >Team</a
                  >
                </li>
               
                <!-- <li>
                  <a id="idHeaderLinkContactUs" href="#" class="nav-link">
                      Contact Us
                  </a>
                </li> -->
              </ul>
            </nav>
          </div>
        </div>
   
        <button
          class="btn header-btn-collapse-nav"
          data-bs-toggle="collapse"
          data-bs-target=".header-nav-main nav"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</div>
`;

const header = document.getElementById('header');
if(header){
header.innerHTML = headerContent;
header.classList.add("header-effect-shrink"); // Add the 'header-effect-shrink' class
  
  var pluginOptions = { // Define the plugin options as an object
    'stickyEnabled': true,
    'stickyEffect': 'shrink',
    'stickyEnableOnBoxed': true,
    'stickyEnableOnMobile': false,
    'stickyChangeLogo': true,
    'stickyStartAt': 30,
    'stickyHeaderContainerHeight': 70
  };
  
  header.setAttribute("data-plugin-options", JSON.stringify(pluginOptions)); // Add the 'data-plugin-options' attribute with the plugin options as a string

}

// *************** Loading Header to All pages : END *****************