import mainContacts from "../components/mainContacts.js";

class AppContacts {
    init() {

        const appElemMain = document.querySelector('.main');

        appElemMain.innerHTML = " ";
        appElemMain.append(mainContacts);

    }
}

let app = new AppContacts().init();

export default app;
