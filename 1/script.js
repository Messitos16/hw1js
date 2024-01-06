const currentYear = new Date().getFullYear();
const birthYear = prompt("Введите год вашего рождения:");
if (!birthYear) {
    alert("Вы не ввели год рождения. Попробуйте еще раз.");
} else {  
    const parsedBirthYear = parseInt(birthYear);    
    if (isNaN(parsedBirthYear)) {
        alert("Некорректный ввод. Введите год числом.");
    } else {
        const age = currentYear - parsedBirthYear;
        if (age < 0) {
            alert("Вы еще не родились!");
        } else if (age < 30) {
            alert("Вам меньше 30 лет. Вы молодой человек!");
        } else if (age < 60) {
            alert("Вам от 30 до 60 лет. Кризис среднего возраста!");
        } else {
            alert("Вам 60 лет и старше. Рекомендуется посетить врача.");
        }
    }
}