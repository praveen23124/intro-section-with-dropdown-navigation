

function openNav(){
  document.querySelector("#SidePanelMenu").style.width = "70%";
  document.querySelector(".closebtn").style.display = "block";
}

function closeNav(){
  document.querySelector("#SidePanelMenu").style.width = "0%";
  document.querySelector(".closebtn").style.display = "none";
}
const x = document.querySelector(".companyFeatures");
function showCompanyFeatures(){
   x.classList.toggle("show");



  // if(x.style.display === "none"){
  //   x.style.display = "block";
  // }
  // else{
  //   x.style.display = "none";
  // }

}
const y = document.querySelector(".companyInfo");

function showCompanyInfo(){

   y.classList.toggle("show");
  // if(y.style.display === "none"){
  //   y.style.display = "block";
  // }
  // else{
  //   y.style.display = "none";
  // }

}
