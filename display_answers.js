const answers = JSON.parse(localStorage.getItem('answers'));

for (let i = 0; i < answers.length; i++) {
    document.getElementById(`ans${i + 1}`).innerHTML = answers[i];
}

localStorage.clear();