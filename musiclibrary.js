"use strict";

function apiPull() {


    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: "get",
        success: function (data, textStatus, jQxhr) {
            buildTable(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    })
}

// appeend, .each

function buildTable(data) {
    let musicArray = "";
    $.each(data, function(index, value){
        // console.log(value.title);
        let musicRow = 
        // console.log(index + ' ' + value.title);
        // $("tabledata").append(
            "<tr>"+
                "<td>"+value.id+"</td>"+
                "<td>"+value.title+"</td>"+
                "<td>"+value.album+"</td>"+
                "<td>"+value.artist+"</td>"+
                "<td>"+value.genre+"</td>"+
                "<td>"+value.releaseDate+"</td>"+
            "</tr>";
        // );
        $("#tabledata").append(
            musicRow
        );
    });
}


$('<style>.newClass {color: black; }</style>').appendTo('body');
$('<style>.newClass {border-width: 5px; }</style>').appendTo('body');
$('<style>.newClass {border-style: solid; }</style>').appendTo('body');


apiPull();

