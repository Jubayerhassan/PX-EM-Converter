const inpPx = document.getElementById('inp-px');
const inpEm = document.getElementById('inp-em');


const emTopx = ()=>{
    const pxVal = inpPx.value;

    if(pxVal.length != 0){
        inpEm.value = pxVal / 16
    }else{
        inpEm.value = '';
    }
}

const pxToem = ()=>{
    const emVal = inpEm.value;

    if(emVal.length != 0){
        inpPx.value = emVal * 16
    }else{
        inpPx.value = '';
    }
}

inpPx.onclick = emTopx;
inpEm.onclick = pxToem;