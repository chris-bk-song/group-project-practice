const randomImage = document.querySelector('.random-images');

document.addEventListener('DOMContentLoaded', function() {

  $.get('https://api.unsplash.com/search/photos?page=1&per_page=30&query=sad&client_id=yE582Cx8y-xmBPW0X_zUDPFAaJ0KYPUQqmVOZ1cgEfY')
    .then(function(data3) {
      const generatedImage = document.createElement('img');
      console.log('data =', data3)
      setInterval(function() {
        randomImage.innerHTML = '';
        generatedImage.setAttribute('src', data3.results[Math.floor(Math.random() * Math.floor(data3.results.length))].urls.small)
        randomImage.appendChild(generatedImage)
      }, 2000);
      // RandomImage.innerHTML = ''; //add this line so images are replaced for every click
    }); 
});