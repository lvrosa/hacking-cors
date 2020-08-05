function load_owasp_via_xhr() {
  var myImage = document.querySelector('#main-content').querySelector('img');
  myImage.style.display = "none";

  var canvas = document.querySelector('canvas');
  canvas.style.display = "inline";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://trustedsite.com/img/owasp_bug.png", true);
  xhr.responseType = 'blob';

  // If the line below is set, we get the error:
  // Attempt to set a forbidden header was denied: Origin
  // xhr.setRequestHeader('Origin','http://trustedsite.com');

  xhr.onload = function(e) {
   var url = URL.createObjectURL(this.response);
   var img = new Image();

   img.onload = function() {
       URL.revokeObjectURL(this.src);
       var ctx = canvas.getContext('2d');
       ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
   };

   img.src = url;
  };

  let data = {
    headers: {
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'origin': 'http://trustedsite.com',
   }
  };

  xhr.send(JSON.stringify(data));
}
