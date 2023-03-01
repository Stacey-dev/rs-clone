export function createQuizResults(container: HTMLDivElement, ...levels: number[]) {
    for (let i = 1; i <= levels.length; i++) {

        const level = document.createElement('div');

        const level_label = document.createElement('label');
        level_label.setAttribute('for', `result${i}`);
        level_label.classList.add('personal-statistic_label');
        level_label.innerText = `Level ${i}: ${levels[i - 1]}`
        const level_input = document.createElement('input');
        level_input.classList.add('personal-statistic_input');

        level_input.setAttribute('type', 'range');
        level_input.min = "0";
        level_input.max = "6";
        level_input.disabled = true;
        level_input.id = `result${i}`;
        level_input.setAttribute('value', `${levels[i - 1]}`)

        level.append(level_label, level_input);
        container.append(level)
    }
}
