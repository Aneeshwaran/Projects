$(document).ready(function () {
    $(".gridview").click(function () {
      if ( $(".structure").is(":visible")){
        $(".table_look").hide()
      }else{
        $(".structure").show();
        $(".table_look").hide();
      }
       
    });
    $(".tableview").click(function () {
        if ( $(".table_look").is(":visible")){
            $(".structure").hide()
          }else{
            $(".table_look").show();
            $(".structure").hide();
          }
           
    });
    $.ajax({
        dataType: "json",
        url: 'http://run.mocky.io/v3/6f7a76ed-d6f5-4b54-be23-bf9a141c982a',
        success: function (json) {
            var img = json;
            console.log(img);
            var tableCopy = $('#tableElement')
            var gridCopy = $('#gridElement')
            for (i in img) {
                var src = img[i].image
                var name = img[i].name
                var description = img[i].description
                var cloneTable = tableCopy.clone();
                var cloneGrid = gridCopy.clone();
                $(cloneTable).appendTo($('#tableInsert'))
                $(cloneGrid).appendTo($('#gridInsert'))
                $(cloneTable).find('.img').attr('src', src);
                $(cloneTable).find('.name').html(name).data('name', name);
                $(cloneTable).find('.description').html(description);
                $(cloneGrid).find('.pic').attr('src', src);
                $(cloneGrid).find('.descriptionGrid').html(description);
                $(cloneGrid).find('.nameGrid').html(name).data('name', name);
            }
        }
    });
    $('#search_box').keyup(function () {
        var input = $('#search_box').val().toUpperCase();
        var len = $(".compare").length;
        for (i = 0; i < len; i++) {
            var compare = $('.compare').eq(i).find(".search1").html().toUpperCase();
            if (compare.indexOf(input) > -1) {
                $('.compare').eq(i).show();
            } else {
                $('.compare').eq(i).hide();
            }
        }
    });
});