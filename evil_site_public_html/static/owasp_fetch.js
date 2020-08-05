function load_owasp_via_fetch() {
  var canvas = document.querySelector('canvas');
  canvas.style.display = "none";

  var myImage = document.querySelector('#main-content').querySelector('img')
  myImage.style.display = "inline";

  fetch('http://trustedsite.com/img/owasp_bug.png', {
    method: 'GET',
    headers: {
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'origin': 'http://trustedsite.com',
  }})
  .then(function(response) {
    return response.blob();
  })
  .then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
}
