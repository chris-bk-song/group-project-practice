const cardImage = '.card-img-top';

document.addEventListener('DOMContentLoaded', function() {

  $.get('https://aws.random.cat/meow')
    .then(function(data) {
      const img = document.createElement('img');
      console.log('data =', data)
      img.setAttribute ('class', card-img-top)
      img.setAttribute('src', data.file)
      // images.innerHTML = ''; //add this line so images are replaced for every click
      card.appendChild(img)
    }); 
    // generateButton.innerHTML ="Generate Doggo"; //change text inside button after button click
});