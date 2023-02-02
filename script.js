const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (e) => { 
    const isCheked = e.target.checked;

    if(isCheked){
        body.classList.add('dark-theme');
    }else{
        body.classList.remove('dark-theme');
    }
});