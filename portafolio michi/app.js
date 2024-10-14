const emailButton = document.getElementById('copy')
emailButton.addEventListener('click', ()=>{ 
    const emailAddress ='karenmichelleperezaguilar08@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML='Copied!'
})