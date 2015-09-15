/**
 * 
 */
    $(function () {
        var data = ['credit card', 'debit card', 'cash on delivery'];

        $('.img-zoom').hover(function () {
            $(this).addClass('transition');
 
        }, function() {
            $(this).removeClass('transition');
        });

        $("#pmtMode").autocomplete({source:data});
        $("#duedate").datepicker();

        $("#btn1").on('click', function () {

            addToDo.dialog('open');
        });

    var addToDo = $("#AddItem").dialog({


        modal: true,

        autoOpen: false,


        buttons: {


            "Proceed to Payment": function () {



                var newItem = [{

                    itemName: $("#item").val(),
                    description: $("#description").val(),
                    duedate: $("#duedate").val()
                }]
                alert(newItem[0].itemName + newItem[0].description + newItem[0].duedate);
            }

        },


        "Cancel": function () {


            $(this).dialog("close");


            $("#task, #description, #duedate").val("");
        }
    }
            )
    $("button").button({ icons: { primary: "ui-icon-cart" } });
    var tab = $("#tabs").tabs();
    $("#accordion > li").click(function () {

        if (false == $(this).next().is(':visible')) {
            $('#accordion > ul').slideUp(300);
        }
        $(this).next().slideToggle(300);
    });

    $('#accordion > ul:eq(0)').show();

    });

  

