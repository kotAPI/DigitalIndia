var ELI5 = [
"Let me tell you a story",
"Have you heard of Bill gates?",
"Have you heard of <strike>Suckerberg</strike> Zuckerberg?",
"Sure you did.",
 "Ever heard of Tim Berners Lee?",
 "Well, he created the internet. He's the reason you are able to read this.",
 "You know what he said? ",
 "A packet of data - an email, a webpage or a video call - should be treated the same no matter whether it is sent by a small NGO in Ljubljana or a FTSE 100 company in London ",
 "Wait, what??",
 "He means that, he created the internet for you and me so the we can communicate with each other without having a third person intervening with our lives.",
 "Keep in mind, facebook will not let this happen.",
 "Why you ask?",
 "Because, Facebook has almost the same amount of users as Google.",
 "How's that a problem you ask?",
 "Well, Google makes over 60 Billion Dollars a year, while Facebook makes just over a 10 Billion dollars (same users on both sides).",
 "This very fact is eating Facebook away and making them very greedy. They want to compete with Google.",
 "Facebook bought Oculus Rift from a Genius college kid who loves tech.",
 "Oh yeah, Facebook bought your Whatsapp too.",
 "Probably storing all your conversations and selling it to the CIA.",
 "You might have noticed that you don't see all your friends updates on your feed. Most of them are invisible. It is not like how it was back in the days when Facebook was a thing.",
 "Especially if you are the proud owner of a Facebook page, you are constantly nudged by Facebook to <strong>'Advertise'</strong> for a higher reach. Yes?",
 "Sooo, this means, Startups that want to grow in the coming years will die out before they even begin.",
 "What was that? You wanted to start a Business?",
 "Forget it.",
 "Airtel, Reliance..",
 "They aren't going to allow small companies to get to you, They can't afford to pay these Telecom 'Gods'",
 "Facebook will be the center and it controls and monitors what you browse.",
"Facebook used to be so friendly for startups and independent entertainers to share things, it isn't anymore.",
"If Facebook has control of the internet we use, No AIB, No TVF Pitchers. You need to pay to stream YouTube videos well.",
"Why?",
"It's owned by Google you silly and Facebook hates that.",
"It's not Free internet. It's just Free Facebook.",
"You pay for advertising, companies pay Facebook for advertising. They sell the <strong>ads<strong> to you.",
"You are being sold.",
"You are the product.",
"Bascially, you are selling yourself.... to yourself.",
"I know it doesn't make sense.",
"And ofcourse, still paying for it, just... in the name of <strong>'free'</strong> internet.",
"Tim Berners Lee is going to be really disappointed in you.",
"He insists that organizations like Facebook don't impact the internet.",
"Whether you are browsing Google or Facebook",
"It shouldn't matter.",
"Internet was always free.",
"So what do you do?",
"Don't change your display picture. They are creating a demographic out of this.",
"Already did? Tell your friends not to.",
"Support Modi, he's a good man. Just don't join hands with Facebook.",
"Facebook is good, but what Zuckerberg is trying to do is douchey.",
"We need to stand with the Creator of the Internet on this guys.",
"We've won many internet wars before",
"Remember what happened to PIPA/SOPA?",
"We won.",
"Calling everyone to arms, it's time for India to win. Play your part.",
"Godspeed to you."

];
function Init(){
	document.getElementById("eli5-container").innerHTML=ELI5[0];

}

window.onload= function(){
	Init();

};


var updater=0;
var maxlen = ELI5.length-1;

function UpdateElI5Right(){
	if(updater<maxlen){
		updater +=1;
		document.getElementById("eli5-container").innerHTML = ELI5[updater];
	}
	
}

function UpdateElI5Left(){
	if(updater>=1){
		updater -=1;
		document.getElementById("eli5-container").innerHTML = ELI5[updater];
	}
	
} 