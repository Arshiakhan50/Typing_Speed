let log = document.getElementById('log');
let refText = document.getElementById('referenceText');
let result = document.getElementById('result');
let timespend = document.getElementById('timespend');
let word = document.getElementById('word');
let button = document.getElementById('bt1');
let button2 = document.getElementById('bt2');
let buttonS = document.getElementById('settings');
let buttonSuffle = document.getElementById('suffle');

let timer = 0;
let eof;
var i = 0;
let wrongType=0;
button2.disabled = true;


var articles = ["It was a large lovely garden, with soft green grass. Here and there over the grass stood beautiful flowers like stars, and there were twelve peach-trees that in the spring-time broke out into delicate blossoms of pink and pearl, and in the autumn bore rich fruit. The birds sat on the trees and sang so sweetly that the children used to stop their games in order to listen to them. 'How happy we are here!' they cried to each other.",
"One day the Giant came back. He had been to visit his friend the Cornish ogre, and had stayed with him for seven years. After the seven years were over he had said all that he had to say, for his conversation was limited, and he determined to return to his own castle. When he arrived he saw the children playing in the garden.",
"'My own garden is my own garden,' said the Giant; 'any one can understand that, and I will allow nobody to play in it but myself.' So he built a high wall all round it, and put up a notice-board.",
"Suddenly he rubbed his eyes in wonder, and looked and looked. It certainly was a marvellous sight. In the farthest corner of the garden was a tree quite covered with lovely white blossoms. Its branches were all golden, and silver fruit hung down from them, and underneath it stood the little boy he had loved.",
"Suddenly he rubbed his eyes in wonder, and looked and looked. It certainly was a marvellous sight. In the farthest corner of the garden was a tree quite covered with lovely white blossoms. Its branches were all golden, and silver fruit hung down from them, and underneath it stood the little boy he had loved.",
"True! - nervous - very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses - not destroyed - not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth.",
"I kept quite still and said nothing. For a whole hour I did not move a muscle, and in the meantime I did not hear him lie down. He was still sitting up in the bed listening; - just as I have done, night after night, hearkening to the death watches in the wall.",
"When I had waited a long time, very patiently, without hearing him lie down, I resolved to open a little - a very, very little crevice in the lantern. So I opened it - you cannot imagine how stealthily, stealthily - until, at length a simple dim ray, like the thread of the spider, shot from out the crevice and fell full upon the vulture eye.",
"The Tree itself was an oak, I think - it's not really my area. Full size, fully grown. It appeared to be just putting out the first leaves of spring. And it was ever so slightly blurred. Not so much as to be obvious, but as you stared at it your eyeballs started to ache, and then you realised that you were constantly trying to focus properly. It was as if the light around the Tree had been slightly greased.",
"I replied cautiously.It's - dramatic. Different. Totally unique, of course. Out of the corner of my eye I saw that the Tree was now fully leaved, radiating that quality of green that nature does so well and artists struggle to imitate.",
"'That girl really twisted your head,' Gio said, lighting a cigarette. Despite the cool air, drops of sweat glittered on his black hair and tanned skin. Soon he would lose that tan again and be just a cheesy fifteen-year-old Italo with excess hormones. Not unlike me.",
"I am a German by birth and descent. My name is Schmidt. But by education I am quite as much an Englishman as a 'Deutscher', and by affection much more the former. My life has been spent pretty equally between the two countries, and I flatter myself I speak both languages without any foreign accent.",
"'Do you think that necessary?' I said respectfully. 'I can assure you that from the moment you entrust me with the papers they shall never quit me day or night. And if there were any postal delay - you say time is valuable in this case - or if the papers were stolen in the transit - such things have happened - my whole mission would be worthless.",
"Soon thereafter, Ophelia rushes to her father, telling him that Hamlet arrived at her door the prior night half-undressed and behaving erratically. Polonius blames love for Hamlet's madness and resolves to inform Claudius and Gertrude. As he enters to do so, the king and queen finish welcoming Rosencrantz and Guildenstern, two student acquaintances of Hamlet, to Elsinore. The royal couple has requested that the students investigate the cause of Hamlet's mood and behaviour. Additional news requires that Polonius wait to be heard: messengers from Norway inform Claudius that the King of Norway has rebuked Prince Fortinbras for attempting to re-fight his father's battles. The forces that Fortinbras had conscripted to march against Denmark will instead be sent against Poland, though they will pass through Danish territory to get there.",
"Hamlet jokes with Claudius about where he has hidden Polonius's body, and the king, fearing for his life, sends Rosencrantz and Guildenstern to accompany Hamlet to England with a sealed letter to the English king requesting that Hamlet be executed immediately.Unhinged by grief at Polonius's death, Ophelia wanders Elsinore. Laertes arrives back from France, enraged by his father's death and his sister's madness. Claudius convinces Laertes that Hamlet is solely responsible, but a letter soon arrives indicating that Hamlet has returned to Denmark, foiling Claudius's plan. Claudius switches tactics, proposing a fencing match between Laertes and Hamlet to settle their differences. Laertes will be given a poison-tipped foil, and, if that fails, Claudius will offer Hamlet poisoned wine as a congratulation. Gertrude interrupts to report that Ophelia has drowned, though it is unclear whether it was suicide or an accident caused by her madness.",
"While Duncan is asleep, Macbeth stabs him, despite his doubts and a number of supernatural portents, including a hallucination of a bloody dagger. He is so shaken that Lady Macbeth has to take charge. In accordance with her plan, she frames Duncan's sleeping servants for the murder by placing bloody daggers on them. Early the next morning, Lennox, a Scottish nobleman, and Macduff, the loyal Thane of Fife, arrive. A porter opens the gate and Macbeth leads them to the king's chamber, where Macduff discovers Duncan's body. Macbeth murders the guards to prevent them from professing their innocence, but claims he did so in a fit of anger over their misdeeds. Duncan's sons Malcolm and Donalbain flee to England and Ireland, respectively, fearing that whoever killed Duncan desires their demise as well. The rightful heirs' flight makes them suspects and Macbeth assumes the throne as the new King of Scotland as a kinsman of the dead king. Banquo reveals this to the audience, and while sceptical of the new King Macbeth, he remembers the witches' prophecy about how his own descendants would inherit the throne; this makes him suspicious of Macbeth.",
"Now the Earl of Kent, when he was banished, made as though he would go into another country, but instead he came back in the disguise of a servingman and took service with the King. The King had now two friends--the Earl of Kent, whom he only knew as his servant, and his Fool, who was faithful to him. Goneril told her father plainly that his knights only served to fill her Court with riot and feasting; and so she begged him only to keep a few old men about him such as himself.",
"Then when Lear saw that what they really wanted was to drive him away, he left them. It was a wild and stormy night, and he wandered about the heath half mad with misery, and with no companion but the poor Fool. But presently his servant, the good Earl of Kent, met him, and at last persuaded him to lie down in a wretched little hovel. At daybreak the Earl of Kent removed his royal master to Dover, and hurried to the Court of France to tell Cordelia what had happened.",
"AEGEON was a merchant of Syracuse, which is a seaport in Sicily. His wife was AEmilia, and they were very happy until AEgeon's manager died, and he was obliged to go by himself to a place called Epidamnum on the Adriatic. As soon as she could AEmilia followed him, and after they had been together some time two baby boys were born to them. The babies were exactly alike; even when they were dressed differently they looked the same.",
"This Drornio knew of no money except sixpence, which he had received on the previous Wednesday and given to the saddler; but he did know that his mistress was annoyed because his master was not in to dinner, and he asked Antipholus of Syracuse to go to a house called The Phoenix without delay. His speech angered the hearer, who would have beaten him if he had not fled. Antipholus of Syracuse them went to The Centaur, found that his gold had been deposited there, and walked out of the inn.",
"Meanwhile Antipholus of Ephesus waited vainly for the money which was to have released him. Never a good-tempered man, he was crazy with anger when Dromio of Ephesus, who, of course, had not been instructed to fetch a purse, appeared with nothing more useful than a rope. He beat the slave in the street despite the remonstrance of the police officer; and his temper did not mend when Adriana, Luciana, and a doctor arrived under the impression that he was mad and must have his pulse felt. He raged so much that men came forward to bind him. But the kindness of Adriana spared him this shame. She promised to pay the sum demanded of him, and asked the doctor to lead him to The Phoenix.",
"Bassanio, in his gratitude to the clever lawyer, was induced to part with the ring his wife had given him, and with which he had promised never to part, and when on his return to Belmont he confessed as much to Portia, she seemed very angry, and vowed she would not be friends with him until she had her ring again. But at last she told him that it was she who, in the disguise of the lawyer, had saved his friend's life, and got the ring from him. So Bassanio was forgiven, and made happier than ever, to know how rich a prize he had drawn in the lottery of the caskets."

];



 //random number generator
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


//random text generator 
function makerandtext(length) {
    var randtext           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ,?./()@&*+-;:{}[]&';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       randtext += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randtext;
 }
 
//check function for selecting paragraph or nosence words

function check(){ if (document.getElementById("paragraph").checked) {      
    refText.textContent = articles[getRandomArbitrary(0, articles.length)];
    referenceText = refText.textContent;
  }
    
    else{refText.textContent = makerandtext(getRandomArbitrary(5, 10));
        referenceText = refText.textContent;}}
 
    
 //calling check function for initial text in page load
check();


//after start button pressed 
function startTest() {

    eof = true;
    log.textContent = ''
    //set timer
    t = setInterval(function() {
        timespend.textContent = ` ${timer}`;
        timer++;
    }, 1000);

    button.disabled = true;
    button2.disabled = false;
    buttonS.disabled = true;
    buttonSuffle.disabled = true;
    document.addEventListener('keypress', logKey);

}

//after each key pressed
function logKey(e) {
    if (eof) {
        var kPressed = ` ${e.key}`;
        currentLetter = refLetterByLetter();
       
        
        if (kPressed == currentLetter) {

           
             //Split into two parts and change the color
             str = referenceText;
             var str1 = str.substr(0,i+1);  
             var str2 = str.substr(i+1,referenceText.length);
             console.log(str2);
             var str1 = str1.split("<br>").map(function(val){
              return str1.replace(/(\S)/g, "<span>$1</span>");
                 });
                  refText.innerHTML=str1+str2; 

            i++;
            if(` ${e.keyCode}`==32){word.textContent = '___________'}
            else{ word.textContent = ` ${kPressed}`;}
           
            log.textContent += ` ${kPressed}`;

        } 
        else {
            wrongType++;
            log1.textContent = ` ${wrongType}`;}
            

    }
    //after end of the string display result and clear counter and txt
    if(i==referenceText.length){

        eof = false;
        timer=timer-1;
       let  speed = (referenceText.length/timer *60).toFixed(2);
       let wpm = (speed/5).toFixed(2);
       let acuuracy = (referenceText.length/(referenceText.length+wrongType)*100).toFixed(2);
    
       log.innerHTML = '<b>timespend -</b>'+`${timer}`+' seconds<br/><b>total letter- </b> '+`${ referenceText.length}`+
       '<br/><b>wrong type - </b>'+ `${wrongType}`+'<br/><b>speed of typing -</b>'+ `${speed}`+
       ' letters/minute<br/><b>speed of typing -</b>'+ `${wpm}`+' Words/minute'+'   <br/><b>accuracy-</b> '+ `${acuuracy}`+'%';
      
     clearInterval(t);
        button2.disabled = true;
        button.disabled = false;
        buttonS.disabled = false;
        buttonSuffle.disabled = false;
       

        //restart counter
        timer = 0;
        i = 0;
        wrongType = 0;
        log1.textContent =''
        word.textContent =''
        timespend.textContent = ''
        check();

       
       
    }


}


//get single letter by letter of the sentence
function refLetterByLetter() {
    if (i < referenceText.length) {
        var res = referenceText.charAt(i);
       // res.style.color = 'red';
      
        return ` ${res}`;
       
    }
}

//when stop button is pressed to forcefully stop the test
function stopTest(){
    eof = false;
    clearInterval(t);
    button.disabled = false;

    //restart counter
    timer = 0;
    i = 0;
    wrongType = 0;
    word.textContent = ''; 
    log.textContent = 'Forcefully stop'
    log1.textContent ='';
    timespend.textContent = '';
    button2.disabled = true;
    buttonS.disabled = false;
    buttonSuffle.disabled = false;
    
}


//for dssigning purpose
//landing-txt effect
var srol = 0;
var txt= document.getElementById("landing-text").innerHTML;
document.getElementById("landing-text").innerHTML ='';


var speed = 150;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("landing-text").innerHTML += txt.charAt(srol);
      srol++;
      setTimeout(typeWriter, speed);
    }
  }
  //calling the function
  typeWriter();





  function settings() {
    var chhoseen_text = document.getElementById("settings_text");
    if (chhoseen_text.style.display === "none") {
        chhoseen_text.style.display = "block";
    } else {
        chhoseen_text.style.display = "none";
    }
  }


  var buttons = document.getElementById("theme");
  buttons.innerHTML = '<i class="fa fa-adjust" aria-hidden="true"></i>';
  function theme() {
   let dark = document.body.classList.toggle("dark-mode");  
    localStorage.setItem('dark',dark);
 }

if (JSON.parse(localStorage.getItem('dark'))){
    document.body.classList.add('dark-mode')
}
 


