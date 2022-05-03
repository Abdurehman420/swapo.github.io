const DEXbtn = document.getElementById('sett');
const settingsbtn = document.getElementById('sett1');
const users = document.querySelector('.dexes');
const transaction = document.querySelector('.transaction');
const swapParentCont = document.querySelector('.swapParentCont');

const DEXclosebtn = document.getElementById('close');
const transactionclosebtn = document.getElementById('close2');
const sidebar = document.querySelector('.sidebar');
const sidebar2 = document.querySelector('.sidebar2');


const select = document.getElementById('firstTokenDiv');
const middlerow1 = document.querySelector('.dexMiddleRow1');
const swapBtn = document.getElementById('mr3')
const select2 = document.getElementById('secondTokendiv');




DEXbtn.addEventListener('click' , () => {

    users.classList.add('open')
    middlerow1.classList.add('remove')
    
})
settingsbtn.addEventListener('click' , () => {

    transaction.classList.add('open')
    middlerow1.classList.add('remove')
    
})


DEXclosebtn.addEventListener('click' , () => {
    
    users.classList.remove('open')
    middlerow1.classList.remove('remove')
    
    
})
transactionclosebtn.addEventListener('click' , () => {
    
    transaction.classList.remove('open')
     middlerow1.classList.remove('remove')
    
    
    
})
select.addEventListener('click' , () => {
    
    sidebar.classList.toggle('open')
    sidebar2.classList.remove('open')
    
    
})
select2.addEventListener('click' , () => {
    
    sidebar2.classList.toggle('open')
    sidebar.classList.remove('open')
    
    
})

const arrow = document.getElementById('leftrightarrow');



transactionclosebtn.addEventListener('click' , () => {

    
    transaction.classList.toggle('up')
    
    
})


const swap = document.getElementById('swap');
swap.innerHTML =" SWAP";



const int1 = document.getElementById('input1')
const int2 = document.getElementById('input2')
const mr3p = document.getElementById('clicktoswap')





int1.oninput = function () {

   

    
    if(this.value.length > 0 ){

        swapBtn.style.backgroundColor = '#e73b2c';
        mr3p.classList.add('open')
      arrow.classList.add('show')
      swapBtn.classList.add('show')
    }
    
else{
        swapBtn.style.backgroundColor = '#404755';
        mr3p.classList.remove('open')
        arrow.classList.remove('show')
        
        swapBtn.classList.remove('show')
    }
    

}
int2.oninput = function () {

   

    
    if(this.value.length > 0 ){

        swapBtn.style.backgroundColor = '#e73b2c';
        mr3p.classList.add('open')
        arrow.classList.add('show')
        swapBtn.classList.add('show')
      
    }
    
else{
        swapBtn.style.backgroundColor = '#404755';
        mr3p.classList.remove('open')
        arrow.classList.remove('show')
        swapBtn.classList.remove('show')

    }

}



