$(document).ready(function() {
  //console.log('ready..')
  $('#searchUser').on('keyup', function(e) {
    //console.log(e.target.value);
    let username = e.target.value;
    //make request to github
    $.ajax({
      url: 'https://api.github.com/users/' + username,
      data: {
        client_id: '024773f2d3eb43f78b29',
        client_secret: '84209e971855c028d13183e79bc290f3afdcb1a6'
      }
    }).done(function(user) {
      //console.log(user);
      $('#profile').html(`<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="#" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">$(user.name)</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`);
    });
  });
});
