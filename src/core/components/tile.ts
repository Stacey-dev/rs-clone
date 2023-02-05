export function createTile(textLeft: string, textRight: string): HTMLDivElement {

    const containerForTile = document.createElement('div');
    containerForTile.classList.add('container__tile');
    const leftTile = document.createElement('div');
    leftTile.classList.add('tile_left');
    const rightTile = document.createElement('div');
    rightTile.classList.add('tile_right');
    leftTile.innerText = textLeft;
    rightTile.innerText = textRight;
    containerForTile.append(leftTile, rightTile)
    return containerForTile;
}
