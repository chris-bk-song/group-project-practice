// const generateButton = document.querySelector('#generate-button');
// generateButton.addEventListener('click', function() {
//   $.get('https://api.nasa.gov/planetary/apod?api_key=dhn4bXZ4ZD7EVzQXYXK1Dd0scF6IKhCIe3MtlwCA')
//     .then(function(data) {
//       const img = document.createElement('img');
//       console.log('data =', data)
//       img.setAttribute('src', data.hdurl)
//       images.innerHTML = '';
//       images.appendChild(img);
//     });
//     generateButton.innerHTML ="more!"; 
// });


window.addEventListener('DOMContentLoaded', function() {
  $.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(function(data) {
      const evilQuotes = data.insult;
      evilQuotes.forEach(function(evil) {
        const textBox = document.createElement('p');
        textBox.textContent = evil;
        text.appendChild(textBox);
      });
    });
  });
