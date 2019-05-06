const greenBtn = document.getElementById('green-btn');
const addGreenBtn = document.querySelector('.modal-open');
const addGreenBkrgd = document.querySelector('.modal-full');
const closeBtn = document.querySelector('.closeBtn');


const modal = () => {
addGreenBtn.classList.add("modal-on");
addGreenBkrgd.classList.add('modal-fullbase');
    console.log('done');
};

greenBtn.addEventListener( 'click',(e)=> {
    modal();
});

closeBtn.addEventListener('click', (e)=>{
    addGreenBkrgd.classList.remove('modal-fullbase');
    addGreenBtn.classList.remove('modal-on');
    console.log('closeBtn');
});

