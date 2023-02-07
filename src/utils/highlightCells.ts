export function highlightCell(cells: HTMLCollectionOf<Element>) {
    for (let cell of cells) {
        cell.addEventListener('click', () => {
            for (let elem of cells) {
                elem.classList.remove('td__highlight')
            }
            cell.classList.add('td__highlight')
        })
    }
}
