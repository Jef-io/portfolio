const projectDescriptionIds = ['toxiplan', 'mcintosh', 'crypto', 'undercooked']

const handleHover = (descId) => {
    document.getElementById(descId).classList.remove('opacity-0');
    document.getElementById(descId).classList.remove('z-0');
    document.getElementById(descId).classList.add('z-10');
    const filteredDescriptionIds = projectDescriptionIds.filter((id) => id !== descId);
    for (const key in filteredDescriptionIds) {
        document.getElementById(filteredDescriptionIds[key]).classList.add('opacity-0');
        document.getElementById(filteredDescriptionIds[key]).classList.add('z-0');
        document.getElementById(filteredDescriptionIds[key]).classList.remove('z-10');
    }
}

document.getElementById('toxiplantitle').addEventListener('mouseover', () => {handleHover('toxiplan')})
document.getElementById('mcintoshtitle').addEventListener('mouseover', () => {handleHover('mcintosh')})
document.getElementById('cryptotitle').addEventListener('mouseover', () => {handleHover('crypto')})
document.getElementById('undercookedtitle').addEventListener('mouseover', () => {handleHover('undercooked')})


