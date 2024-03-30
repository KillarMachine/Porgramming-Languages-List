let input=document.getElementById("input");
let template = document.getElementsByClassName("title");
let btn=document.getElementById("btn");
let notFound = document.getElementsByClassName("notFound")[0];
let check=true;
input.addEventListener('keydown', function(event) {
        console.log(this.value);
        console.log(template[0].textContent);
        console.log(template[0].parentElement);
        Array.from(template).forEach(function(element){
            if(element.textContent.toLowerCase().includes(input.value.toLowerCase())){
                element.parentElement.style.display="flex";
                check=false;
            }else{   
                element.parentElement.style.display="none";
            }
            if(input.value==""){
                element.parentElement.style.display="flex";
            }
            
        });
        if(check){
            notFound.style.display="block";
        }else{
            notFound.style.display="none";
            check=true;
        }
});
btn.addEventListener('click', function(event) {
        console.log(this.value);
        console.log(template[0].textContent);
        console.log(template[0].parentElement);
        Array.from(template).forEach(function(element){
            if(element.textContent.toLowerCase().includes(input.value.toLowerCase())){
                element.parentElement.style.display="flex";
            }else{   
                element.parentElement.style.display="none";
            }
            if(input.value==""){
                element.parentElement.style.display="flex";
            }
        });
        input.value="";
});