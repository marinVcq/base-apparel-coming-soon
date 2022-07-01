  var err = document.getElementById('error-container');
  var success = document.getElementById('success-container');
  var btn = document.getElementById('button');
  var input = document.getElementById('text');
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  btn.addEventListener('click', function(e){
    e.preventDefault();

    let email = input.value;

    if(!email.match(reg)){
      err.style.display = 'block';
      success.style.display = 'none';
    }else{
      err.style.display = 'none';
      success.style.display = 'block';
    }
  });