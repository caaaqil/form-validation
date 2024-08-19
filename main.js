const username=document.querySelector("#username");
const email=document.querySelector("#Email");
const password=document.querySelector("#Password");
const confirmPassword=document.querySelector("#ConfirmPassword");
// const form=document.querySelector(".form");
let form = document.querySelector("#form");

const checkempty=(elements)=>{
 
    elements.forEach(element => {
        if(element.value === ""){
            element.parentElement.classList = "form-controler success";

        }
       

        
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    checkempty([username,password,confirmPassword,email]);
   
});
