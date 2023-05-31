const linkDropdown = document.getElementById('more')
const locationDropdown = document.querySelector('#location')
const cardDropdown = document.querySelector('#link-dropdown')

function openLinkDropdown() {
    cardDropdown.style.display = 'flex'

}
function closeLinkDropdown() {
    cardDropdown.style.display = 'none'

}


function openLocationDropdown () {
    console.log('Abriu')
}

linkDropdown.addEventListener('mouseover', openLinkDropdown)
linkDropdown.addEventListener('mouseout', closeLinkDropdown)
locationDropdown.addEventListener('mouseover', openLocationDropdown)
