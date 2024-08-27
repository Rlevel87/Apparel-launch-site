


function updateImg(){
    var img = document.getElementsByClassName("heroImage")[0];

    if(window.innerWidth >= 1032){
        img.src = 'images/hero-desktop.jpg';
    }
    else{
        img.src = 'images/hero-mobile.jpg';
    }    
}

updateImg();

window.addEventListener('resize', updateImg);


function email() {
    const input = document.getElementById('emailAddress');
    const email = document.getElementById('emailAddress');
    const error = document.getElementById('error');
    const errorM = document.getElementById('alert');


         
        if(input.value.trim() === "") {
            email.style.borderColor = "red";
            error.style.display = "inline";
            errorM.style.display = "block";
            errorM.style.color = "red";
        }
        else if(!input.value.trim().includes('@') || !input.value.trim().includes('.com')) {
            email.style.borderColor = "red";
            error.style.display = "inline";
            errorM.style.display = "block";
            errorM.style.color = "red";
        }
        else {
            email.style.borderColor = "black";
            errorM.textContent = "Thank you! You will be hearing from us soon";
            errorM.style.color = "green";
            errorM.style.display = "block";
            error.style.display = "none";
        }
        
        

        
}























       