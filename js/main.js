const myInputs = document.querySelectorAll("input");
const myTextarea = document.querySelectorAll("textarea");

for (let i=0;i<myInputs.length;i++){
    myInputs[i].onmousedown = () => {
        myInputs[i].style.outline="none"
    }
}
for (let i=0;i<myTextarea.length;i++){
    myTextarea[i].onmousedown = () => {
        myTextarea[i].style.outline="none"
    }
}
