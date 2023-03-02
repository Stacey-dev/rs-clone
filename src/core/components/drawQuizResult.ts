import { QuizResult } from "../../pages/personal-account/personal-account";
export function createQuizResults(container: HTMLDivElement, results: QuizResult[], lng: string) {

    const sortesResults = results.sort((el1, el2) => (Object.values(el2).reduce((a, c) => a + c, 0)) - (Object.values(el1).reduce((a, c) => a + c, 0)));

    for (let i = 0; i <= sortesResults.length; i++) {

        const wrapper = document.createElement('div');
        wrapper.classList.add(`quiz-result_wrapper`);

        const summLevels = Object.values(results[i]).reduce((accum, cur) => accum + cur, 0);

        const totalResult = document.createElement('p')
        totalResult.classList.add(`total-quiz-result-${i}`);

        lng === "ru" ? totalResult.innerHTML = `${i + 1}. Результат: ${summLevels} балла(ов) <br>(${results[i].scoreLevel1}, ${results[i].scoreLevel2}, ${results[i].scoreLevel3}, ${results[i].scoreLevel4})` : totalResult.innerHTML = `${i + 1}. Result: ${summLevels} points <br>(${results[i].scoreLevel1}, ${results[i].scoreLevel2}, ${results[i].scoreLevel3}, ${results[i].scoreLevel4})`

        wrapper.append(totalResult);

        container.append(wrapper)
    }
}
