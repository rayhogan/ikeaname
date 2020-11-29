document.getElementById('nameButton')
    .addEventListener('click', function (event) {
        let name = document.getElementById('fname').value;

        if (name != null && name != "") {
            document.getElementById('myikeaname').innerText = reverse(name).toUpperCase().replace("A", "Ä").replace("O", "Ö");
        }
    });


function reverse(s) {
    return s.split("").reverse().join("");
}