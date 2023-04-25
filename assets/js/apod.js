// Keep data on refresh using localStorage
document.querySelector('#date').value = localStorage.getItem('lastDate')
document.querySelector('#title').innerText = localStorage.getItem('lastTitle')
document.querySelector('#explanation').innerText = localStorage.getItem('lastExplanation')

if (localStorage.getItem('lastMediaType') === 'video'){
    document.querySelector('#nasaVid').src = localStorage.getItem('lastUrl')
    document.querySelector('#nasaImg').src = ''
}
else {
    document.querySelector('#nasaImg').src = localStorage.getItem('lastUrl')
    document.querySelector('#nasaVid').src = ''
}

// Event listener on button GET APOD
document.querySelector('#button').addEventListener('click', getFetch)

// Function triggered when button is clicked
function getFetch(){
  const choice = document.querySelector('#date').value
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


        document.querySelector('#title').innerText = localStorage.getItem('lastTitle')
        document.querySelector('#explanation').innerText = localStorage.getItem('lastExplanation')
        if (localStorage.getItem('lastMediaType') === 'video'){
            document.querySelector('#nasaVid').src = localStorage.getItem('lastUrl')
            document.querySelector('#nasaImg').src = ''
        }
        else {
            document.querySelector('#nasaImg').src = localStorage.getItem('lastUrl')
            document.querySelector('#nasaVid').src = ''
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
