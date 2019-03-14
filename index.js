let news = []; 
let numberPost = document.getElementById('number');
let pageNumber = document.getElementById('page');

let pageCurrent = document.getElementById('current');
var number = 20; 

let checkbox = document.getElementById('check');
let boxChecked = false;

var sourceName;

async function fetchNews() {
	
	let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=f311cd1d81ab41559505e22592cb2af7&pageSize=${number}&sources=${sourceName}`;
	let results = await fetch(url);
	let data = await results.json();
	news = data.articles;
	numberPost.innerHTML = "Total number of posts: " + data.totalResults;
	pageCurrent.innerHTML = "Current number of pages: " + number;
	console.log(news.source);
	render();
};

function render() {
	document.getElementById('news-stories').innerHTML = news.map(article => 
		`<div class="news-story">
			<div class="news-content">
				<h2> ${article.title} </h2>
				<p> ${article.source.name} </p>
				<p> ${moment(article.publishedAt).fromNow()} </p>
				<p> <a href='${article.url}''> View More </a></p>
			</div>
			<div class="news-image">
				<img src="${article.urlToImage}">
			</div>
		</div>`)
};

fetchNews();

function fetchSource() {
	sourceName = "TechCrunch";
	fetchNews();
}

check.addEventListener('change', function () {
	if (boxChecked = check.checked) 
	{
		fetchSource();
	} else {
		sourceName = '';
		fetchNews();
	}
});

pageNumber.addEventListener('click', function() {
	number = number + 20; 

	fetchNews();
});

