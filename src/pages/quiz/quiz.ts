import Page from "../../core/templates/page";
import './quiz.css'
import { renderBackground } from "../../core/components/background-video";
import fishDataRu from './quiz_BD/BD_animal_ru';

class QuizPage extends Page {
    [x: string]: any;
    static TextObject = {
        MainTitle: 'Quiz Page'
    }

    constructor(id: string) {
        super(id);
        
    }

    render() {

      //отрисовываем основную часть страницы
        const wrapper_quiz = document.createElement('div');
        const informationLayout = ` 
        <div class="wrapper_quiz">
        <div class="bg-image"></div>
        <section id="content" class="tasks">
        <div class="containerHeaderQuiz">
        <div>
          <h2 class="quizName">FishQuiz</h2>
        </div>
          <div class="level"> УРОВЕНЬ:
            <div class=" liLevel liLevelActiv">1</div>
            <div class=" liLevel">2</div>
            <div class=" liLevel">3</div>
            <div class=" liLevel">4</div>
          </div>
          <div class = "wrapperScore">
            <div class="score">Score: 0</div>
          </div>
        </div>
          <span class="fishDiscription"></span>
          <button class="btnQuiz" >СЛЕДУЮЩИЙ ВОПРОС</button>
          </section>
          <section class="resultQuiz">
            <h2 class="resultText">РЕЗУЛЬТАТ</h2>
            <p class="winText"></p>
            <div class="buttonsResult">
              <button class="btnStatistik btnResult">СТАТИСТИКА</button>
              <button class="btnMore btnResult">ПОПРОБОВАТЬ ЕЩЁ РАЗ</button>
            </div>
          </section>
        </div>
      `;
        wrapper_quiz.innerHTML = informationLayout

        this.container.append(wrapper_quiz);
        
      //анимация черепахи
      function swimTartuga(){
        const bgImage = <HTMLElement>document.querySelector('.bg-image')
        bgImage.style.opacity = "1";
        bgImage.style.transform = "translate3d(200px, 0px, 0px)";
      };
      setTimeout (swimTartuga, 400);
      //анимация блока викторины
    let drawQuiz = () =>{
      function drawBlockQuiz(){
        const bgQuiz = <HTMLElement>document.querySelector('.tasks');
        bgQuiz.style.opacity = "1";
        bgQuiz.style.transform = "translate3d(0px, 0px, 0px)";
      };
      setTimeout (drawBlockQuiz, 4000);
    }
    drawQuiz();
   
      //анимация блока результатов
      let drawResult = () => {
        function drawBlockResult(){
          const bgResult = <HTMLElement>document.querySelector('.resultQuiz')
          bgResult.style.opacity = "1";
          bgResult.style.transform = "translate3d(0px, 0px, 0px)";
        };
        setTimeout (drawBlockResult, 400);
      }

      //отрисовываем блок с викториной

  document.addEventListener('DOMContentLoaded', (event: Event) => { 
    const fishDiscription = <HTMLElement>document.querySelector('.fishDiscription');
      let level = 0;
      let currentFishName: {
        [x: string]: any; id: any; 
        }[];
      let currentFishFoto: {
        [x: string]: any; image: any; 
        }[];
      let total_points = 0;
      let finishResult:any = [];
      let idQuestionName:any = [];
      let fishDiscrip:any;

     // переремешиваем блоки с фото и блоки с названиями
    const randomFishFoto = () => { 
      const fish = fishDataRu[level].slice();
      return fish.sort(() => Math.random() - 0.5);
    }
    currentFishFoto = randomFishFoto();

    const randomFishName = () => { 
      const fish = fishDataRu[level].slice();
      return fish.sort(() => Math.random() - 0.5);
    }
    currentFishName = randomFishName();

    const randomFishDiscription = () => { 
      const fish = fishDataRu[level].slice();
      let discFish = fish.sort(() => Math.random() - 0.5);
      if(finishResult.length === 6){
        fishDiscription.textContent = ` ${discFish[0].description}`;
        fishDiscription.style.display = "grid";
      }
    }
    fishDiscrip = randomFishDiscription();

     //отрисовываем 6 блоков вопросов
    let question = () => {

    for(let i = 0; i < 6; i ++){
        const containerQuizBox  = <HTMLDivElement>document.querySelector('.tasks');
        const containerImg = document.createElement('div');
        const blocksImg = `
        <div>
          <img id="${currentFishFoto[i].id}" src="${currentFishFoto[i].image}"  draggable="true" class="box img_box">
        </div>
        <div class="empty_box">
          <div id="${currentFishName[i].id}" class="box task_box"></div>
          <h2 class="animal_name">${currentFishName[i].name}</h2>
        </div>
        `;
        containerImg.classList.add('containerImg');
        containerImg.innerHTML = blocksImg;
        containerQuizBox.append(containerImg);
              //получаем массив из id названий рыб
        idQuestionName.push(currentFishName[i].id);
      }
    }
    question();
   
    //  drag and drop!!!!
let dragAndDrop = () => { 
//let correct = ["", "", "", "", "", ""];
let curdrag = "";
let curdragel: HTMLElement;
let curdropel: HTMLElement;
let isLeave = false;
const imgs = [...document.querySelectorAll(".img_box")];

const divs = [...document.querySelectorAll(".task_box")];

const dispatcher = (evt: MouseEvent) => {
  switch (evt.type) {
    case "dragstart":
      curdragel = <HTMLElement>evt.target;
      isLeave = true;
      (<DataTransfer>(<DragEvent>evt).dataTransfer).setData(
        "text",
        (<HTMLElement>evt.target).id
      );
      curdrag = (<DataTransfer>(<DragEvent>evt).dataTransfer).getData("text");
      break;
    case "dragleave":
      isLeave = true;
      break;
    case "dragover":
      evt.preventDefault();
      curdropel = <HTMLElement>evt.target;
      isLeave = false;
      break;
    case "drop":
      evt.preventDefault();
  
      curdropel.appendChild(curdragel);
    
          //получаем массив ОТВЕТОВ (id.картинок)
      finishResult.push(curdragel.id);
      randomFishDiscription();
      break;
      default:
      break;
  }
};

    imgs.map((el) => {
      (<HTMLElement>el).addEventListener("dragstart", dispatcher);
    });
    
    divs.map((el) => {
      (<HTMLElement>el).addEventListener("dragover", dispatcher);
      (<HTMLElement>el).addEventListener("drop", dispatcher);
    });

  
  };
  dragAndDrop();
  
          //подсчёт очков
    
      const btnNextQuestion = <HTMLElement>document.querySelector('.btnQuiz');

      btnNextQuestion.addEventListener('click', (event: Event) => {
        const score = <HTMLElement>document.querySelector('.score'); 
        for (let i = 0; i < idQuestionName.length; i++) {
          if (finishResult[i] === "") continue;                                 // +0 ?! Строка пустая - ничего не делать.
            total_points += (finishResult[i] == idQuestionName[i]) ? 1 : 0;     //  Совпадают ? будет +1 : иначе 0
          }
          
          score.textContent = `Score: ${total_points}`;
          fishDiscription.style.display = 'none';
          newLvl();
      }); 
  
      const btnMore = <HTMLElement>document.querySelector('.btnMore');
      btnMore.addEventListener('click', () => {
        window.location.reload();
      })

        //новый вопрос
    const newLvl = () => {
        const fishDiscription = <HTMLElement>document.querySelector('.fishDiscription');
        const containerQuizBox = <HTMLDivElement>document.querySelector('.tasks'); 
        const winText = <HTMLElement>document.querySelector('.winText');
        const containerImg =  <HTMLCollectionOf<HTMLDivElement>><unknown>document.querySelectorAll('.containerImg'); 
        let blocksImg = Array.from(containerImg)
          for(let elem of blocksImg){
           elem.style.display = 'none';
          }
          if(level === 3){
            containerQuizBox.style.display = 'none';
            drawResult();
            winText.textContent = `Вы ответили на все вопросы и набрали ${total_points} из 24 возможных баллов!`;
          }
          const activLavel = document.querySelectorAll('.liLevel');
          level = level + 1;
          activLavel[level].classList.add('liLevelActiv');
          activLavel[level - 1].classList.remove('liLevelActiv');
          currentFishName = randomFishName();
          currentFishFoto = randomFishFoto();
          question();
          dragAndDrop();
      }
   
    
  }); 
 
        return this.container;

  }
}

export default QuizPage

