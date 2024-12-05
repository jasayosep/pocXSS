var fullHTML = document.body.innerHTML;
var htmlFileManager = fullHTML.split("filemanager/dialog.php")[1];
alert(htmlFileManager.split("akey=")[1].split("&")[0]);
