const checkEp = window.document.querySelector('.check');
const epUser = window.document.getElementById('ep');

const error = (missingEpisodes, current) => missingEpisodes <= -1 || missingEpisodes > current

const sucess = (missingEpisodes) => missingEpisodes === 0

let current = 0;

function epCurrent() {
    const API = 'https://api.themoviedb.org/3/tv/37854?api_key=2f7eae08608adbe48f1755821593e9e4'

    axios.get(API)
        .then(function (response) {
            current = (response.data.last_episode_to_air.episode_number)
        })
        .catch(function (error) {
            console.log(error)
        })
}

epCurrent()

function tell() {
    const missingEpisodes = current - Number(epUser.value);
    const res = window.document.getElementById('res');

    if (error(missingEpisodes, current)) {
        res.innerHTML = ("Coloque um valor certo idiota");
    } else if (sucess(missingEpisodes)) {
        res.innerHTML = "Parabéns! você está nos episódios semanais de one piece"
    } else {
        res.innerHTML = (`Faltam ${missingEpisodes} episodios para chegar nos semanais de one piece`);
    }
}

checkEp.addEventListener('click', () => tell());