function load_script_via_fetch() {
  fetch('http://trustedsite.com/static/hello_script.js', {
    method: 'GET',
    headers: {
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'origin': 'http://trustedsite.com',
  }})
  .then(function(response) {
    return response.text().then(function(text) {
      eval(text);
    });
  });
}
