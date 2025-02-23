const elements = ["banner","sec1","sec2","sec3"]
function actualizarBanner(container) {
    const banner = document.getElementById(`${container}`);
    banner.style.height = `${window.innerHeight}px`;
}

elements.forEach((div)=>{
    actualizarBanner(`${div}`);
    window.addEventListener('resize',actualizarBanner);
})

