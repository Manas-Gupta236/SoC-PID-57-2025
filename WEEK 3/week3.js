//classN is the CSS class that is made in CSS file and elementSelector is the element in HTML that will undergo changes of classN
function mouse (elementSelector, classN) {
let element= document.querySelector (elementSelector);
element.addEventListener ("mouseover", ()=>{
    element.classList.add(classN);
});
}

