function contentHandler(main) {

  function contentDisplayHandler() {
    const bodyItems = document.querySelectorAll('.col');
    for (let element of bodyItems) {
      let boundingRect = element.getBoundingClientRect();
      let content = element.querySelector('.content');

      // check to see if the center of the <main> element
      // is within the center of any given element
      if (boundingRect.left < main.clientWidth && main.clientWidth < boundingRect.right) {
        if (!content.classList.contains('active')) content.classList.add('active');
      } else {
        if (content.classList.contains('active')) content.classList.remove('active');
      }
    }
  }

  // Init on page load
  contentDisplayHandler();

  main.addEventListener('scroll', () => {
    contentDisplayHandler();
  })
}

function arrowNavigationHandler(main) {
  function handleClick(direction) {
    const element = document.querySelector(`.${direction}`)
    element.addEventListener('click', () => {
      const sibling = document.querySelector('.active').parentNode[`${direction}ElementSibling`];
      if (!!sibling && sibling.classList.contains('col')) {
        main.scroll({
          left: sibling.offsetLeft - sibling.clientWidth,
          behavior: 'smooth'
        })
      }
    })
  }

  handleClick("next");
  handleClick("previous");
}

function paperPlanAnimationHandler() {
  const contactLink = document.getElementById('contact-link');
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      const airplane = document.querySelector('.airplane');
      if (airplane) {
        airplane.classList.add('active');
        setTimeout(() => {
          window.location = 'mailto:jen@jenmckenzie.com';
          airplane.classList.remove('active');
        }, 1500);
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  contentHandler(main);
  arrowNavigationHandler(main);
  paperPlanAnimationHandler();
})

