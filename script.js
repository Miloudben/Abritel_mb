let block = document.querySelector(".destination_informations");
let scrollPos = window.pageYOffset + 224;

function input_informationsheader (){
  let positionScrol1 = window.pageYOffset;
  if (positionScrol1 >= scrollPos){ 
    block.classList.add("active");
  }
  else {
    block.classList.remove('active');
  }
}
window.addEventListener('scroll', input_informationsheader);

  