const button = document.querySelector('button');
const buttonActive = document.querySelector('.icon.active');
const share = document.querySelector('.share');

button.addEventListener('click', () => {
       share.classList.toggle('click'); 
       button.classList.toggle('active');
       if(button.classList.contains('active')){
              button.style.display = "none";
              buttonActive.style.display = "flex";
       }else{
              button.style.display = "flex";
              buttonActive.style.display = "none";
       }          
});
buttonActive.addEventListener('click', () => {
       share.classList.toggle('click'); 
       button.classList.toggle('active');
       if(button.classList.contains('active')){
              button.style.display = "none";
              buttonActive.style.display = "flex";
       }else{
              button.style.display = "flex";
              buttonActive.style.display = "none";
       }           
});
