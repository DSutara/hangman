// array of words to guess
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'];

    for (i = 0; i < months.length; i++) {
        months[Math.floor(Math.random() * months.length)];
        console.log(months)
    }
// radnomly pick a word
// correct guess count
// wrong guess count