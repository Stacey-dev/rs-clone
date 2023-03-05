export function switchValueLanguageInHash(select: HTMLSelectElement) {
    if (window.location.hash.length !== 0) {
        let langInHash = window.location.hash.slice(1).split('=')[1];
        langInHash = select.value;
        const path = window.location.hash.slice(1).split('=')[0];
        const url = new URL(window.location.toString());
        url.hash = path + '=' + langInHash;
        window.history.pushState({}, '', url);
        if (select.value === 'ru') {
            select.value = 'ru';
        } else {
            select.value = 'en';
        }
    }
}
