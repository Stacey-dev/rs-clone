import Component from '../../templates/components';
import './index.css';

class Footer extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createFooter() {
    const footerContainer: HTMLDivElement = document.createElement('div');
    footerContainer.classList.add('container');

    const footerWrapper: HTMLDivElement = document.createElement('div');
    footerWrapper.classList.add('footer__wrapper');

    const footerText: HTMLDivElement = document.createElement('div');
    footerText.classList.add('footer_row');

    footerText.innerHTML = `
    <div class="footer_col">
      <div class="menu-footer-1-en-container">
        <ul id="menu-footer-1-en" class="footer-nav">
          <li id="menu-item-21829" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21829">
            <a>Oceanogràfic</a>
            <ul class="sub-menu">
              <li id="menu-item-21830" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21830"><a href="https://www.oceanografic.org/en/what-is-oceanografic/">What is Oceanogràfic?</a></li>
              <li id="menu-item-21907" class="menu-item menu-item-type-post_type_archive menu-item-object-habitats menu-item-21907"><a href="https://www.oceanografic.org/en/habitats/">Habitats</a></li>
              <li id="menu-item-21908" class="menu-item menu-item-type-post_type_archive menu-item-object-especie menu-item-21908"><a href="https://www.oceanografic.org/en/animales/">Animals</a></li>
              <li id="menu-item-21832" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21832"><a href="https://www.oceanografic.org/en/fundacion/conservacion/">Conservation</a></li>
            </ul>
          </li>
        </ul>
      </div>      
    </div>
  <div class="footer_col">
    <div class="menu-footer-2-en-container"><ul id="menu-footer-2-en" class="footer-nav">
        <li id="menu-item-21839" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-21839">
        <a>Plan your visit</a>
          <ul class="sub-menu">
	          <li id="menu-item-21841" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21841"><a href="https://www.oceanografic.org/en/planifica-tu-visita/plano-del-parque/">Aquarium map</a></li>
	          <li id="menu-item-21842" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21842"><a href="https://www.oceanografic.org/en/planifica-tu-visita/restauracion-y-tiendas/">Where to eat</a></li>
	          <li id="menu-item-21843" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21843"><a href="https://www.oceanografic.org/en/planifica-tu-visita/hoy-en-el-acuario/">Aquarium today</a></li>
	          <li id="menu-item-21844" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21844"><a href="https://www.oceanografic.org/en/faq/">Information, Services and Recommendations</a></li>
	          <li id="menu-item-21845" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21845"><a href="https://www.oceanografic.org/en/planifica-tu-visita/how-to-get-here/">How to get here?</a></li>
	          <li id="menu-item-21846" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21846"><a href="https://www.oceanografic.org/en/tickets/">Buy your ticket</a></li>
          </ul>
        </li>
      </ul>
    </div>      
  </div>
  <div class="footer_col">
        <div class="menu-footer-3-en-container"><ul id="menu-footer-3-en" class="footer-nav"><li id="menu-item-21855" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21855"><a href="https://www.oceanografic.org/en/restaurante-submarino/">Submarine Restaurant</a></li>
        <li id="menu-item-21856" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21856"><a href="https://www.oceanografic.org/en/events-2/">An exceptional venue</a></li>
        <li id="menu-item-21857" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21857"><a href="https://www.oceanografic.org/en/escolares/">Schools</a></li>
        <li id="menu-item-21858" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21858"><a href="https://www.oceanografic.org/en/?page_id=21759">The Club</a></li>
        <li id="menu-item-21859" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-21859"><a target="_blank" rel="noopener" href="https://www.oceanografic.org/shoponline">Online shop</a></li>
        <li id="menu-item-21861" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-21749 current_page_item menu-item-21861"><a href="https://www.oceanografic.org/en/fundacion/" aria-current="page">Oceanogràfic Foundation</a></li>
        <li id="menu-item-21862" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21862"><a href="https://www.oceanografic.org/en/contacto/">Contact</a></li>
      </ul>
    </div>      
  </div>
  <div class="footer_col">
        <a class="btn btn-footer" href="http://eepurl.com/cNd1uD" target="_blank">Subscribe to newsletter</a>
        <a class="btn btn-footer nowrap" href="tel:+34960470647">
          <svg class="svg-inline--fa fa-phone fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg><!-- <i class="fas fa-phone"></i> --> 960 470 647</a>
        <div class="social-container">
          <ul>
            <li class="twitter btn-social">
              <a href="https://twitter.com/Oceanografic_vl" target="_blank">
                <svg class="svg-inline--fa fa-twitter fa-w-16 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#102f43" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter fa-2x"></i> -->
              </a>
            </li>
            <li class="facebook btn-social">
              <a href="https://www.facebook.com/oceanograficvl/" target="_blank">
                <svg class="svg-inline--fa fa-facebook-f fa-w-9 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" data-fa-i2svg=""><path fill="#102f43" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg><!-- <i class="fab fa-facebook-f fa-2x"></i> -->
              </a>
            </li>
            <li class="instagram btn-social">
              <a href="https://www.instagram.com/oceanografic_vl" target="_blank">
                <svg class="svg-inline--fa fa-instagram fa-w-14 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="#102f43" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram fa-2x"></i> -->
              </a>
            </li>
            <li class="youtube btn-social">
              <a href="https://www.youtube.com/channel/UCZ0ChGBXtUwL_jSD6s53AxQ" target="_blank">
                <svg class="youtube svg-inline--fa fa-youtube fa-w-18 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="#102f43" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><!-- <i class="fab fa-youtube fa-2x"></i> -->
              </a>
            </li>
            <li class="tiktok btn-social">
              <a href="https://www.tiktok.com/@oceanografic_vl" target="_blank">
              <svg class="tiktok" width="30px" height="30px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path></svg>
              </a>
            </li>
            <li class="linkedin btn-social">
              <a href="https://www.linkedin.com/company/oceanografic-valencia" target="_blank">
                <svg class="svg-inline--fa fa-linkedin fa-w-14 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="#102f43" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg><!-- <i class="fab fa-linkedin fa-2x"></i> -->
              </a>
            </li>
          </ul>
        </div>
        <div class="logos-container">
            <div class="logos-row">
              <div class="logos-item">
                <a href="https://www.aza.org" target="_blank">
                  <img class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-aza.png" alt="" data-was-processed="true">
                </a>
              </div>
              <div class="logos-item">
                <a href="http://americanhumane.org/press-release/oceanografic-earns-american-humane-conservation-programs-humane-certified-seal-for-the-treatment-of-its-animals" target="_blank">
                  <img class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-ah.png" alt="" data-was-processed="true">
                </a>
              </div>
              <div class="logos-item">
                <a href="#" target="_blank">
                  <img style="width:80px" class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-uicn.svg" alt="" data-was-processed="true">
                </a>
              </div>
            </div>
            <div class="logos-row">
              <div class="logos-item">
                <a href="https://www.eaza.net" target="_blank">
                  <img class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-eaza.png" alt="" data-was-processed="true">
                </a>
              </div>
              <div class="logos-item">
                <a href="http://www.aiza.org.es" target="_blank">
                  <img class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-aiza.png" alt="" data-was-processed="true">
                </a>
              </div>
              <div class="logos-item">
                <a href="https://eaam.org" target="_blank">
                  <img class="img-fluid loading" src="https://www.oceanografic.org/wp-content/themes/oceanografic/dist/images/logo-eaam.png" alt="" data-was-processed="true">
                </a>
              </div>
            </div>
        </div>     
      </div>      
    </div>`;

    const postFooter: HTMLDivElement = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.innerHTML = `<div class="post-footer__wrapper">
    <div class="item-post-footer">
      2023 ©
      |
      All rights reserved              |
      <a href="https://github.com/Shrai-dev" class="authors_link">Anastasiia</a>
      |
      <a href="https://github.com/korbut13" class="authors_link">Svetlana</a>
      |
      <a href="https://github.com/sergiipol" class="authors_link">Sergii</a>
    </div>
    <div class="rs">
        <a href="https://rs.school/js/" class="rs_link">
            <div class="rs_img"></div>
        </a>
    </div>`;

    footerWrapper.append(footerText);
    footerContainer.append(footerWrapper);
    this.container.append(footerContainer, postFooter);
  }

  render(): HTMLElement {
    this.createFooter();
    return this.container;
  }
}

export default Footer;
