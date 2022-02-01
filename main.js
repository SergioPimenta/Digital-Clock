const monthDays = document.querySelector(".days")

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if(h == 0){
        h = 12;
    }

    if(h > 12){
        session = "PM"
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m ;
    s = (s < 10) ? "0" + s : s ;

    var time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("datetime").innerText = time;
    document.getElementById("datetime").textContent = time;
}
setInterval(showTime);

var dt=new Date();
        var sem = dt.getDay();
        var dia = dt.getDate();
        var mes = dt.getMonth();
        var ano = dt.getFullYear();
        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
        var semanas = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

        var data = (semanas[sem] + ", " + dia + " de " + meses[mes] + " de " + ano);
        var month = (meses[mes])

        document.getElementById("data").innerText = data;
        document.getElementById("month").innerText = month;

let days = "";

for(let i = 1;i <= 31;i++){
days += `<div>${i}</div>`;
monthDays.innerHTML = days;
}


