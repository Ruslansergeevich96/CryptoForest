$(document).ready(function() {
    $("header").toggleClass("header-glass");
});

/* Добавление нового портфеля*/
$("#createportfolio").click(function () {
    $(".table_col > tbody:last").append('<tr> <td>Первый портфель</td> <td>151212</td> <td>0.12323223</td> <td>+1232500$</td> <td>12.12.2012</td> <td><input type="button" class="delete" name="delete" value="Удалить" ></td> </tr>');    
});
/* Удаление портфелея*/    
                
            


$('.delete').click(function(){
    $(this).parent().parent().remove();
        return false;
});

/*  Donut Chart */



