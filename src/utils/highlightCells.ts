export function highlightCell(cells: HTMLCollectionOf<Element>) {
  for (const cell of cells) {
    cell.addEventListener('click', () => {
      for (const elem of cells) {
        elem.classList.remove('td__highlight');
      }
      cell.classList.add('td__highlight');
    });
  }
}
