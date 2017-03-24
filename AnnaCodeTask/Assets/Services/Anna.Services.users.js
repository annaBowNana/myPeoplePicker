anna.services.user = anna.services.user || {}

anna.services.user.addNewUser = function (data, onSuccess, onError) {
    var url = "api/user/add";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onerror
        , type: "POST"

    };
    $.ajax(url, settings);
}

anna.services.user.getAllUsers = function (onSuccess, onError) {
    var url = "api/user/add";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onerror
        , type: "GET"

    };
    $.ajax(url, settings);
}