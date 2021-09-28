class MainContacts {
   
    createMain() {
        this.element = document.createElement('div');
        this.element.classList.add('mainContacts');
    }

    render() {
        this.createMain();

        this.element.innerHTML = `
        <p>Официальное название магазина: <span>«Всевозможные волшебные вредилки» (англ. «Weasleys' Wizard Wheezes»).</span></p>
        <p>Адрес: <span>Косой переулок, 93.</span></p>
        <p>Дата основания: <span>1996 год.</span></p>
        `;

        return this.element;
    }
}

const mainContacts = new MainContacts().render();
export default mainContacts;