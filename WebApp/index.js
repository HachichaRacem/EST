const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
	const city = document.getElementById('city').value;
	const APIKEY = '7f17076b75dd979beda245c5577a2ff9';
	if(city === '') return;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`).then(res =>{
		console.log(res);
		if(res.ok){
			res.json().then(response => {
				const weatherImage = document.getElementById('weatherImage');
				const temp = document.getElementById('temp');
				const desc = document.getElementById('desc');	
				const container = document.getElementById('container');
				switch(response.weather[0].main){
					case 'Clear':
						weatherImage.src = 'images/clear.png';
						break;
					case 'Rain':
						weatherImage.src = 'images/rain.png';
						break;
					case 'Snow':
						weatherImage.src = 'images/snow.png';
						break;
					case 'Clouds':
						weatherImage.src = "images/cloud.png";
						break;
					case 'Mist':
						weatherImage.src = "images/mist.png";
						break;
					case 'Haze':
						weatherImage.src = "images/mist.png";
						break;
					default:
						weatherImage.src = "images/cloud.png";
						break;
				}
				temp.innerHTML = `${parseInt(response.main.temp)}°C`;
				desc.innerHTML = `${response.weather[0].description}`;
				container.classList.add('active');
				desc.style.visibility = 'visible';
			})
		}else{
			container.style.height = '380px'
			weatherImage.src = "images/404.png";
			temp.innerHTML = 'Not found';
			desc.style.visibility = 'hidden';
		}
		weatherImage.style.visibility = 'visible';
		temp.style.visibility = 'visible';
	})
})