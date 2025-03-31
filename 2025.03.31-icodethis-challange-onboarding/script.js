const slider=document.getElementById("slider");
const sliderValueDisplay = document.querySelector(".slider-number");
const chkboxes = document.querySelectorAll(".accept");
const checkedNumber = document.getElementById("checked-number");
const visToggler= document.getElementById("visibility-toggle");


function updateSliderPercentage(){
    const chkboxCount = chkboxes.length;
    const checkedChkboxes = document.querySelectorAll(".accept:checked").length;
    
    const percentage = (checkedChkboxes/chkboxCount) * 100;
    slider.value=percentage;
    sliderValueDisplay.innerHTML= `${percentage}%` 
    checkedNumber.innerHTML = chkboxCount-checkedChkboxes;

};

chkboxes.forEach((element)=>{
    element.addEventListener("change",updateSliderPercentage)
})

updateSliderPercentage();

visToggler.addEventListener("click",()=>{
    const container = document.querySelector(".container");

    if(container.style.display != "none"){
        container.style.display = "none";
    }
    else{
        container.style.display = "block";
    }
})



