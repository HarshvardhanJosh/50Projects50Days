const count = document.querySelectorAll('.count');

count.forEach((counter)=>{
    counter.innerHTML = '0';

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerHTML;

        const inc = target / 200; 
        if(c < target){
            counter.innerText =  `${Math.ceil(c + inc)}`;
            setTimeout(() => {
                updateCounter();
            }, 1);
        } else{
            counter.innerText = target;
        }
    }

    updateCounter();

})
