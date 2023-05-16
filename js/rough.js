const Elfocus_areas_container = document.getElementById('focus_areas_container');

for (const focus_area of focusAreas) {
  // Checking if Elfocus_areas_container exists
  if (Elfocus_areas_container) {
    const focusAreaElement = document.createElement('div');
    focusAreaElement.id = focus_area.fca_id;
    focusAreaElement.className = 'col-sm-9 col-md-6 col-lg-4 mb-4';

    const focusAreaLink = document.createElement('a');
    focusAreaLink.onclick = () => loadFocusARea(focus_area.fca_id);
    focusAreaLink.href = 'focus-area-detail.html';
    focusAreaLink.className = 'custom-link-hover-effects text-decoration-none';
    focusAreaLink.setAttribute('data-cursor-effect-hover', 'plus');

    const focusAreaCard = document.createElement('div');
    focusAreaCard.className = 'card box-shadow-4';

    const focusAreaCardTop = document.createElement('div');
    focusAreaCardTop.className = 'card-img-top position-relative overlay overlay-show';

    const focusAreaCardOverlay = document.createElement('div');
    focusAreaCardOverlay.className = 'position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3';

    const focusAreaHeading = document.createElement('h4');
    focusAreaHeading.className = 'font-weight-semibold text-color-light text-6 mb-1';
    focusAreaHeading.textContent = focus_area.fca_heading;

    const focusAreaCrookedLine = document.createElement('div');
    focusAreaCrookedLine.className = 'custom-crooked-line';

    const focusAreaCrookedLineImage = document.createElement('img');
    focusAreaCrookedLineImage.width = '154';
    focusAreaCrookedLineImage.height = '26';
    focusAreaCrookedLineImage.src = 'img/dms/hydroSensing/icons/infinite-crooked-line.svg';
    focusAreaCrookedLineImage.alt = '';

    const focusAreaCardImage = document.createElement('img');
    focusAreaCardImage.src = 'img/dms/hydroSensing/services/services-1.jpg';
    focusAreaCardImage.className = 'img-fluid';
    focusAreaCardImage.alt = 'Card Image';

    const focusAreaCardBody = document.createElement('div');
    focusAreaCardBody.className = 'card-body d-flex align-items-center custom-view-more px-4';

    const focusAreaCardText = document.createElement('p');
    focusAreaCardText.className = 'card-text w-100 mb-0';
    focusAreaCardText.textContent = focus_area.fca_short_desc;

    const focusAreaArrowRight = document.createElement('img');
    focusAreaArrowRight.id = `${focus_area.fca_id}arrowRight`;
    focusAreaArrowRight.width = '50';
    focusAreaArrowRight.height = '50';
    focusAreaArrowRight.className = 'w-auto';
    focusAreaArrowRight.src = 'img/dms/hydroSensing/icons/arrow-right.svg';
    focusAreaArrowRight.alt = '';

    // Add the data-icon and data-plugin-options attributes to the arrow-right image
    focusAreaArrowRight.setAttribute('data-icon', '');
    focusAreaArrowRight.setAttribute('data-plugin-options', "{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}");
    focusAreaArrowRight.style.width = '50px';

    focusAreaCardBody.appendChild(focusAreaCardText);
    focusAreaCardBody.appendChild(focusAreaArrowRight);

    focusAreaCardOverlay.appendChild(focusAreaHeading);
    focusAreaCardOverlay.appendChild(focusAreaCrookedLine);
    focusAreaCrookedLine.appendChild(focusAreaCrookedLineImage);

    focusAreaCardTop.appendChild(focusAreaCardOverlay);
    focusAreaCardTop.appendChild(focusAreaCardImage);

    focusAreaCard.appendChild(focusAreaCardTop);
    focusAreaCard.appendChild(focusAreaCardBody);

    focusAreaLink.appendChild(focusAreaCard);

    focusAreaElement.appendChild(focusAreaLink);

    Elfocus_areas_container.appendChild(focusAreaElement);
  }
}
