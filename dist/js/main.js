const shareButton = document.getElementById('share');
const shareButton2 = document.getElementById('share2');
const profile = document.getElementById('profile');
const links = document.getElementById('links');
const bodyTag = document.getElementsByTagName('body')[0];

shareButton.addEventListener( 'click', (e) => {
    console.log('share button clicked')
    console.log(bodyTag.clientWidth)
    if (bodyTag.clientWidth < 750) {
        console.log("function click will run")
    } else{
        
    }
})

// shareButton.addEventListener( 'mouseover', (e) => {
//     console.log('share button hovered')
//     console.log(bodyTag.clientWidth)
//     if (bodyTag.clientWidth >= 750) {
//         console.log("function hover will run")
//     }
// })