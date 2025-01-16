

// ANIMATION

document.addEventListener('DOMContentLoaded', () => { 
    AOS.init({once: true}); 
});


// SCROLL TO TOP
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => { 
    if (window.scrollY > 300) { 
        scrollToTopBtn.classList.add('show'); 
    } else { 
        scrollToTopBtn.classList.remove('show'); 
    } });

    scrollToTopBtn.addEventListener('click', () => { 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });



    // HANDLE FORM

    const messageBtn1 = document.getElementById("messageBtn1");
    const messageBtn2 = document.getElementById("messageBtn2");
    const message1Input = document.getElementById("message1Input");
    const emailInput = document.getElementById("emailInput");
    const message = document.getElementById("message");
    const error = document.querySelector(".error")

    messageBtn1.addEventListener('click',(e)=>{
        e.preventDefault();
        if (message1Input.value==0 ) {
            window.alert('please fill the form')
        }
    })
    messageBtn2.addEventListener('click',(e)=>{
        e.preventDefault();
        if (emailInput.value==0 || message.value==0) {
            error.style.display="block"
        }else{
            error.style.display="none"
        }

    })

