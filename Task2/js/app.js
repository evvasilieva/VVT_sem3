

function send() {
    //ввод данных из поля ввода html input
    //let x = prompt("Введите х")

    let message = document.getElementById('message').value;  

    //логика

    if (message=='') {
        alert("Нужно ввести сообщение")
    } 

    //Вывод данных в поле 

    document.getElementById('result').innerText = message;

    //document.getElementById('result').value = message;
    //alert(`${x} * 5 = ${resuls}`)

}

// удаление данных из поля вывода

function ClearField() {
    document.getElementById("message").value = "";
}

