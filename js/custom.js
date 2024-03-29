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
              href="https://www.facebook.com/hydrosensing"
              target="_blank"
              title="Facebook"
              ><i class="fab fa-facebook-f "></i
              ></a>
            </li>
            <li id="idHeaderTwitter" class="social-icons-twitter">
              <a
              href="https://twitter.com/HydroSensing"
              target="_blank"
              title="Twitter"
              ><i class="fab fa-twitter "></i
              ></a>
            </li>
            <li id="idHeaderInstagram" class="social-icons-linkedin">
              <a
              href="#"
              target="_blank"
              title="Linkedin"
              ><i class="fab fa-linkedin "></i
              ></a>
            </li>

            <li id="idHeaderInstagram" class="social-icons-youtube">
              <a
              href="https://www.youtube.com/@HydroSensing"
              target="_blank"
              title="Youtube"
              ><i class="fab fa-youtube "></i
              ></a>
            </li>
          </ul>
          
          <a href="contact.html"   class=" font-weight-bold btn btn-modern btn-primary btn-outline btn-arrow-effect-1 m-2" data-loading-text="Loading...">CONTACT US <i class="fas fa-arrow-right ms-2"></i></a>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div class="header-container container-fluid">
  <div class="header-row">
    <div class="header-column">
      <div class="header-row">
        <!-- HEADER LOGO -->
        <div class="header-logo mx-lg-2">
          <a href="index.html">
            <img id="idHeaderLogo"
              src="img/dms/hydroSensing/logo.png"
              class="img-fluid"
              width="90"
              height="auto"
          
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
                <!-- About Us DropDown :START -->
                <li class="dropdown">
                  <a id="idHeaderLinkAboutUs" class="dropdown-item dropdown-toggle" href="#">
                      About Us
                      <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                     
                      <li >
                          <a  class="dropdown-item" href="about-us.html">
                              Who We Are
      
                          </a>
                      </li>
                      <li>
                      <a class="dropdown-item" href="team.html">
                          Our Team
                        
                      </a>
                      
                  </li>
                  </ul></li>	
                <!-- About Us DropDown :END -->

                </li>
                <!-- Services -->
                <li>
                  <a id="idHeaderLinkServices" href="services.html" class="nav-link"
                    >Consultancy Services</a
                  >
                </li>

                <!-- Focus Areas -->
                <li>
                  <a id="idHeaderLinkConsultancyServices" href="focus-area.html" class="nav-link"
                    >Focus Areas</a
                  >
                </li>

                <!-- Research Projects  -->
                <li>
                  <a id="idHeaderLinkOurResearch" href="research-projects.html" class="nav-link"
                    >Research Projects</a
                  >
                </li>
               
                <!-- Resources DropDown :START -->
                <li class="dropdown">
                  <a id="idHeaderLinkresources" class="dropdown-item dropdown-toggle" href="#">
                      Resources
                      <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                      <li>
                          <a class="dropdown-item" href="repository.html">
                         Repository 
                            
                          </a>
                          
                      </li>
                      <li >
                          <a  class="dropdown-item" href="opportunities.html">
                              Opportunities 
      
                          </a>
                      </li>
                  </ul></li>	
                <!-- Resources DropDown :END -->
                
               
                <!-- Blogs -->
                <li>
                  <a id="idHeaderLinkBlogs" href="blog.html" class="nav-link"
                    >Our Blogs</a
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

const header = document.getElementById("header");
if (header) {
  header.innerHTML = headerContent;
  header.classList.add("header-effect-shrink"); // Add the 'header-effect-shrink' class

  var pluginOptions = {
    // Define the plugin options as an object
    stickyEnabled: true,
    stickyEffect: "shrink",
    stickyEnableOnBoxed: true,
    stickyEnableOnMobile: false,
    stickyChangeLogo: false,
    stickyStartAt: 120,
    stickyHeaderContainerHeight: 70,
  };

  header.setAttribute("data-plugin-options", JSON.stringify(pluginOptions)); // Add the 'data-plugin-options' attribute with the plugin options as a string
}

// *************** Loading Header to All pages : END *****************

// *************** Loading footer to All pages : START ***************

const footerContent = `
<div class="container pt-3">
<div class="row justify-content-between align-items-center py-5 mb-3">
  <div class="col-lg-7 mb-4 mb-lg-0">
    <h2 class="font-weight-normal text-color-light text-7 ls-0 mb-0">Let's Explore 
    <strong>HydroSensing</strong> with Us </h2>
  </div>
  <div class="col-lg-4 col-sm-8 pt-2">
  <div class="newsletter">
  <div class="alert alert-success d-none" id="newsletterSuccess">
    <strong>Success!</strong> You've been added to our email list.
  </div>
  <div class="alert alert-danger d-none" id="newsletterError"></div>
  <form id="newsletterForm" action="https://hydrosensing4u.us13.list-manage.com/subscribe/post?u=329e472ea1d5d2647945de70c&amp;id=62e62740e6&amp;f_id=00522ee5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mb-4-5" target="_blank"  >
  <div class="input-group">
    <input style="padding-top:0px; padding-bottom:0px" class="form-control border-0 required email" placeholder="Subscribe Now..."type="email" name="EMAIL"  id="mce-EMAIL" required="" value="">
    <button class="btn btn-primary px-3" type="submit" name="subscribe" id="mc-embedded-subscribe"  value="Subscribe">
      <img width="27" height="27" src="img/dms/hydroSensing/icons/arrow-right.svg" alt="" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}" style="width: 27px;" />
    </button>
		<div id="mce-responses" class="clear foot">
			<div class="response" id="mce-error-response" style="display: none;"></div>
			<div class="response" id="mce-success-response" style="display: none;"></div>
		</div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
	  /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
	  <input type="text" name="b_329e472ea1d5d2647945de70c_62e62740e6" tabindex="-1" value="">
  </div>
  </div>
  </form>
</div>
  </div>
</div>
<hr class="bg-color-light opacity-1 my-0">
<div class="row pt-3 mt-5">
  <div class="col-lg-4 mb-4 mb-lg-0">
    <a href="index.html" class="text-decoration-none">
      <img src="img/dms/hydroSensing/logo.png" class="img-fluid mb-4" width="123" height="33" alt="" />
    </a>
    <p class="text-3-5">Top Notch Consulting, Research and Development Firm to Fullfil your Hydro Research & Consultancy Needs and Requirements. </p>
    <ul class="social-icons social-icons-clean social-icons-clean-with-border social-icons-medium social-icons-icon-light">
      <li class="social-icons-facebook"><a href="https://www.facebook.com/hydrosensing" target="_blank" title="Facebook" data-cursor-effect-hover="fit"><i class="fab fa-facebook-f"></i></a></li>
      <li class="social-icons-twitter mx-2"><a href="https://twitter.com/HydroSensing" target="_blank" title="Twitter" data-cursor-effect-hover="fit"><i class="fab fa-twitter"></i></a></li>
      <li class="social-icons-linkedin "><a href="http://www.linkedin.com/" target="_blank" title="Linkedin" data-cursor-effect-hover="fit"><i class="fab fa-linkedin-in"></i></a></li>
    
      <li class="social-icons-youtube mx-2 "><a href="https://www.youtube.com/@HydroSensing" target="_blank" title="Youtube" data-cursor-effect-hover="fit"><i class="fab fa-youtube"></i></a></li>
  </ul>
      </div>
  <div class="col-lg-5 mb-4 mb-lg-0">
    <ul class="list list-icons list-icons-lg">
      <li class="d-flex px-0 mb-1">
        <img width="25" src="img/dms/hydroSensing/icons/phone.svg" alt="Phone Icon" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}" />
        <a href="tel:+8618600955977" class=" font-weight-normal text-3-4 ms-2">	
                              +86-18600955977</a>
      </li>
      <li class="d-flex px-0 my-3">
        <img width="25" src="img/dms/hydroSensing/icons/email.svg" alt="Email Icon" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}" />
        <a href="mailto:info@hydrosensing4u.com" class=" font-weight-normal text-3-4 ms-2">info@hydrosensing4u.com</a>
      </li>
      <li class="d-flex font-weight-normal  px-0 mb-1">
        <img width="25" src="img/dms/hydroSensing/icons/map-pin.svg" alt="Location" data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary me-2'}" />
        Department of Hydraulic Engineering, Tsinghua University, Beijing 100084, CHINA
      </li>
    </ul>
    <h4 class="d-none">Current Visitors: <span class="text-color-primary " id="visitorCount">Loading...</span></h4>
  </div>
  
              
  <div class="col-lg-3">
    <h4 class="font-weight-bold text-4" text-color-primary">Useful Links</h4>
    <ul class="list list-icons list-icons-sm">
      <li>
        <i class="fas fa-angle-right text-color-default"></i>
        <a href="index.html" class="link-hover-style-1 ms-1"> Home</a>
      </li>
      <li>
        <i class="fas fa-angle-right text-color-default"></i>
        <a href="about-us.html" class="link-hover-style-1 ms-1"> About Us</a>
      </li>
      <li>
        <i class="fas fa-angle-right text-color-default"></i>
        <a href="research-projects.html" class="link-hover-style-1 ms-1"> Our Research</a>
      </li>
      <li>
        <i class="fas fa-angle-right text-color-default"></i>
        <a href="repository.html" class="link-hover-style-1 ms-1"> Resources</a>
      </li>
                      <li>
        <i class="fas fa-angle-right text-color-default"></i>
        <a href="team.html" class="link-hover-style-1 ms-1"> Our Team</a>
      </li>
    </ul>
  </div>
</div>
</div>
<div class="footer-copyright container bg-transparent">
<div class="row pb-5">
  <div class="col-lg-12 text-center m-0">
    <hr class="bg-color-light opacity-1 mt-5 mb-4">
    <p class="text-3-4">HydroSensing, Research & Consulting Services. © 2023. All Rights Reserved. <span class="text-1" > Developed by <a class="text-1" href="https://bxtechnologies.net/" target="_blank">BX Technologies</a> </span></p>
  </div>
</div>
</div>
`;

const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = footerContent;
}
// *************** Loading footer to All pages : END *************
