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
    var liczba1 = document.getElementById("pole1").value;
    liczba1 = Number(liczba1);
    var liczba2 = document.getElementById("pole2").value;
    liczba2 = Number(liczba2);
    var odp = document.getElementById("odpowiedz");
    console.log(typeof(liczba1));
    console.log(typeof(liczba2));
    console.log((liczba1 < liczba2));
    var komunikat = "";
    var oceniono = false;
    if ((liczba1 == "") && (liczba2 == "")) {
        komunikat += "Nie wypełniono żadnego z pól";
        oceniono = true;
    } else {
        if (liczba1 == "") komunikat += "Nie wypełniono 1 pola";
        if (liczba2 == "") komunikat += "Nie wypełniono 2 pola";
        liczba1 = Number(liczba1);
        liczba2 = Number(liczba2);

        if (Number.isNaN(liczba1)) komunikat += "Wartość w pierwszym polu nie jest liczbą";
        if (Number.isNaN(liczba2)) komunikat += "Wartość w drugim polu nie jest liczbą";
    }
    if (liczba1 < liczba2)
        for (i = liczba1; i < liczba2; i++) {
            console.log(i);
            console.log(liczba1);
            console.log(liczba2);
            komunikat = komunikat + i + ", ";
            alert("Budujemy rosnący ciąg: " + komunikat + "Wartość i: [" + i + "]");
    } else
        for (i = liczba1; i > liczba2; i--) {
            komunikat = komunikat + i + ", ";
            alert("Budujemy rosnący ciąg: " + komunikat + "Wartość i: [" + i + "]");
    }
    if (liczba1 == liczba2) odp.innerHTML = "Podane liczby są równe";
    /*	if (liczba1 < liczba2) 
for ( i=liczba1 ; i<liczba2 ; i++) komunikat = komunikat + i ", ";
else
for ( i=liczba1 ; i>liczba2 ; i--) komunikat = komunikat + i ", ";
*/
    /*	komunikat = komunikat + liczba2;
/*alert ("Oto komunikat: [" + komunikat + "]");*/
    odp.innerHTML = komunikat;
}
window.onload = odliczanie;