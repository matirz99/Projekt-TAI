function sprawdz() {
    //document.write("Sprawdzanie");
    var komunikat = document.getElementById("odpowiedz");
    var komunikat1 = document.getElementById("pomocniczy");
    var komunikat2 = document.getElementById("logo");
    var komunikat3 = document.getElementById("menu");
    var komunikat4 = document.getElementById("nawigacja");
    var komunikat5 = document.getElementById("stopka");
    var komunikat6 = document.getElementById("tresc");

    komunikat.innerHTML = "To jest odpowiedź";
    komunikat1.innerHTML = "<p1>To jest menu pomocnicze</p1>";
    komunikat2.innerHTML = "<p1>Tu jest logo</p1>";
    komunikat3.innerHTML = "<p1>To jest menu pomocnicze</p1>";
    komunikat4.innerHTML = "<p1>To jest menu nawigacyjne</p1>";
    komunikat5.innerHTML = "<p1>To jest stopka strony</p1>";
    komunikat6.innerHTML = "<p1>To jest treść strony :V</p1>";
}

function weryfikacja() {
    var liczba = document.getElementById("pole").value;
    //alert(liczba);
    if (liczba > 0) document.getElementById("odpowiedz").innerHTML = "Liczba dodatnia";
    else if (liczba < 0) document.getElementById("odpowiedz").innerHTML = "Liczba ujemna";
    else if (liczba == 0) document.getElementById("odpowiedz").innerHTML = "To jest zero";
    else document.getElementById("odpowiedz").innerHTML = "To nie jest liczba";
    if (liczba == "") document.getElementById("odpowiedz").innerHTML = "NIC nie jest wpisane";
    /*
if (confirm("Czy przywitać?")==true) {
var imie = prompt("Jak masz na imię?");
alert(imie + ", wpisałeś właśnie "+ liczba);
}*/
}
var GDZIE_ZEGAR = "stopka";

function odliczanie() {
    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;
    document.getElementById(GDZIE_ZEGAR).innerHTML =
        dzien + "/" + miesiac + "/" + rok + " | " + godzina + " : " + minuta + " : " + sekunda;
    setTimeout("odliczanie()", 1000);
}

function listowanie() {
    var liczba1_string = document.getElementById("pole1").value;
    liczba1 = Number(liczba1_string);
    var liczba2_string = document.getElementById("pole2").value;
    liczba2 = Number(liczba2_string);
    var odp = document.getElementById("odpowiedz");
    console.log(typeof(liczba1));
    console.log(typeof(liczba2));
    console.log((liczba1 < liczba2));
    var komunikat = "";
    var oceniono = false;
    var blad = false;

    if (liczba1_string === "") {
        komunikat += "Nie wypełniono 1 pola<br/>";
        blad = true;
    }
    if (liczba2_string === "") {
        komunikat += "Nie wypełniono 2 pola<br/>";
        blad = true;
    }
    if (Number.isNaN(liczba1)) {
        komunikat += "Wartość w pierwszym polu nie jest liczbą<br/>";
        blad = true;
    }
    if (Number.isNaN(liczba2)) {
        komunikat += "Wartość w drugim polu nie jest liczbą<br/>";
        blad = true;
    }

    if (blad === false) {
        if (liczba1 == liczba2) {
            komunikat += "Podane liczby są równe<br/>";
        } else if (liczba1 > liczba2) {
            komunikat += "Podane liczby rosnąco: " + liczba2 + ", " + liczba1 + "<br/>";
        } else if (liczba1 < liczba2) {
            komunikat += "Podane liczby malejąco: " + liczba2 + ", " + liczba1 + "<br/>";
        }

    }
    odp.innerHTML = komunikat;
    return 0;
}
window.onload = odliczanie;
