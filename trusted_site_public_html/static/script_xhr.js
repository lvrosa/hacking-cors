function load_script_via_xhr() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://trustedsite.com/static/hello_script.js", true);

  xhr.onreadystatechange = function()
  {
    if ((xhr.status == 200) && (xhr.readyState == 4))
    {
      eval(xhr.responseText);
    }
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
