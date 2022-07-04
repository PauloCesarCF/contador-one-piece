const checkEp = window.document.querySelector('.check')
const epUser = window.document.getElementById('ep')

const tell = () => {
    let current = 1023
    const vinteQuatro = new Date('july 9 2022 23:00:00');
    const vinteCinco = new Date('july 16 2022 23:00:00');
    const vinteSeis = new Date('july 23 2022 23:00:00');
    const vinteSete = new Date('july 30 2022 23:00:00');
    const vinteOito = new Date('august 6 2022 23:00:00');
    const vinteNove = new Date('august 13 2022 23:00:00');
    const trinta = new Date('august 20 2022 23:00:00');
    const trintaUm = new Date('august 27 2022 23:00:00');
    const trintaDois = new Date('september 3 2022 23:00:00');
    const trintaTres = new Date('september 10 2022 23:00:00');
    const trintaQuatro = new Date('september 17 2022 23:00:00');
    const trintaCinco = new Date('september 24 2022 23:00:00');
    const trintaSeis = new Date('october 1 2022 23:00:00');
    const trintaSete = new Date('october 8 2022 23:00:00');
    const trintaOito = new Date('october 15 2022 23:00:00');
    const date = new Date().getMinutes();

    if(date >= vinteQuatro && date <= vinteCinco){
        current = 1024
    }else if(date >= vinteCinco && date <= vinteSeis){
        current = 1025
    }else if(date >= vinteSeis && date <= vinteSete){
        current = 1026
    }else if(date >= vinteSete && date <= vinteOito){
        current = 1027
    }else if(date >= vinteOito && date <= vinteNove){
        current = 1028
    }else if(date >= vinteNove && date <= trinta){
        current = 1029
    }else if(date >= trinta && date <= trintaUm){
        current = 1029
    }else if(date >= trintaUm && date <= trintaDois){
        current = 1029
    }else if(date >= trintaDois && date <= trintaTres){
        current = 1029
    }else if(date >= trintaTres && date <= trintaQuatro){
        current = 1029
    }else if(date >= trintaQuatro && date <= trintaCinco){
        current = 1029
    }else if(date >= trintaCinco && date <= trintaSeis){
        current = 1029
    }else if(date >= trintaSeis && date <= trintaSete){
        current = 1029
    }else if(date >= trintaSete && date <= trintaOito){
        current = 1029
    }

    const missingEpisodes = current - Number(epUser.value)
    const res = window.document.getElementById('res')

    if (error({ missingEpisodes, current })){
        res.innerHTML = ("Coloque um valor certo idiota")
    }else {
        res.innerHTML = (`Faltam ${missingEpisodes} episodios para chegar nos semanais de one piece`)
    }
}

const error = ({ missingEpisodes, current }) => {
    if (missingEpisodes <= 1 || missingEpisodes === current){
        return true
    }else{
        return false
    }
}

checkEp.addEventListener('click', () => tell())