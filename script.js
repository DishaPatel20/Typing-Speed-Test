const setOfWords = [
	"India is a great country where people speak different languages but the national language is Hindi.",
	"India is full of different castes, creeds, religion, and cultures but they live together.",
	"That’s the reasons India is famous for the common saying of 'unity in diversity'.", 
	"India is the seventh-largest country in the whole world.",
	"India has the second-largest population in the world.",
	"India is also knowns as Bharat, Hindustan and sometimes Aryavart.", 
	"It is surrounded by oceans from three sides which are Bay Of Bengal in the east, the Arabian Sea in the west and Indian oceans in the south.", 
	"Tiger is the national animal of India.", 
	"Peacock is the national bird of India.",
	"Mango is the national fruit of India.",
	" 'Jana Gana Mana' is the national anthem of India.",
	" 'Vande Mataram' is the national song of India.",
	"Hockey is the national sport of India.", 
	"People of different religions such as Hinduism, Buddhism, Jainism, Sikhism, Islam, Christianity and Judaism lives together from ancient times.", 
	"India is also rich in monuments, tombs, churches, historical buildings, temples, museums, scenic beauty, wildlife sanctuaries, places of architecture and many more.", 
	"The great leaders and freedom fighters are from India.",
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGames = () => {
	let randomNumber = Math.floor(Math.random()*setOfWords.length);
	msg.innerText = setOfWords[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}

const endPlay = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime)/1000);

	let totalStr = typeWords.value;
	let wordCount = wordCounter(totalStr);

	let speed = Math.round((wordCount / totalTime) * 60);

	let finalMsg = " You have typed in  " +speed+ " sec . ";
	
	finalMsg += compareWords(msg.innerText, totalStr);

	msg.innerText = finalMsg;

}

const compareWords = (str1, str2) => {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let cnt = 0;

	words1.forEach(function (item, index){
		if (item == words2[index]) {
			cnt++;
		} 
	})

	let errorWords = (words1.length - cnt);
	return (cnt + " Correct out of " + words1.length+ " words and the total number of error are " + errorWords + ".");
}

const wordCounter = (str) =>{
	let response = str.split(" ").length;
	return response;
}

btn.addEventListener('click', function(){
	if (this.innerText == 'Start'){
		typeWords.disabled = false;
		playGames();
	} else if(this.innerText == "Done"){
		typeWords.disabled = true;
		btn.innerText = "Start";
		endPlay();
	}
})