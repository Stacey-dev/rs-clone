export function addCardLogo(container: HTMLDivElement, src: string) {
    container.innerHTML = "";
    const img = document.createElement('img');
    img.classList.add('payment__card-img')
    img.src = src;
    container.append(img)
}
