const shareButton = document.getElementById('share');
const shareButton2 = document.getElementById('share2');
const profile = document.getElementById('profile');
const links = document.getElementById('links');
const shareDesktop = document.getElementsByClassName('desktop')[0];
const bodyTag = document.getElementsByTagName('body')[0];

let shareOpen = false
const toggle = () => {
    if (bodyTag.clientWidth < 750) {
        if (!shareOpen) {
            profile.style.display = 'none'
            links.style.display = 'flex'
            links.classList.remove('zero-opaque')            
            profile.classList.add('zero-opaque')

            shareOpen = !shareOpen
        } else {
            links.style.display = 'none'
            profile.style.display = 'flex'
            profile.classList.remove('zero-opaque')
            links.classList.add('zero-opaque')            

            shareOpen = !shareOpen
        }
    } else{
        if (!shareOpen) {
            shareDesktop.style.display = 'initial'
            shareOpen = !shareOpen
        } else {
            shareDesktop.style.display = 'none'
            shareOpen = !shareOpen
        }
    }
}

shareButton.addEventListener( 'click', toggle)
shareButton2.addEventListener( 'click', toggle)



// shareButton.addEventListener( 'mouseover', (e) => {
//     console.log('share button hovered')
//     console.log(bodyTag.clientWidth)
//     if (bodyTag.clientWidth >= 750) {
//         console.log("function hover will run")
//     }
// })