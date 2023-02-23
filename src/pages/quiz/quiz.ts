import Page from "../../core/templates/page";
import './quiz.css';
import Chart from 'chart.js/auto';
import {fishDataRu} from './quiz_BD/BD_animal_ru';


class QuizPage extends Page {
    
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
            <div class="level"> LEVEL:
              <div class=" liLevel liLevelActiv">1</div>
              <div class=" liLevel">2</div>
              <div class=" liLevel">3</div>
              <div class=" liLevel">4</div>
            </div>
            <div class = "wrapperScore">
              <div class="score">Score: 0</div>
            </div>
          </div>
          <p class="taskDiscription">Arrange photos of fish by their names in empty cells</p> 
          <span class="fishDiscription"></span>
          <button class="btnQuiz">NEXT QUESTION</button>
        </section>
        <section class="resultQuiz">
          <h2 class="resultText">RESULT</h2>
          <p class="winText"></p>
          <div class="buttonsResult">
            <button class="btnStatistik btnResult">STATISTICS</button>
            <button class="btnMore btnResult">TRY AGAIN</button>
          </div>
        </section>
        <section class="sectionStatistic">
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
   
      function drawBlockQuiz(){
        const bgQuiz = <HTMLElement>document.querySelector('.tasks');
        bgQuiz.style.opacity = "1";
        bgQuiz.style.transform = "translate3d(0px, 0px, 0px)";
      };
      setTimeout (drawBlockQuiz, 4000);

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
let renderQuiz = () => {
      const fishDiscription = <HTMLElement>document.querySelector('.fishDiscription');
      let level = 0;
      let total_points = 0;
      let currentFishName: {
        [x: string]: string | number; id: number; 
        }[];
      let currentFishFoto: {
        [x: string]: string | number; image: string; 
        }[];
      let finishResult = [];
      let idQuestionName = [];
      let fishDiscrip;
     


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
   
    //  drag and drop
let dragAndDrop =  () => { 

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
  
          const score = <HTMLElement>document.querySelector('.score'); 
          total_points += (curdragel.id === curdropel.id) ? 1 : 0;     //  Совпадают ? будет +1 : иначе 0
          score.textContent = `Score: ${total_points}`;
          
          //получаем массив ОТВЕТОВ (id.картинок)
        finishResult.push(curdragel.id);
        fishDiscrip = randomFishDiscription()
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
  
        // переходим к следующему вопросу
      const btnNextQuestion = <HTMLElement>document.querySelector('.btnQuiz');
      btnNextQuestion.addEventListener('click', (event: Event) => {
          fishDiscription.remove()
          newLvl();
      }); 
        // пройти викторину ещё раз
      const btnMore = <HTMLElement>document.querySelector('.btnMore');
      btnMore.addEventListener('click', () => {
        window.location.reload();
      });
        // перейти в блок статистики
      const btnStatistik = <HTMLElement>document.querySelector('.btnStatistik');
      btnStatistik.addEventListener('click', () => {
        const bgResult = <HTMLElement>document.querySelector('.resultQuiz');
        const sectionStatistic = <HTMLElement>document.querySelector('.sectionStatistic');
        const containerStatistic = document.createElement('div');
        bgResult.remove();
        const blockStatistic = `
        <button class="close">X</button>
        <h2 class="statisticsName">STATISTICS QUIZ</h2>
        <table class="tableStatistic">
          <tr><th>Level</th><th>Score</th></tr>
          <tr><td>1</td><td>${returnPoints1}</td></tr>
          <tr><td>2</td><td>${result2}</td></tr>
          <tr><td>3</td><td>${result3}</td></tr> 
          <tr><td>4</td><td>${result4}</td></tr> 
          <tr><th>Total</th><td>${total_points}</td></tr> 
        </table>
        <div class="wrapperCanvas1">
          <canvas id="myChart1" class="myChart1"></canvas>
        </div> 
        <div class="wrapperCanvas2">
          <canvas id="myChart2" class="myChart2"></canvas>
        </div> 
        `;
        containerStatistic.classList.add('containerStatistic');
        containerStatistic.innerHTML = blockStatistic;
        sectionStatistic.append(containerStatistic);
              // пройти викторину ещё раз
      let btnCloseStatistic = <HTMLElement>document.querySelector('.close');
      btnCloseStatistic.addEventListener('click', () => {
        window.location.reload();
      });
        const ctx = <HTMLCanvasElement>document.getElementById('myChart1');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
            datasets: [{
              label: 'Number of points',
              data: [returnPoints1, result2, result3, result4],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        const ctx2 = <HTMLCanvasElement>document.getElementById('myChart2');
        new Chart(ctx2, {
            type: 'doughnut',
            data: {
              datasets: [
                {
                  data: [returnPoints1, result2, result3, result4],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(58, 108, 58)',
                    'rgb(75, 192, 192)',
                  ],
                },
              ],
              labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
            },
        });
      });
        //новый вопрос
        let returnPoints1:number;
        let result2:number;
        let result3:number;
        let result4:number;
    const newLvl =  () => {
        const containerQuizBox = <HTMLDivElement>document.querySelector('.tasks'); 
        const winText = <HTMLElement>document.querySelector('.winText');
        const containerImg =  <HTMLCollectionOf<HTMLDivElement>><unknown>document.querySelectorAll('.containerImg'); 
        let blocksImg = Array.from(containerImg);
          for(let elem of blocksImg){
           elem.remove()
          }
          if(level === 3){
            containerQuizBox.remove();
            drawResult();
            winText.textContent = `Вы ответили на все вопросы и набрали ${total_points} из 24 возможных баллов!`;
            let serialObj4 = JSON.stringify(total_points);
            localStorage.setItem("scoreLevel4", serialObj4);
            let returnPoints4 = JSON.parse(localStorage.getItem("scoreLevel4") || "")
            let returnPoints3 = JSON.parse(localStorage.getItem("scoreLevel3") || "") 
            result4 = returnPoints4 - returnPoints3;
          }
          if(level === 0){
            let serialObj1 = JSON.stringify(total_points);
            localStorage.setItem("scoreLevel1", serialObj1);
            returnPoints1 = JSON.parse(localStorage.getItem("scoreLevel1") || "") 
          }
          if(level === 1){
            let serialObj2 = JSON.stringify(total_points);
            localStorage.setItem("scoreLevel2", serialObj2);
            let returnPoints2 = JSON.parse(localStorage.getItem("scoreLevel2") || "")
            let returnPoints1 = JSON.parse(localStorage.getItem("scoreLevel1") || "") 
            result2 = returnPoints2 - returnPoints1;
          }
          if(level === 2){
            let serialObj3 = JSON.stringify(total_points);
            localStorage.setItem("scoreLevel3", serialObj3);
            let returnPoints3 = JSON.parse(localStorage.getItem("scoreLevel3") || "")
            let returnPoints2 = JSON.parse(localStorage.getItem("scoreLevel2") || "") 
            result3 = returnPoints3 - returnPoints2
          }
          const activLavel = document.querySelectorAll('.liLevel');
          level = level + 1;
          activLavel[level].classList.add('liLevelActiv');
          activLavel[level - 1].classList.remove('liLevelActiv');
          currentFishName = randomFishName();
          currentFishFoto = randomFishFoto();
          fishDiscrip = randomFishDiscription();
       question();
       dragAndDrop();
      }
    
  }; 
  setTimeout (renderQuiz, 4000);
        return  this.container;

  }
}

export default QuizPage

