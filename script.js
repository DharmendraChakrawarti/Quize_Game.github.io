const askquestions = [

    {
        question: "What is the capital of India ?",
        a: "Chandigarh",
        b: "Delhi",
        c: "Moga",
        d: "Mumbai",
        answer: "ans2"
    },



    {
        question: "What is the capital of Punjab ?",
        a: "Patiala",
        b: "Moga",
        c: "Amritsar",
        d: "Chandigarh",
        answer: "ans4"
    },



    {
        question: "What is the capital of Maharashtara ?",
        a: "Pune",
        b: "Mumbai",
        c: "Jandiala",
        d: "Varanasi",
        answer: "ans2"
    },



    {
        question: "What is the capital of Madhya Pradesh ?",
        a: "Lucknow",
        b: "Delhi",
        c: "Bhopal",
        d: "Indore",
        answer: "ans3"
    }
];

var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var submitanswers = document.querySelector("#submit");
var answers = document.querySelectorAll('.answer');
var showscores=document.querySelector("#showScore");

let count=0;
var score=0;
const execute = () =>{

   question.innerHTML=askquestions[count].question;
   option1.innerHTML=askquestions[count].a;
   option2.innerHTML=askquestions[count].b;
   option3.innerHTML=askquestions[count].c;
   option4.innerHTML=askquestions[count].d;

}

execute();

const getcheckedanswer = () =>{

    let answer;
    answers.forEach((currentelem)=>{
 
        if(currentelem.checked){
            answer=currentelem.id
        }
    });
    return answer;
}

submitanswers.addEventListener('click',()=>{
var checkedanswer=getcheckedanswer();
// console.log(checkedanswer);

if(checkedanswer==askquestions[count].answer){
         score++;
}


var deselect = ()=>{
    answers.forEach((currelem)=>currelem.checked=false)
}


count++;


deselect();
if(count<askquestions.length){
    execute();
}

else{
    showscores.innerHTML=`
    <h3 style="padding-top:2rem;font-size: 2rem ; text-align: center;"> Your Score ${score}/${askquestions.length}</h3>
    <button id="sco" class="btn" 
     onclick="location.reload()">Start Again</button>
    `
    showscores.classList.remove('scoreArea');
}

})
