import { LanguageArr } from "./types";

export function translateToAnotherLang(langArr: LanguageArr, elem: HTMLElement | Document, select: HTMLSelectElement) {

    for (const key in langArr) {
        if (elem.querySelector('.' + key)) {
            elem.querySelector('.' + key)!.innerHTML =
                langArr[key as keyof LanguageArr][select.value as keyof { ru: string; en: string }];
        }
    }

}
