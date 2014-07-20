(function() {
    var xmlHttp;
    if (window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
    else
    {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            var buf = xmlHttp.responseText.replace(/[\s\n]+$/g, '').split('\n');
            var inx = Math.floor(Math.random() * buf.length);
            if (buf.length === 0)
                return;

            var div = document.getElementById('gif');
            if (div === null)
                return;

            div.style.backgroundImage = 'url(' + buf[inx] + ')';

            // var w = div.offsetWidth;
            // var h = div.offsetHeight;
            // var img = '<img src="' + buf[inx] + '"' +
            //     ' width=' + w + ' height=' + h + '/>';
            // div.innerHTML = img;
        }
    }

    xmlHttp.open('GET', 'meta/gif-url.txt', false);
    xmlHttp.send();
})();
