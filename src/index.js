import { Paper } from './paper.js';
import { Pencil } from './pencil.js';

$('document').ready(function () {
    var pencilNumber = 1;
    var pencils = [];
    var paper = [new Paper()];
    function createPencil() {
        const pointDurability = Math.round(Math.random() * 100) % 20;
        const eraserDurability = Math.round(Math.random() * 100) % 20;
        const pencilLength = Math.round(Math.random() * 10) % 3;
        $('.table tbody').append('<tr><td>' + pencilNumber + '</td>' +
            '<td>' + pointDurability + '</td>' +
            '<td>' + eraserDurability + '</td>' +
            '<td>' + pencilLength + '</td></tr>'
        );
        $('.dropdown-menu.pencil').append('<a class="dropdown-item" value="1" onclick="$(\'.dropdown-toggle.pencil\').text(\'Pencil ' + pencilNumber + '\');" href="#">Pencil ' + pencilNumber + '</a>');
        pencilNumber++;
        pencils.push(new Pencil(pointDurability, pencilLength, eraserDurability));
    }

    $('.create-pencil-btn').click(function () {
        createPencil();
    });

});