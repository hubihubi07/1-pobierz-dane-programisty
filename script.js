


$(document).ready(function () {

    $('button').click(function () {

        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                let newDiv = $('<div id="dane-programisty"></div>')
                $('body').append(newDiv)

                $('div').html(` Imię: ${data.imie}</br>
                            \nNazwisko: ${data.nazwisko}</br>
                            \nZawód: ${data.zawod} </br>
                            \nFirma: ${data.firma}`)





                console.log(newDiv);
            })
    })
})

