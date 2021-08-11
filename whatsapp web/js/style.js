$(document).ready(function () {
    $("#menu").click(function (event) {
        aneesh = $('.upper').is(":hidden");
        if (aneesh) {
            $(".upper").show();
            $(".upper_1").hide();
            $(".chat_part1").hide();
        } else {
            $(".upper").hide();

        }
        event.stopPropagation();
    });

    // $(".chatbox").click(function () {
    //     aneesh = $('.upper_1').is(":hidden");
    //     if (aneesh) {
    //         $(".upper_1").show();
    //     }
    //     else {
    //         $(".upper_1").hide();

    //     }
    // });


    $("#menu_1").click(function () {
        // $(".total").show();
        $(".total").animate({
            left: "0px"
        });

    });


    $("#arrow_clk").click(function () {
        // $(".total").hide();
        $(".total").animate({
            left: "-380px"
        });

    });

    $(".chatbox").mousedown(function (a) {
        switch (a.which) {
            case 3:
                var x = a.pageX;
                var y = a.pagey;
                $(".upper_1").css({
                    left: x,
                    top: y
                }).toggle();
                $(".upper").hide();
                $(".chat_part1").hide();
                break;

        }


    });

    // $(".image_1").click(function () {
    //     aneesh = $('.profile_page').is(":hidden");
    //     if (aneesh) {
    //         $(".profile_page").show();

    //     }
    //     else {
    //         $(".profile_page").hide();
    //     }
    // });



    $(".image_1").click(function () {
        $(".profile_page").animate({
            left: "0px"
        });

    });
    $(".profile_part").click(function () {
        $(".profile_page").animate({
            left: "0px"
        });

    });


    $("#arrow_2").click(function () {
        $(".profile_page").animate({
            left: "-380px"
        });

    });



    $(".image_1").click(function () {
        $(".archived_part").animate({
            left: "0px"
        });

    });
    $(".archived_part").click(function () {
        $(".archived_chat").animate({
            left: "0px"
        });

    });


    $("#arrow_5").click(function () {
        $(".archived_chat").animate({
            left: "-380px"
        });

    })



    $(".image_1").click(function () {
        $(".setting_part").animate({
            left: "0px"
        });

    });
    $(".setting_part").click(function () {
        $(".setting_page").animate({
            left: "0px"
        });

    });


    $("#arrow_3").click(function () {
        $(".setting_page").animate({
            left: "-380px"
        });

    });
    // $(".noti_part").click(function () {
    //     $(".notification_page").animate({
    //         left: "0px"
    //     });

    // });

    // $("#arrow_4").click(function () {
    //     $(".setting_page").animate({
    //         left: "-380px"
    //     });

    // });



    $(".noti_part").click(function () {
        $(".notification_page").animate({
            left: "0px"
        });

    });
    $(".noti_part").click(function () {
        $(".setting_page").animate({
            left: "0px"
        });

    });
    $(".notification_page").click(function () {
        $(".noti_part").animate({
            left: "0px"
        });

    });




    $("#arrow_4").click(function () {
        $(".notification_page").animate({
            left: "-380px"
        });

    });
    $("#circle").click(function () {
        $(".status_total").show();


    });
    $(".wrong").click(function () {
        $(".status_total").hide();
    });




    $("body").click(function () {
        if ($(".upper_1").is(":visible")) {
            $(".upper_1").hide();
        }
        if ($(".upper").is(":visible")) {
            $(".upper").hide();
        }



    });

    $(".chat_bg_2").click(function () {
        if ($(".chat_part1").is(":visible")) {
            $(".chat_part1").hide();
        }
    });






    $(".image_1").click(function () {
        $(".starred_part").animate({
            left: "0px"
        });
    });
    $(".starred_part").click(function () {
        $(".starred_page").animate({
            left: "0px"
        });

    });






    $("#arrow_6").click(function () {
        $(".starred_page").animate({
            left: "-400px"
        });

    });

    $(".wall_part").click(function () {
        $(".clr_wall").show();
    });


    $("#arrow_7").click(function () {
        $(".clr_wall").hide();

    });










    $(".cancel_b").click(function () {
        $(".themes_design").hide();
    });
    $(".cancel_b").click(function () {
        $(".themespage").hide();
    });
    $(".theme_part").click(function () {
        $(".themespage").show();
    });
    $(".theme_part").click(function () {
        $(".themes_design").show();
    });



    $(".boxes_1").click(function () {
        $('.chat_bg').css({
            "background-color": "#e5ddd5",
        });

    })
    $(".boxes_2").click(function () {
        $('.chat_bg').css({
            "background-color": "#bbe4e5",
        });

    })
    $(".boxes_3").click(function () {
        $('.chat_bg').css({
            "background-color": "#aed8c7",
        });

    })
    $(".boxes_4").click(function () {
        $('.chat_bg').css({
            "background-color": "#7acba5",
        });

    })
    $(".boxes_5").click(function () {
        $('.chat_bg').css({
            "background-color": "#cbdaec",
        });

    })
    $(".boxes_6").click(function () {
        $('.chat_bg').css({
            "background-color": "#66d2d5",
        });

    })
    $(".boxes_7").click(function () {
        $('.chat_bg').css({
            "background-color": "#63bdcf",
        });

    })
    $(".boxes_8").click(function () {
        $('.chat_bg').css({
            "background-color": "#d6d0f0",
        });

    })
    $(".boxes_9").click(function () {
        $('.chat_bg').css({
            "background-color": "#cecece",
        });

    })
    $(".boxes_10").click(function () {
        $('.chat_bg').css({
            "background-color": "#d1dabe",
        });

    })

    $(".boxes_11").click(function () {
        $('.chat_bg').css({
            "background-color": "#e6e1b1",
        });

    })
    $(".boxes_12").click(function () {
        $('.chat_bg').css({
            "background-color": "#feefa9",
        });

    })
    $(".boxes_13").click(function () {
        $('.chat_bg').css({
            "background-color": "#fed297",
        });

    })
    $(".boxes_14").click(function () {
        $('.chat_bg').css({
            "background-color": "#fd9a9b",
        });

    })
    $(".boxes_15").click(function () {
        $('.chat_bg').css({
            "background-color": "#fd6769",
        });

    })
    $(".boxes_16").click(function () {
        $('.chat_bg').css({
            "background-color": "#fb4668",
        });

    })
    $(".boxes_17").click(function () {
        $('.chat_bg').css({
            "background-color": "#922040",
        });

    })
    $(".boxes_18").click(function () {
        $('.chat_bg').css({
            "background-color": "#dc6e4f",
        });

    })


    $(".chatbox").click(function () {
        $('.wifi').hide();
        $('.msg_chat').show();
    })





    $("#chat_part_dot").click(function () {
        box = $('.chat_part1').is(":hidden");
        if (box) {
            $(".chat_part1").show();

        } else {
            $(".chat_part1").hide();

        }
    });


    $("#attached").click(function () {
        box = $('.attach_part').is(":hidden");
        if (box) {
            $(".attach_part").show();

        } else {
            $(".attach_part").hide();
        }
    });

    // $("#font_2").click(function () {
    //     box = $('.search_part').is(":hidden");
    //     if (box) {
    //         $(".search_part").show();

    //     }
    //     else {
    //         $("#summa").hide();
    //     }
    // });


    $(".msg_chat_box").keyup(function () {
        $("#arrow_send").show();
        $("#voice_font").hide();

    });





    $("#font_2").click(function () {
        $(".search_part").show();


    });
    $("#wrong_2").click(function () {
        $(".search_part").hide();
    });



    // function myFunction() {
    //     input = document.getElementById("part_3_search");
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("chatbox");
    //     li = ul.getElementsByTagName("li");
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // }

    $(".part_3_search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".chatbox").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });



    $(".part_4_search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".chatbox").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });





    $(".chatbox").click(function () {
        whatsapp = $(this).find(".para2").text();
        $(".name_tag").text(whatsapp)
        what1 = $(this).find(".image").attr("src");
        $("#photo").attr("src", what1)

    });
    $("#arrow_send").click(function () {


    });



    $("#arrow_send").click(function () {
        $(".inbox").show();
        data = $("#msg_chat_box_1").val();
        time = '9:50 AM'
        $("#msg_chat_box_1").val("");
        $('.inbox').find(".s2").append("<div class='asd'>" + data + time);

    });


    $("#msg_chat_box_1").keyup(function (e) {
        var code = e.keyCode;
        if (code == 13){
            $(".inbox").show();
            data = $("#msg_chat_box_1").val();
            time = '9:50 AM'
            $("#msg_chat_box_1").val("");
            $('.inbox').find(".s2").append("<div class='asd'>" +  data + time + "</div>");
        }
    })


    setTimeout(function(){
        $(".load_part").fadeOut()
    } ,1000);

  setTimeout(function(){
        $(".line_5").animate({
        width:"25%"
        });
    } ,500);


});



