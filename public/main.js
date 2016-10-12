
function getUser(userData){
    if (userData.name === undefined){
        $("#login").show();
    }
    else {
        $("#logout").show();
        $("#upload").show();
    }
}

$.get("/user", getUser);

function getPhotos(photosData){
    for (var i in photosData){
        var photo = photosData[i];
        var elem = $("<img>");
        elem.attr("src", photo.filename);
        $("#photos").append(elem);
    }
}

$.get("/photos", getPhotos);