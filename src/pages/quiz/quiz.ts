import Page from '../../core/templates/page';
import './quiz.css';
import Chart from 'chart.js/auto';
import { fishDataRu } from './quiz_BD/BD_animal_ru';
import fishDataEn from './quiz_BD/BD_animal_en';
import { langArr } from '../../utils/dataLang';
import { LanguageArr } from '../../utils/types';
import { QuizResult } from '../../utils/types';
import { getQuizResults } from '../../utils/requests';
import { setResultQuizInServer } from '../../utils/requests';


class QuizPage extends Page {
    static TextObject = {
        MainTitle: 'Quiz Page',
    };
    quizResult: QuizResult;
    quizResults: QuizResult[];

    constructor(id: string) {
        super(id);
        this.quizResult = {
            scoreLevel1: 0,
            scoreLevel2: 0,
            scoreLevel3: 0,
            scoreLevel4: 0
        };
        this.quizResults = [];
    }

    render() {
        const select = <HTMLSelectElement>document.querySelector('.header_language');
        if (select.value === 'ru') {
            let langInHash = window.location.hash.slice(1).split('=')[1];
            langInHash = select.value;
            const path = window.location.hash.slice(1).split('=')[0];
            const url = new URL(window.location.toString());
            url.hash = path + '=' + langInHash;
            window.history.pushState({}, '', url);
            select.value = 'ru';
        }


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
        wrapper_quiz.innerHTML = informationLayout;
        this.container.append(wrapper_quiz);

        if (select.value === 'ru') {
            for (const key in langArr) {
                if (this.container.querySelector('.' + key)) {
                    this.container.querySelector('.' + key)!.innerHTML =
                        langArr[key as keyof LanguageArr][select.value as keyof { ru: string; en: string }];
                }
            }
        }

        //анимация черепахи
        function swimTartuga() {
            const bgImage = <HTMLElement>document.querySelector('.bg-image');
            bgImage.style.opacity = '1';
            bgImage.style.transform = 'translate3d(200px, 0px, 0px)';
        }
        setTimeout(swimTartuga, 400);
        //анимация блока викторины

        function drawBlockQuiz() {
            const bgQuiz = <HTMLElement>document.querySelector('.tasks');
            bgQuiz.style.opacity = '1';
            bgQuiz.style.transform = 'translate3d(0px, 0px, 0px)';
        }
        setTimeout(drawBlockQuiz, 4000);

        //анимация блока результатов
        const drawResult = () => {
            function drawBlockResult() {
                const bgResult = <HTMLElement>document.querySelector('.resultQuiz');
                bgResult.style.opacity = '1';
                bgResult.style.transform = 'translate3d(0px, 0px, 0px)';
            }
            setTimeout(drawBlockResult, 400);
        };

        //отрисовываем блок с викториной
        const renderQuiz = () => {
            const fishDiscription = <HTMLElement>document.querySelector('.fishDiscription');
            let level = 0;
            let total_points = 0;
            let currentFishName: {
                [x: string]: string | number;
                id: number;
            }[];
            let currentFishFoto: {
                [x: string]: string | number;
                image: string;
            }[];
            const finishResult = [];
            const idQuestionName = [];
            // let fishDiscrip;

            // переремешиваем блоки с фото и блоки с названиями
            const randomFishFoto = () => {
                const fish = fishDataRu[level].slice();
                return fish.sort(() => Math.random() - 0.5);
            };
            currentFishFoto = randomFishFoto();

            const randomFishName = () => {
                const fish = select.value === 'ru' ? fishDataRu[level].slice() : fishDataEn[level].slice();
                return fish.sort(() => Math.random() - 0.5);
            };
            currentFishName = randomFishName();

            const randomFishDiscription = (): void => {
                const fish = select.value === 'ru' ? fishDataRu[level].slice() : fishDataEn[level].slice();
                const discFish = fish.sort(() => Math.random() - 0.5);
                if (
                    finishResult.length === 6 ||
                    finishResult.length === 12 ||
                    finishResult.length === 18 ||
                    finishResult.length === 24
                ) {
                    fishDiscription.innerHTML = ` ${discFish[0].description}`;
                    fishDiscription.style.display = 'grid';
                }
            };
            const fishDiscrip = randomFishDiscription();

            //отрисовываем 6 блоков вопросов
            const question = () => {
                for (let i = 0; i < 6; i++) {
                    const containerQuizBox = <HTMLDivElement>document.querySelector('.tasks');
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
            };
            question();

            //  drag and drop
            const dragAndDrop = () => {
                let curdrag = '';
                let curdragel: HTMLDivElement;
                let curdropel: HTMLDivElement;
                let isLeave = false;
                const imgs = [...document.querySelectorAll('.img_box')];
                const divs = [...document.querySelectorAll('.task_box')];
                const dispatcher = (evt: DragEvent | TouchEvent | Event) => {
                    switch (evt.type) {
                        case 'dragstart':
                        case 'touchstart':
                            curdragel = <HTMLDivElement>evt.target;
                            isLeave = true;
                            if (evt.type === 'dragstart') {
                                (<DataTransfer>(<DragEvent>evt).dataTransfer).setData('text', (<HTMLElement>evt.target).id);
                                curdrag = (<DataTransfer>(<DragEvent>evt).dataTransfer).getData('text');
                            } else if (evt.type === 'touchstart') {
                                curdragel = <HTMLDivElement>evt.target;
                                curdragel.style.position = 'fixed';
                                curdragel.style.marginLeft = '-4.6vw';
                                curdragel.style.height = String(curdragel.clientHeight);
                                curdragel.style.width = String(curdragel.clientWidth);
                            }
                            break;
                        case 'dragleave':
                            isLeave = true;
                            break;
                        case 'dragover':
                        case 'touchmove':
                            evt.preventDefault();
                            isLeave = false;
                            curdragel.style.left = String((<TouchEvent>evt).changedTouches[0].clientX - curdragel.clientWidth / 2);
                            curdragel.style.top = String((<TouchEvent>evt).changedTouches[0].clientY - curdragel.clientHeight / 2);
                            break;
                        case 'drop':
                        case 'touchend':
                            evt.preventDefault();
                            if (!isLeave) {
                                if (evt.type === 'drop') {
                                    curdropel = <HTMLDivElement>evt.target;
                                } else if (evt.type === 'touchend') {
                                    if ((<any>evt).clientX) {
                                        curdropel = <HTMLDivElement>document.elementFromPoint((<any>evt).clientX, (<any>evt).clientY);
                                    } else {
                                        curdropel = <HTMLDivElement>(
                                            document.elementFromPoint(
                                                (<TouchEvent>evt).changedTouches[0].clientX,
                                                (<TouchEvent>evt).changedTouches[0].clientY
                                            )
                                        );
                                    }
                                    <HTMLElement>curdropel.appendChild(curdragel);
                                    curdragel.style.left = '5vw';
                                    curdragel.style.top = '';
                                    curdragel.style.height = '';
                                    curdragel.style.width = '';
                                    curdragel.style.position = '';
                                    curdragel.style.zIndex = '';
                                }
                                curdropel.appendChild(curdragel);
                                const score = <HTMLElement>document.querySelector('.score');
                                total_points += curdragel.id === curdropel.id ? 1 : 0; //  Совпадают ? будет +1 : иначе 0
                                score.textContent = `Score: ${total_points}`;
                                //получаем массив ОТВЕТОВ (id.картинок)
                                finishResult.push(curdragel.id);
                                randomFishDiscription();
                            }
                            break;
                        default:
                            break;
                    }
                };

                imgs.map((el) => {
                    (<HTMLDivElement>el).addEventListener('dragstart', dispatcher);
                    (<HTMLDivElement>el).addEventListener('touchstart', dispatcher);
                    (<HTMLDivElement>el).addEventListener('touchmove', dispatcher);
                    (<HTMLDivElement>el).addEventListener('touchend', dispatcher);
                });

                divs.map((el) => {
                    (<HTMLDivElement>el).addEventListener('dragover', dispatcher);
                    (<HTMLDivElement>el).addEventListener('drop', dispatcher);
                });
            };
            dragAndDrop();

            // переходим к следующему вопросу
            const btnNextQuestion = <HTMLElement>document.querySelector('.btnQuiz');
            btnNextQuestion.addEventListener('click', (evt: Event) => {
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
                const btnCloseStatistic = <HTMLElement>document.querySelector('.close');
                btnCloseStatistic.addEventListener('click', () => {
                    window.location.reload();
                });
                const ctx = <HTMLCanvasElement>document.getElementById('myChart1');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
                        datasets: [
                            {
                                label: 'Number of points',
                                data: [returnPoints1, result2, result3, result4],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
                const ctx2 = <HTMLCanvasElement>document.getElementById('myChart2');
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: {
                        datasets: [
                            {
                                data: [returnPoints1, result2, result3, result4],
                                backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(58, 108, 58)', 'rgb(75, 192, 192)'],
                            },
                        ],
                        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
                    },
                });
            });
            //новый вопрос
            let returnPoints1: number;
            let result2: number;
            let result3: number;
            let result4: number;
            const newLvl = async () => {
                const containerQuizBox = <HTMLDivElement>document.querySelector('.tasks');
                const winText = <HTMLElement>document.querySelector('.winText');
                const containerImg = <HTMLCollectionOf<HTMLDivElement>>(<unknown>document.querySelectorAll('.containerImg'));
                const blocksImg = Array.from(containerImg);
                for (const elem of blocksImg) {
                    elem.remove();
                }
                fishDiscription.style.display = 'none';
                if (level === 3) {
                    containerQuizBox.remove();
                    drawResult();

                    if (localStorage.getItem("user") !== null) {

                        const userAsString = localStorage.getItem("user");
                        const userId: number = userAsString !== null ? JSON.parse(userAsString).id : null;

                        getQuizResults(userId)
                            .then((quizResults) => {
                                if (quizResults) {

                                    switch (quizResults.length) {
                                        case 0:
                                            this.quizResults.push(this.quizResult);
                                            setResultQuizInServer(userId, this.quizResults);
                                            break;
                                        case 1:
                                        case 2:
                                            this.quizResults.push(this.quizResult);
                                            // const newRes = quizResults.concat(this.quizResults)
                                            setResultQuizInServer(userId, quizResults.concat(this.quizResults));
                                            break;
                                        case 3:
                                            // const sortedResults = quizResults.sort((el1, el2) => (el1.scoreLevel1 + el1.scoreLevel2 + el1.scoreLevel3 + el1.scoreLevel4) - (el2.scoreLevel1 + el2.scoreLevel2 + el2.scoreLevel3 + el2.scoreLevel4));

                                            const sortedResults = quizResults.sort((el1, el2) => (Object.values(el1).reduce((a, c) => a + c, 0)) - (Object.values(el2).reduce((a, c) => a + c, 0)))

                                            if (Object.values(sortedResults[0]).reduce((accum, cur) => accum + cur, 0) < Object.values(this.quizResult).reduce((accum, cur) => accum + cur, 0)) {
                                                sortedResults.shift();
                                                sortedResults.push(this.quizResult);
                                                setResultQuizInServer(userId, sortedResults);
                                            }
                                            break;
                                    }
                                } else {
                                    this.quizResults.push(this.quizResult);
                                    setResultQuizInServer(userId, this.quizResults);
                                }
                            })
                    }

                    winText.textContent = `${select.value === 'ru'
                        ? `Вы ответили на все вопросы и набрали ${total_points} из 24 возможных баллов!`
                        : `You answered all the questions and scored ${total_points} out of 24 possible points`
                        }`;
                    const serialObj4 = JSON.stringify(total_points);
                    localStorage.setItem('scoreLevel4', serialObj4);
                    this.quizResult.scoreLevel4 = Number(serialObj4);
                    const returnPoints4 = JSON.parse(localStorage.getItem('scoreLevel4') || '');
                    const returnPoints3 = JSON.parse(localStorage.getItem('scoreLevel3') || '');
                    result4 = returnPoints4 - returnPoints3;
                    this.quizResult.scoreLevel4 = result4;
                }
                if (level === 0) {
                    const serialObj1 = JSON.stringify(total_points);
                    localStorage.setItem('scoreLevel1', serialObj1);
                    this.quizResult.scoreLevel1 = Number(serialObj1);
                    returnPoints1 = JSON.parse(localStorage.getItem('scoreLevel1') || '');
                    this.quizResult.scoreLevel1 = returnPoints1;
                }
                if (level === 1) {
                    const serialObj2 = JSON.stringify(total_points);
                    localStorage.setItem('scoreLevel2', serialObj2);
                    this.quizResult.scoreLevel2 = Number(serialObj2);
                    const returnPoints2 = JSON.parse(localStorage.getItem('scoreLevel2') || '');
                    const returnPoints1 = JSON.parse(localStorage.getItem('scoreLevel1') || '');
                    result2 = returnPoints2 - returnPoints1;
                    this.quizResult.scoreLevel2 = result2;
                }
                if (level === 2) {
                    const serialObj3 = JSON.stringify(total_points);
                    localStorage.setItem('scoreLevel3', serialObj3);
                    this.quizResult.scoreLevel3 = Number(serialObj3);
                    const returnPoints3 = JSON.parse(localStorage.getItem('scoreLevel3') || '');
                    const returnPoints2 = JSON.parse(localStorage.getItem('scoreLevel2') || '');
                    result3 = returnPoints3 - returnPoints2;
                    this.quizResult.scoreLevel3 = result3;
                }
                const activLavel = document.querySelectorAll('.liLevel');
                level = level + 1;
                activLavel[level].classList.add('liLevelActiv');
                activLavel[level - 1].classList.remove('liLevelActiv');
                currentFishName = randomFishName();
                currentFishFoto = randomFishFoto();
                question();
                dragAndDrop();
            };
        };
        setTimeout(renderQuiz, 4000);
        return this.container;
    }
}

export default QuizPage;
