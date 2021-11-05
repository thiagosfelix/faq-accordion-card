function initAccordion() {
  const accordionList = document.querySelectorAll('dt')
  if (accordionList.length) {
    accordionList[0].classList.toggle('active')
    accordionList[0].nextElementSibling.classList.toggle('active')
    accordionList[0].firstElementChild.classList.toggle('active')

    function activeAccordion() {
      accordionList.forEach(itemList => {
        if(itemList.classList.contains('active') && itemList != this) {
          itemList.classList.remove('active');
          itemList.nextElementSibling.classList.remove('active');
          itemList.firstElementChild.classList.remove('active');
        }
      })
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
      this.firstElementChild.classList.toggle('active')
    }

    accordionList.forEach(itemList => {
      itemList.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()
