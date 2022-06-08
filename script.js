const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const screen = document.querySelector('.screen');
const prevCount = document.querySelector('.prevCount');
const saveBtn = document.querySelector('.save');

screen.textContent = 0
let prevCountShown = []
// minus.onClick = () => {
//     console.log('working')
//     numScreen--
// }

// plus.onClick = () => {
//     numScreen++
// }

function transition() {
    screen.style.transition = '0.5s';
    screen.style.transform = 'translateX(-100px)'
}

function transitionToOrigin() {
    screen.style.transition = '0.5s';
    screen.style.transform = 'translateX(0)'
}


minus.addEventListener('click', () => {
    if (screen.textContent == 0) {
        screen.textContent = screen.textContent
    } else {
        screen.textContent--
    }
    
    
    // ops.style.transform = 'translateX(-150vw)'
    // screen.style.transform = 'translateX(0)'
})

plus.addEventListener('click', () => {
    screen.textContent++

    screen.style.transition = '0.5s';
    screen.style.transform = 'translateX(110px)'
    
    // if (screen.style.transform == 'translateX(110px)') {
    //     screen.style.transform = 'translateX(0px)'
    // }
})

saveBtn.addEventListener('click', () => {
    prevCountShown.textContent = screen.textContent
    if (prevCountShown.textContent == screen.textContent) {
        prevCountShown.push(screen.textContent)
        // console.log(prevCountShown);
        prevCount.textContent = `Previous counts - ${prevCountShown}`
    }
})