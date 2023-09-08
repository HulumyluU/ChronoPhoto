"use script";
//years of photos
const photoValues = [1945, 1912, 2007, 2018, 2001, 2019 , 1945 , 2016 , 1969 ,  1963 , 1922 , 1928 , 1953 , 2004, 1969 , 1997 , 2008 , 1920 , 1929 , 1901 , 1945 , 2010 , 1917 , 1955 , 1999 , 2010 , 1924 , 2011 , 1947 , 1948 , 1903 , 1920 , 1919 , 1961 , 1979 , 1897 , 1944 , 1955 , 1930 , 1898];
const photoDescription = [//descriptions
   ": This image shows the Red Army breaking into Berlin and capturing the city, the final step in defeating the Third Reich and ending World War II in Europe. You can find it out thanks to the flag of the Soviet Union over Berlin",
   ": In the photo, you can see the Titanic before sinking. The sinking of the Titanic (1912): The luxurious British passenger liner sank on its maiden voyage after colliding with an iceberg, resulting in the loss of more than 1,500 lives.",
   ": The first iPhone was indeed a sensation that captivated people around the world. Its launch in 2007 revolutionized the smartphone industry and set new standards for mobile devices.",
   ": The FIFA World Cup 2018 final took place on July 15, 2018, in Moscow, Russia. The match was contested between France and Croatia. France emerged as the champions, defeating Croatia with a score of 4-2. ",
   ': In the photo, you can see a terrorist attack on September 11, 2001. The attacks on September 11, 2001, had far-reaching consequences, leading to significant shifts in foreign policy, counterterrorism efforts, and discussions about national security.',
   ": The COVID-19 Pandemic (2019-present): A global health crisis that has resulted in significant social, economic, and political impacts worldwide.",
   ": On 6 and 9 August 1945, the United States detonated two atomic bombs over the Japanese cities of Hiroshima and Nagasaki, respectively. The aerial bombings together killed between 129,000 and 226,000 people.",
   ": Brexit (2016): The United Kingdom's referendum vote to leave the European Union, with subsequent negotiations and political repercussions.",
   ": Neil Armstrong becomes the first person to walk on the moon during the Apollo 11 mission.",
   ": In the photo, you can see the last day of life Kennedy.John F. Kennedy, the 35th President of the United States, was assassinated on November 22, 1963, in Dallas, Texas. The official investigation, known as the Warren Commission, concluded that Kennedy was killed by a lone gunman named Lee Harvey Oswald.",
   ": On 9 November 1922, the Royal Swedish Academy of Sciences voted to award Albert Einstein the previously reserved 1921 Nobel Prize in Physics for “his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect.",
   ": In 1928 Ford 'Model A' was an immediate sensation. Some 10 million people viewed the new vehicle in the first week. The crowds gathered in such numbers that many cities needed to send police to help direct traffic around those who lined up to see the new Ford",
   ": Sir Edmund Percival Hillary,  (born 20 July 1919) is a New Zealand mountaineer and explorer. He and Sherpa mountaineer Tenzing Norgay were the first climbers to reach the 8,848 m (29,028 ft) summit of Mount Everest, highest mountain in the world. They achieved this on 29 May 1953 at 11:30 a.m. local time.",
   ": Indian Ocean tsunami causes widespread devastation and loss of life in multiple countries.",
   ": The Great Depression (1929-1939): A worldwide economic crisis characterized by high unemployment, poverty, and severe financial hardships that affected many countries.",
   ": Hong Kong is returned to China by the United Kingdom, ending British colonial rule.",
   ": The Tesla Roadster, the first generation model, was an all-electric sports car produced by Tesla, Inc. from 2008 to 2012. ",
   ": The Women's Suffrage Movement: The fight for women's suffrage gained significant momentum in the early 20th century. In 1920, the 19th Amendment to the U.S. Constitution was ratified, granting women the right to vote in the United States.",
   ": The Wall Street Crash and the Great Depression (1929): The stock market crash on October 29, 1929, known as Black Tuesday, marked the beginning of the Great Depression, a severe economic downturn that affected countries worldwide.",
   ': In the photo, you can see London in the 1901 year. You can find it out because of the horse-drawn downtown and the clothes people.',
   ": The first computer is often attributed to the Electronic Numerical Integrator and Computer (ENIAC). It was developed by J. Presper Eckert and John W. Mauchly at the University of Pennsylvania and was completed in 1945.",
   ": Deepwater Horizon oil spill becomes the largest marine oil spill in history.",
   ": The Russian Revolution (1917): The Bolshevik Party, led by Vladimir Lenin, overthrew the Russian Provisional Government, leading to the establishment of the Soviet Union.",
   ": Start The Vietnam War (1955-1975): A conflict between North and South Vietnam, with involvement from the United States and other nations.",
   ": Boris Yeltsin's legendary address to the Russians remains. Notice of resignation.",
   ": The Arab Spring (2010-2012): A series of uprisings and protests across the Middle East and North Africa, demanding political reform and greater freedoms.",
   ": In the photo, you can see the first speech of Stalin. Serving in the Russian Civil War before overseeing the Soviet Union's establishment in 1922, Stalin assumed leadership over the country following Lenin's death in 1924. ",
   ': One of the largest protests in Israel"s history is known as the "Social Justice Protests". The primary motivation behind these protests was a wide range of social and economic issues, including the high cost of living, affordable housing shortages, income inequality, and a perceived lack of government.',
   ": In the photo, you can see the finish of The Indian Independence Movement (1919-1947): A campaign for independence from British rule in India, led by figures like Mahatma Gandhi.",
   ": Sigaret propaganda was very popular in America in 1940 - 1950. Famous American actor John Wayne. John Wayne began promoting cigarettes in the late 1940s.",
   ": Wilbur and Orville Wright spent four years of research and development to create the first successful powered airplane, the 1903 Wright Flyer. It first flew at Kitty Hawk, North Carolina, on December 17, 1903, with Orville at the controls.",
   ": The Roaring Twenties, also known as the Jazz Age, refers to a cultural and social period in the United States (and some other Western countries) during the 1920s. It was a time of significant economic prosperity, rapid urbanization, and major cultural shifts.",
   ": The Treaty of Versailles (1919): The peace treaty that officially ended World War I and imposed heavy penalties on Germany, contributing to the rise of Hitler and the start of World War II.",
   ": Construction of the Berlin Wall begins, dividing East and West Germany.",
   ": Iranian Revolution overthrows the Shah of Iran and establishes an Islamic republic.",
   ": The First Zionist Congress (1897): The gathering of Jewish leaders, led by Theodor Herzl, to discuss the establishment of a homeland for the Jewish people.",
   ": D-Day (1944) or (Operation Neptune): The Allied invasion of Normandy, France, on June 6, 1944, marked a turning point in World War II and eventually led to the liberation of Europe from Nazi control.",
   ": The Civil Rights Movement (1950s-1960s): A social and political movement in the United States aimed at ending racial segregation and discrimination against African Americans, led by figures such as Martin Luther King Jr.",
   ": The first FIFA World Cup, was held in 1930. It took place in Uruguay, and the host nation emerged as the winner. Uruguay defeated Argentina in the final match by a score of 4-2 to become the first-ever World Cup champion.",
   ": Spanish-American War leads to the United States acquiring Puerto Rico, Guam, and the Philippines.",
];

const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const number = document.querySelector('.num');
const playerScoreInfo = document.querySelector('.score');
const playerScore = document.getElementById('player__score1');
const correctYear = document.getElementById('correct__year');
const photoStory = document.getElementById('player__story1');
const image = document.querySelector('.image');
const image1 = document.querySelector('.image1');
const btnNextRound = document.querySelector('.next__btn');
const gameRound = document.querySelector('.round');
const resultInf = document.querySelector('.result-information');
const refreshGame = document.querySelector('.close-modal');
let round = 1;
let gameDifficult = 0;


//slider
input.addEventListener('input', () => {
   number.textContent = input.value;
});

//random 
let randomValue = Math.floor(Math.random() * 10 + gameDifficult);
image.src = `images/photo${randomValue}.jpg`;
image1.src = `images/photo${randomValue}.jpg`;

//?----------------game difficulty

const btnEasy = document.querySelector('.easy__btn');
const btnMiddle = document.querySelector('.midle__btn');
const btnHard = document.querySelector('.hard__btn');
const btnExpert = document.querySelector('.expert__btn');

btnEasy.addEventListener('click', function () {
   btnEasy.style.cssText = `background: rgb(187, 178, 178);`;
   btnMiddle.style.cssText = `background: #e0e0e0;`; btnHard.style.cssText = `background: #e0e0e0;`; btnExpert.style.cssText = `background: #e0e0e0;`;//reset styles
   gameDifficult = 0;
   while (randomValue > 10) randomValue -= 10;//reset dificulty
   randomValue += gameDifficult;
   image.src = `images/photo${randomValue}.jpg`;//put new photo
   image1.src = `images/photo${randomValue}.jpg`;//put new zoom
});
btnMiddle.addEventListener('click', function () {
   btnMiddle.style.cssText = `background: rgb(187, 178, 178);`;
   btnEasy.style.cssText = `background: #e0e0e0;`; btnHard.style.cssText = `background: #e0e0e0;`; btnExpert.style.cssText = `background: #e0e0e0;`;
   gameDifficult = 10;
   while (randomValue > 10) randomValue -= 10;
   randomValue += gameDifficult;
   image.src = `images/photo${randomValue}.jpg`;
   image1.src = `images/photo${randomValue}.jpg`;
});
btnHard.addEventListener('click', function () {
   btnHard.style.cssText = `background: rgb(187, 178, 178);`;
   btnEasy.style.cssText = `background: #e0e0e0;`; btnMiddle.style.cssText = `background: #e0e0e0;`; btnExpert.style.cssText = `background: #e0e0e0;`;
   gameDifficult = 20;
   while (randomValue > 10) randomValue -= 10;
   randomValue += gameDifficult;
   image.src = `images/photo${randomValue}.jpg`;
   image1.src = `images/photo${randomValue}.jpg`;
});
btnExpert.addEventListener('click', function () {
   btnExpert.style.cssText = `background: rgb(187, 178, 178);`;
   btnEasy.style.cssText = `background: #e0e0e0;`; btnHard.style.cssText = `background: #e0e0e0;`; btnMiddle.style.cssText = `background: #e0e0e0;`;
   gameDifficult = 30;
   while (randomValue > 10) randomValue -= 10;
   randomValue += gameDifficult;
   image.src = `images/photo${randomValue}.jpg`;
image1.src = `images/photo${randomValue}.jpg`;
});



//?player score function
let averageScore = 0;
function funPlayerScore() {
   let wrongsY = 0;
   let finalScore = 100;
   if (input.value > photoValues[randomValue]) {
      wrongsY = input.value - photoValues[randomValue];
      finalScore -= wrongsY;
      finalScore < 1 ? playerScore.textContent = `1% accuracy` :
      playerScore.textContent = `${finalScore}% accuracy`;
      finalScore > 95 ?
         playerScore.style.color = "green" : finalScore > 85 ? playerScore.style.color = "orange" :
            playerScore.style.color = "red";
   } else if (input.value < photoValues[randomValue]) {
      wrongsY = photoValues[randomValue] - input.value;
      finalScore -= wrongsY;
      finalScore < 1 ? playerScore.textContent = `1% accuracy` :
      playerScore.textContent = `${finalScore}% accuracy`;
      finalScore > 95 ?
         playerScore.style.color = "green" : finalScore > 85 ? playerScore.style.color = "orange" :
            playerScore.style.color = "red";
   } else {
      playerScore.textContent = `100% accuracy`;
      playerScore.style.color = "gold";
   }
   if (finalScore < 1) finalScore = 1;
   averageScore += finalScore;
   const avrgS = Math.round(averageScore / 5);
   document.getElementById('percentaverage').textContent = `${avrgS}`;//put score
   document.getElementById('gamepoints').textContent = `${Math.round(averageScore)}`;//put average percent score
   avrgS > 99 ? funScoreInf(0) : avrgS > 94 ? funScoreInf(1) : avrgS > 88 ? funScoreInf(2) : avrgS > 70 ?//whick information we will diplay
      funScoreInf(3) : avrgS > 55 ? funScoreInf(4) : funScoreInf(5);
};
//?put the information about player mark
function funScoreInf(score) {
   switch (score) {
      case 0: resultInf.textContent = `You have a perfect score of 100%. You are better than 99% of all people. Congratulations!`; break;
      case 1: resultInf.textContent = `You have a very high score, more than 94%. It's more than 90% of other people. Excellent!`; break;
      case 2: resultInf.textContent = `You have a good score, more than 88 %. It's better than 65% of other people. Good job!`; break;
      case 3: resultInf.textContent = `You have a normal score, more than 70%. It's more than 51% of other people. 😉`; break;
      case 4: resultInf.textContent = `You have a middle score, it's more than 55%. It's better than 39% of other people.😐`; break;
      case 5: resultInf.textContent = `You have a low score, it's less than 55%. It's lower than 65% of other people. 😥`; break;
   };

}

//?put the correct year
function funCorrectY() {
   correctYear.textContent = `${photoValues[randomValue]}`;
   correctYear.style.cssText = `
   font-weight: bold;
   text-decoration: underline;
   `;
}

//?put description from photoDescription (array)
function funPhotoInf() {
   photoStory.textContent = `${photoDescription[randomValue]}`;
}

//!submit (main button)
button.addEventListener('click', function () {
   playerScoreInfo.classList.remove('hidden');
   funPlayerScore();
   funCorrectY();
   funPhotoInf();
   button.setAttribute('disabled', 'disabled');
   window.scrollTo({top: 500,left: 0, behavior: "smooth"});
})

//!next round button
btnNextRound.addEventListener('click', function () {
   playerScoreInfo.classList.add('hidden');
   let previousRandomValue = randomValue;
   randomValue = Math.floor(Math.random() * 10 + gameDifficult); 
   while(previousRandomValue === randomValue) randomValue = Math.floor(Math.random() * 10 + gameDifficult);//do not repeats same images
   image.src = `images/photo${randomValue}.jpg`;
   image1.src = `images/photo${randomValue}.jpg`;
   if (round === 4) {
      btnNextRound.textContent = `Check the resoult`;
   }
   round++;
   gameRound.textContent = `${round}`;
   if (round === 6) {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      window.scrollTo({top: 0,left: 0});
      openBoard();
   }
   button.removeAttribute('disabled');
   window.scrollTo({top: 0,left: 0, behavior: "smooth"});
});



//!!-------------------!result of the game

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');//!

const openBoard = function () {
   modal.classList.remove('hidden1');
   overlay.classList.remove('hidden1');
   document.querySelector('body').style.cssText = `overflow: hidden;`;
}
   
const closeBoard = function () {
   modal.classList.add('hidden1');
   overlay.classList.add('hidden1');
}

//?refresh the game

refreshGame.addEventListener('click', function () {
   round = 1;
   gameRound.textContent = `${round}`;
   modal.classList.add('hidden1');
   overlay.classList.add('hidden1');
   randomValue = Math.floor(Math.random() * 10 + gameDifficult);//!
   image.src = `images/photo${randomValue}.jpg`;
   image1.src = `images/photo${randomValue}.jpg`;
   averageScore = 0;
   document.querySelector('body').style.cssText = `overflow: visible;`;
});

//!--------------------------------zoom

let zoom = document.querySelector('.photo');
zoom.addEventListener('mousemove', (e) => {
   zoom.style.setProperty('--zoom-show', 'block');
   let positionPx = e.x - zoom.getBoundingClientRect().left;
   let positionPy = e.y - zoom.getBoundingClientRect().top;

   let positionX = 100 * positionPx / zoom.offsetWidth;
   let positionY = 100 * positionPy / zoom.offsetHeight;

   zoom.style.setProperty('--zoom-x', positionX + '%');
   zoom.style.setProperty('--zoom-y', positionY + '%');
})

zoom.addEventListener('mouseout', () => {
   zoom.style.setProperty('--zoom-show', 'none');
});

//!zoom when we move mouse above the image 
image.addEventListener('mousemove', function () {
   image1.style.cssText = `transform: scale(1.28);`;
})

//!menu
const menuBoard = document.querySelector('.menu__bord');
const overlay2 = document.querySelector('.overlay2');
const btnMenu = document.querySelector('.icon');
const btnclose = document.querySelector('.btnclose');

btnMenu.addEventListener('click', function () {
   funOpenMenu();
});
overlay2.addEventListener('click', funCloseMenu);

function funOpenMenu() {
   menuBoard.classList.remove('hidden2');
   overlay2.classList.remove('hidden2');
   document.querySelector('body').style.cssText = `overflow: hidden;`;
}
function funCloseMenu() {
   document.querySelector('body').style.cssText = `overflow: overflow: visible;;`;
   menuBoard.classList.add('hidden2');
   overlay2.classList.add('hidden2');
   
}
btnclose.addEventListener('click', function () {
   funCloseMenu();
});
//close menu esk , open menu 1 
window.addEventListener('keydown', function (event) {
   switch (event.key) {
      case 'Escape':
         funCloseMenu();
         funCloseInfMenu(); break;
      case '1':
         funOpenMenu(); break;
   }
});


//!----------------------------Information button

const infBtn = document.querySelector(".info");//information btn
const infBord = document.querySelector('.information__btn');
const overlay3 = document.querySelector('.overlay3');//overlay
const btnCloseInf = document.querySelector('.info__close');

infBtn.addEventListener('click', function () {
   window.scrollTo({top: 0,left: 0});
   infBord.classList.remove('hidden3');
   overlay3.classList.remove('hidden3');
   document.querySelector('body').style.cssText = `overflow: hidden;`;
});
overlay3.addEventListener('click', funCloseInfMenu);
btnCloseInf.addEventListener('click', funCloseInfMenu);

function funCloseInfMenu() {
   infBord.classList.add('hidden3');
   overlay3.classList.add('hidden3');
   document.querySelector('body').style.cssText = `overflow: visable;`;
}





