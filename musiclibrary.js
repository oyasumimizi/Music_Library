"use strict";

$.ajaxSetup({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jQxhr) {
    },
    error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
    },
})

$.getJSON("Music Project.postman_collection.json", function (result) {
    for (i = i, i < index.length, i++) {
        $("div").append(result+ " ");

    });
    });
});



