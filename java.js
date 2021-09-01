var submit = document.querySelector('.form-group');
var formElements = document.getElementsByClassName('form-control');
var group = document.getElementsByClassName('group');
var warning = [
    'username en az 7 karakter olmalıdır',
    "hatalı mail adresi",
    "telefın 10 karakterli olmalı",
    "paswword en az 7 karakter olmalı",
    "repassword is required",

];


submit.addEventListener('submit', function (event) {


    for (let i = 0; i < formElements.length; i++) {
        if (length_control(formElements[i].value.length, i)) {
        
            danger(i);
            formElements[i].value = '';

        }
        else {
            if(i!=4)
            correct(i);

        }

    }

    event.preventDefault();
});





function length_control(lngth, index) {
    if (index != 2) {
        if (lngth < 7) {

            return true;
        }

        else {
            if (index === 3)
                passwordControl();
            return false;
        }
    }
    else {

        if (lngth === 10) {
            return false;
        }
        else
            return true;

    }
}

function danger(index,text) {


    if (group[index].lastElementChild.className != 'text-danger small') {
        console.log('konrolfirst')
        formElements[index].className = "form-control is-invalid";
        var warnigtext = document.createElement('div');
        warnigtext.className = "text-danger small";

        if(text===undefined){
        warnigtext.innerHTML = warning[index];
        }
        else{
            warnigtext.innerHTML=text;
        }

       
    group[index].appendChild(warnigtext);

    } 
    else if(text!=undefined){
        correct(index);
        console.log('konrol')
        danger(index,text);
    }
   
   

}

function correct(index) {
    formElements[index].className = "form-control is-valid";
    if (group[index].lastElementChild.className === 'text-danger small') {
       
        group[index].lastChild.remove();
    }

}


function passwordControl() {
   // console.log(formElements[3].value);
  
    if (formElements[3].value === formElements[4].value){
        
        correct(4);
    }
    else {
        danger(4,'no match');
    }
}