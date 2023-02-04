import App from './pages/app/app';
import './style.css'
import fishDataRu from "./quiz/BD_animal_ru";
import fishDataEn from "./quiz/BD_animal_en";

const app: App = new App();
app.run();

console.log(fishDataRu);
console.log(fishDataEn);
