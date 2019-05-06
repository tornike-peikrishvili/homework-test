
/*
*
* feedback inputs toggle animation
*
* */

let contactInputs = document.getElementsByClassName('contact-input');

function _setActive(e) {
    e.target.offsetParent.classList.add('active');
}

function _removeActive(e) {
    if (e.target.value === '') {
        e.target.offsetParent.classList.remove('active');
    }
}

for (let i=0; i<contactInputs.length; i++) {
    contactInputs[i].addEventListener('click', _setActive);
    contactInputs[i].addEventListener('keydown', _setActive);
    contactInputs[i].addEventListener('blur', _removeActive);
}



/*
*
* end Feedback inputs
*
* */

let showMoreInfo = document.getElementById('show-more');
let moreInfoWrapper = document.getElementById('more-info-wrapper');
showMoreInfo.addEventListener('click', _showMoreInfo);

function  _showMoreInfo(e){
 moreInfoWrapper.classList.add('active');
 showMoreInfo.classList.add('hide');
}


let submit = document.getElementById('submit');
submit.addEventListener('click',_submit);

function checkInputs() {
    for (let i=0; i<contactInputs.length; i++) {
        if (contactInputs[i].value === '') {
            contactInputs[i].parentElement.classList.add('error');
        } else {
            contactInputs[i].parentElement.classList.remove('error');
        }
    }
}


function _submit() {
    checkInputs();
}
