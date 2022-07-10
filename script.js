const checkEp = window.document.querySelector('.check');
const epUser = window.document.getElementById('ep');

const tell = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate()).padStart(2 , '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    const CurrentDate = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;

    let current = 0

    if(CurrentDate > '6 10 2022 23:00:00' && CurrentDate < '7 16 2022 22:59:59'){
        current = 1024
    }
    else if(CurrentDate >= '7 16 2022 23:00:00' && CurrentDate <= '7 23 2022 22:59:59'){
        current = 1025
    }
    else if(CurrentDate >= '7 23 2022 23:00:00' && CurrentDate <= '7 30 2022 22:59:59'){
        current = 1026
    }
    else if(CurrentDate >= '7 30 2022 23:00:00' && CurrentDate <= '8 6 2022 22:59:59'){
        current = 1027
    }
    else if(CurrentDate >= '8 6 2022 23:00:00' && CurrentDate <= '8 13 2022 22:59:59'){
        current = 1028
    }
    else if(CurrentDate >= '8 13 2022 23:00:00' && CurrentDate <= '8 20 2022 22:59:59'){
        current = 1029
    }
    else if(CurrentDate >= '8 20 2022 23:00:00' && CurrentDate <= '8 27 2022 22:59:59'){
        current = 1030
    }
    else if(CurrentDate >= '8 27 2022 23:00:00' && CurrentDate <= '9 3 2022 22:59:59'){
        current = 1031
    }
    else if(CurrentDate >= '9 3 2022 23:00:00' && CurrentDate <= '9 10 2022 22:59:59'){
        current = 1032
    }
    else if(CurrentDate >= '9 10 2022 23:00:00' && CurrentDate <= '9 17 2022 22:59:59'){
        current = 1033
    }
    else if(CurrentDate >= '9 17 2022 23:00:00' && CurrentDate <= '9 24 2022 22:59:59'){
        current = 1034
    }
    else if(CurrentDate >= '9 24 2022 23:00:00' && CurrentDate <= '10 1 2022 22:59:59'){
        current = 1035
    }
    else if(CurrentDate >= '10 1 2022 23:00:00' && CurrentDate <= '10 8 2022 22:59:59'){
        current = 1036
    }
    else if(CurrentDate >= '10 8 2022 23:00:00' && CurrentDate <= '10 15 2022 22:59:59'){
        current = 1037
    }

    const missingEpisodes = current - Number(epUser.value);
    const res = window.document.getElementById('res');

    if (error({ missingEpisodes })){
        res.innerHTML = ("Coloque um valor certo idiota");
    }else if(sucess({ missingEpisodes })){
        res.innerHTML = "Parabéns! você está nos episódios semanais de one piece"
    }else {
        res.innerHTML = (`Faltam ${missingEpisodes} episodios para chegar nos semanais de one piece`);
    }
}

const error = ({ missingEpisodes}) => {
    if (missingEpisodes <= -1){
        return true
    }else{
        return false
    }
}

const sucess = ({missingEpisodes}) => {
    if (missingEpisodes === 0){
        return true
    }else{
        return false
    }
}

checkEp.addEventListener('click', () => tell());