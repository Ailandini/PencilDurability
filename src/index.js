import { Paper } from './paper.js';
import { Pencil } from './pencil.js';

$('document').ready(function () {
    const paperRef = {'Paper 1' : '.initial-paper', 'Paper 2' : '.secondary-paper'}
    var pencilNumber = 1;
    var pencils = {};
    var paper = {'Paper 1': new Paper()};

    function createPencil() {
        const pointDurability = Math.round(Math.random() * 100) % 20;
        const eraserDurability = Math.round(Math.random() * 100) % 20;
        const pencilLength = Math.round(Math.random() * 10) % 3;
        $('.table tbody').append('<tr value="'+pencilNumber+'"><td>' + pencilNumber + '</td>' +
            '<td class="PD">' + pointDurability + '</td>' +
            '<td class="ED">' + eraserDurability + '</td>' +
            '<td class="PL">' + pencilLength + '</td></tr>'
        );
        $('.dropdown-menu.pencil').append('<a class="dropdown-item" onclick="$(\'.dropdown-toggle.pencil\').text(\'Pencil ' + pencilNumber + '\');" href="#">Pencil ' + pencilNumber + '</a>');
        pencils['Pencil '+pencilNumber] = new Pencil(pointDurability, pencilLength, eraserDurability);
        pencilNumber++;
    }

    function createPaper() {
        if(Object.keys(paper).length == 2) {
            return;
        }
        $('.initial-paper').css('width', '50%');
        $('.secondary-paper').css('width', '50%');
        paper['Paper 2'] = new Paper();
        $('.dropdown-menu.paper').append('<a class="dropdown-item" onclick="$(\'.dropdown-toggle.paper\').text(\'Paper 2\');" href="#">Paper 2</a>');
    }

    function updatePencilTable(value, pencil) {
        const updateTr = 'tr[value="'+value+'"]';
        $('.PD', updateTr).text(pencil.getPointDurability());
        $('.ED', updateTr).text(pencil.getEraserDurability());
        $('.PL', updateTr).text(pencil.getLength());
    }

    function write() {
        if($('.dropdown-toggle.pencil').text().trim() == '-Select a Pencil-') {
            return;
        }
        const pencilToUse = pencils[$('.dropdown-toggle.pencil').text().trim()];
        const paperToUse = paper[$('.dropdown-toggle.paper').text().trim()];
        const paperToUpdate = paperRef[$('.dropdown-toggle.paper').text().trim()];
        const textToWrite = $('input').val();
        pencilToUse.write(textToWrite, paperToUse);

        $(paperToUpdate).text(paperToUse.getText());
        updatePencilTable($('.dropdown-toggle.pencil').text().trim()[$('.dropdown-toggle.pencil').text().length-1], pencilToUse);
    }

    $('.create-pencil-btn').click(function () {
        createPencil();
    });
    $('.create-paper-btn').click(function () {
        createPaper();
    });
    $('.write-btn').click(function () {
        write();
    });

});