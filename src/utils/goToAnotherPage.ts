export function goToAnotherPage(hash: string) {
    const url = new URL(window.location.toString());
    url.hash = hash;
    window.history.pushState({}, '', url);
    location.reload();
}
