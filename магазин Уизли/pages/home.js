import mainHome from "../components/mainHome.js";

class HomeApp {
    init() {

        const appElemMain = document.querySelector('.main');

        appElemMain.innerHTML = " ";
        appElemMain.append(mainHome);

    }
}

let homeApp = new HomeApp().init();

export default homeApp;
