

const butt = document.getElementById("BoredBot")
butt.addEventListener("click", function() {
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {document.getElementById("what-to-do").innerHTML = data.activity
})
})













// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => {
//   console.log(data)
//   document.getElementById('image-container').innerHTML = `
//  <img src="${data.message}" /> `
// });



