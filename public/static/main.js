const main = document.querySelector('main');
const bodyItems = document.querySelectorAll('.col');

main.addEventListener('scroll', ()=>{
  for (let element of bodyItems){
    let boundingRect = element.getBoundingClientRect();
    let content = element.querySelector('.content');

    // check to see if the center of the <main> element
    // is within the center of any given element
    if (boundingRect.left < main.clientWidth && main.clientWidth < boundingRect.right) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  }
})
