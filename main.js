// Keep data on refresh using localStorage
document.querySelector('input').value = localStorage.getItem('lastDate')
document.querySelector('h2').innerText = localStorage.getItem('lastTitle')
document.querySelector('h3').innerText = localStorage.getItem('lastExplanation')

if (localStorage.getItem('lastMediaType') === 'video'){
    document.querySelector('iframe').src = localStorage.getItem('lastUrl')
    document.querySelector('img').src = ''
}
else {
    document.querySelector('img').src = localStorage.getItem('lastUrl')
    document.querySelector('iframe').src = ''
}

// Event listener on button GET APOD
document.querySelector('button').addEventListener('click', getFetch)

// Function triggered when button is clicked
function getFetch(){
  const choice = document.querySelector('input').value
  // Save last date query on localStorage 
  localStorage.setItem('lastDate', choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=ThKFdkOcB0xYVmMs7ZwMeFhzUj34JmdzfxGWLrs6&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON  
      .then(data => {
        // Save all last query params on localStorage
        localStorage.setItem('lastTitle', data.title)
        localStorage.setItem('lastMediaType', data.media_type)
        localStorage.setItem('lastUrl', data.url)
        localStorage.setItem('lastExplanation', data.explanation)
        console.log(data)


        document.querySelector('h2').innerText = localStorage.getItem('lastTitle')
        document.querySelector('h3').innerText = localStorage.getItem('lastExplanation')
        if (localStorage.getItem('lastMediaType') === 'video'){
            document.querySelector('iframe').src = localStorage.getItem('lastUrl')
            document.querySelector('img').src = ''
        }
        else {
            document.querySelector('img').src = localStorage.getItem('lastUrl')
            document.querySelector('iframe').src = ''
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

