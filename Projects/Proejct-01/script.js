const buttons = document.querySelectorAll('.button'); // Select all button's
const body = document.querySelector('body'); // to chnage BG-Color
const refreshbtn = document.querySelector('#refresh'); // to reset BG-Color

buttons.forEach(function(button) {
    console.log(button);

    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
    })
});

refreshbtn.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
})


                                                                                                                                                                                                                                                                                                                                                                                                       