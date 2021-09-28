import header from "./components/header.js";
import footer from "./components/footer.js";

class HeaderFooterApp {
    init() {
        const appElem = document.querySelector('.commonContainer');        
        appElem.append(header, footer);
    }

}

let headerFooterApp = new HeaderFooterApp();
headerFooterApp.init();




const mainElem = document.querySelector('.main');

if (!location.hash) {
        mainElem.innerHTML = "";
    import(`./pages/home.js`)
    .then(module => {
        module.homeApp;
    });
}

window.addEventListener('hashchange', _ => {
    let hash = location.hash;
    
    hash = hash.replace('#', '');
    console.log(hash);
    
    import(`./pages/${hash}.js`)

    .then(module => { 
        console.log(module);
        module.app;
       // module.app+`${hash}`;

    });

});
