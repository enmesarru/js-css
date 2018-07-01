(function () {
    //var selfLink = window.location.href;
    var links = document.getElementsByTagName("a");
    var arr = [].slice.call(links);
    arr.forEach(function (element, index, array) {
        download(element.href,element.outerText);
    });
    
    function download(dataurl, filename) {
        if(controlFileExtension(dataurl))
        {
            var a = document.createElement("a");
            a.href = dataurl;
            a.setAttribute("download", filename);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", false, true);
            a.dispatchEvent(b);
            return false;
        }
    }
    
    function controlFileExtension(filename) {
        if(getFileExtension(filename) == "pdf" || getFileExtension("epub"))
            return true;
        else
            return false;
    }

    function getFileExtension(filename)
    {
        var ext = /^.+\.([^.]+)$/.exec(filename);
        return ext == null ? "" : ext[1];
    }
})();
