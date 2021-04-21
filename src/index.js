let competences = ['Web Apps', 'Websites', 'Mobile Apps', 'API\'s'];
let competenceId = 0;

// const competenceTransition = (id) => {
//     for (let i = 0; i < 8; i++) {

//     }
// }

setInterval(() => {
    document.getElementById('competences').innerHTML = competences[competenceId];
    competenceId = (competenceId + 1) %4;
}, 5000)